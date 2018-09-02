import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Constants } from 'expo'
import styles from '../panel_styles'
import axios from 'axios'

// Utilities
import { recordPageView } from '../../utilities/analytics'

// Components
import EventCard from './event_card'

// Days of greekweek
const days =
[ {key: '9/15', short: 'Sat', full: 'Saturday '},
  {key: '9/16', short: 'Sun', full: 'Sunday '},
  {key: '9/17', short: 'Mon', full: 'Monday '},
  {key: '9/18', short: 'Tue', full: 'Tuesday '},
  {key: '9/19', short: 'Wed', full: 'Wendesday '},
  {key: '9/20', short: 'Thu', full: 'Thursday '},
  {key: '9/21', short: 'Fri', full: 'Friday '},
  {key: '9/22', short: 'Sat', full: 'Saturday '} ]

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    var currentDate = new Date()
    var currentDateKey = (currentDate.getMonth() + 1) + '/' + (currentDate.getDate() + 19)
    // Store house data
    this.state = {
      events: false,
      todays_events: false,
      selected_day: days.find(d => d.key == currentDateKey)
    }

    this.filterEvents = this.filterEvents.bind(this)
  }

  componentDidMount () {
    recordPageView('Scoreboard-Init')
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/Calendar!A2:F?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
        this.setState({
          events: response.data.values,
          todays_events: this.filterEvents(response.data.values, this.state.selected_day.key)
        })
      })
  }

  dayPress (newDay) {
    this.setState({
      selected_day: newDay,
      todays_events: false
    })
    this.setState({
      todays_events: this.filterEvents(Array.from(this.state.events), newDay.key)
    })
  }

  filterEvents (events, dayKey) {
    let today = []
    for (event of events) {
      if (event[1] === dayKey) {
        today.push(event)
      }
    }
    // alert(JSON.stringify(today))
    return today
  }

  renderEvents () {
    return (
      Array.from(this.state.todays_events).map((event, i) => {
        return (
          <EventCard
            name = {event[0]}
            date = {event[1]}
            time = {event[2]}
            location = {event[3]}
            details = {event[4]}
            key = {i + event[1]}
          ></EventCard>
        )
      })
    )
  }

  render () {
    let dayDisplay = this.state.selected_day ? this.state.selected_day.full + this.state.selected_day.key : null
    return (
      <View style = {{
        backgroundColor: '#777171',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'stretch'
      }}>
        <FlatList
          style = {{
            paddingBottom: 5,
            paddingTop: 5,
            flex: 1
          }}
          contentContainerStyle = {{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            flexGrow: 1
          }}
          data={ days }
          scrollEnabled={false}
          horizontal
          renderItem={({item}) =>
            <TouchableOpacity
              title = {item.short}
              onPress={ () => { this.dayPress(item) }}
              style = {[{
                backgroundColor: '#232323',
                borderRadius: 50,
                height: 40,
                width: 40,
                alignContent: 'center',
                justifyContent: 'center'
              }]}>
              <Text style = {{
                color: '#fff',
                alignSelf: 'center'
              }}>
                {item.short}
              </Text>
            </TouchableOpacity>
          }>
        </FlatList>
        <View
          style = {{
            flex: 10
          }}
        >
          <View>
            <Text
              style = {{
                fontSize: 20,
                color: '#fff',
                paddingBottom: 15,
                paddingLeft: 10
              }}
            >
              {dayDisplay}
            </Text>
          </View>
          <ScrollView
            contentContainerStyle = {[{
              backgroundColor: '#777171',
              flexDirection: 'column'
            }]}>
            {this.state.todays_events && this.renderEvents()}
          </ScrollView>
        </View>
      </View>

    )
  }
}
