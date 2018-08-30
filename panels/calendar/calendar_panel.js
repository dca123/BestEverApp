import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Constants } from 'expo'
import styles from '../panel_styles'
import axios from 'axios'

// Components
import EventCard from './event_card'

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)

    // Store house data
    this.state = {
      selected_day: '0',
      events: false,
      todays_events: false,
      days:
      [ {key: '0', display: 'Sat', date: '9/15'},
        {key: '1', display: 'Sun', date: '9/16'},
        {key: '2', display: 'Mon', date: '9/17'},
        {key: '3', display: 'Tue', date: '9/18'},
        {key: '4', display: 'Wed', date: '9/19'},
        {key: '5', display: 'Thu', date: '9/20'},
        {key: '6', display: 'Fri', date: '9/21'},
        {key: '7', display: 'Sat', date: '9/22'} ]
    }

    this.filterEvents = this.filterEvents.bind(this)
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/Calendar!A2:F?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
        this.setState({
          events: response.data.values,
          todays_events: this.filterEvents(response.data.values, this.state.selected_day)
        })
      })
  }

  dayPress (newDay) {
    this.setState({ todays_events: false })
    this.setState({
      todays_events: this.filterEvents(Array.from(this.state.events), newDay)})
  }

  filterEvents (events, day) {
    let today = []
    for (event of events) {
      if (event[2] === day) {
        today.push(event)
      }
    }
    // alert(JSON.stringify(today))
    return today
  }

  renderEvents () {
    return Array.from(this.state.todays_events).map((event, i) => {
      return (
        <EventCard
          name = {event[0]}
          date = {event[1]}
          time = {event[3]}
          location = {event[4]}
          details = {event[5]}
          key = {i}
        ></EventCard>
      )
    })
  }

  render () {
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
          data={ this.state.days }
          scrollEnabled={false}
          horizontal
          renderItem={({item}) =>
            <TouchableOpacity
              title = {item.display}
              onPress={ () => { this.dayPress(item.key) }}
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
                {item.display}
              </Text>
            </TouchableOpacity>
          }>
        </FlatList>
        <View
          style = {{
            flex: 10
          }}
        >
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
