import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Constants } from 'expo'
import styles from './calendar_styles'
import axios from 'axios'

// Utilities

// Components
import EventCard from './event_card'

// Days of greekweek
const days =
[ {key: '3/2', short: 'Mon', full: 'Monday '},
  {key: '3/3', short: 'Tue', full: 'Tuesday '},
  {key: '3/4', short: 'Wed', full: 'Wendesday '},
  {key: '3/5', short: 'Thu', full: 'Thursday '},
  {key: '3/9', short: 'Mon', full: 'Monday '},
  {key: '3/10', short: 'Tue', full: 'Tuesday '},
  {key: '3/11', short: 'Wed', full: 'Wendesday '},
  {key: '3/12', short: 'Thu', full: 'Thursday '},
  {key: '3/13', short: 'Fri', full: 'Friday '},
  {key: '3/14', short: 'Sat', full: 'Saturday '} ]

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    var currentDate = new Date()
    var currentDateKey = (currentDate.getMonth() + 1) + '/' + (currentDate.getDate())
    // Store house data
    this.state = {
      events: false,
      todays_events: false,
      selected_day: days.find(d => d.key == currentDateKey)
    }

    this.filterEvents = this.filterEvents.bind(this)
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1Z-Sv-zqberGZB0nGmaLoL5wmk9fqPLbbnihsh6jZVhg/values/Calendar!A2:F?key=AIzaSyAWiQfbQSxDv2Agmxfq8yhVEEs_Dq99zdc`)
      .then((response) => {
        this.setState({
          events: response.data.values
        })

        if (this.state.selected_day) {
          this.setState({
            todays_events: this.filterEvents(response.data.values, this.state.selected_day.key)
          })
        }
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
            locationLink = {event[4]}
            details = {event[5]}
            key = {i + event[1]}
          ></EventCard>
        )
      })
    )
  }

  render () {
    let dayDisplay = this.state.selected_day ? this.state.selected_day.full + this.state.selected_day.key : null
    return (
      <View style = {styles.container}>
       <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <Text style = {styles.weekText}>
            Week 1
          </Text>
          <FlatList
            style = {styles.dayListContainer}
            contentContainerStyle = {styles.dayList}
            data={ days.slice(0,4) }
            scrollEnabled={false}
            horizontal
            renderItem={({item}) =>
              <TouchableOpacity
                title = {item.short}
                onPress={ () => { this.dayPress(item) }}
                style = {styles.dayButton}>
                <Text style = {{
                  color: '#fff',
                  alignSelf: 'center'
                }}>{item.short}</Text>
              </TouchableOpacity>
            }>
          </FlatList>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <Text style = {styles.weekText}>
            Week 2
          </Text>
          <FlatList
            style = {styles.dayListContainer}
            contentContainerStyle = {styles.dayList}
            data={ days.slice(4,10) }
            scrollEnabled={false}
            horizontal
            renderItem={({item}) =>
              <TouchableOpacity
                title = {item.short}
                onPress={ () => { this.dayPress(item) }}
                style = {styles.dayButton}>
                <Text style = {{
                  color: '#fff',
                  alignSelf: 'center'
                }}>{item.short}</Text>
              </TouchableOpacity>
            }>
          </FlatList>
        </View>
        <View
          style = {{
            flex: 10
          }}
        >
          <View
            style = {{
              borderBottomColor: '#568259',
              borderBottomWidth: 1,
              marginBottom: 10
            }}>
            <Text
              style = {styles.currentDateDisplay}
            >
              {dayDisplay}
            </Text>
          </View>
          <ScrollView
            contentContainerStyle = {[{
              backgroundColor: '#ebf2fa',
              flexDirection: 'column'
            }]}>
            {this.state.todays_events && this.renderEvents()}
          </ScrollView>
        </View>
      </View>

    )
  }
}
