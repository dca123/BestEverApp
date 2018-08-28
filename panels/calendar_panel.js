import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { Constants } from 'expo'
import styles from './panel_styles'
import axios from 'axios'

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
        {key: '5', display: 'Th', date: '9/20'},
        {key: '6', display: 'Fri', date: '9/21'},
        {key: '7', display: 'Sat', date: '9/22'} ]
    }

    this.filterEvents = this.filterEvents.bind(this)
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/Calendar!A2:E?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
        this.setState({
          events: response.data.values,
          todays_events: this.filterEvents(response.data.values, this.state.selected_day)
        })
      })
  }

  dayPress (newDay) {
    this.setState({ selected_day: newDay })
    this.setState({
      todays_events: this.filterEvents(Array.from(this.state.events), this.state.selected_day)})
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
        <View key = {i} style={{
          backgroundColor: '#483F40',

          marginLeft: 10,
          marginRight: 10,
          marginBottom: 20,
          borderRadius: 4,
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 10,
          paddingLeft: 10,

          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text> {event[0]} </Text>
          <Text> {event[1]} </Text>
          <Text> {event[2]} </Text>
          <Text> {event[3]} </Text>
          <Text> {event[4]} </Text>
        </View>
      )
    })
  }

  render () {/*
    return (
      <View style = {{
        backgroundColor: '#777171',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'stretch'
      }}>
        <FlatList
          style = {{
            paddingBottom: 50,
            paddingTop: 5
          }}
          contentContainerStyle = {{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            flexGrow: 1,
            height: 40
          }}
          data={ this.state.days }
          scrollEnabled={false}
          horizontal
          renderItem={({item}) =>
            <View
              onTouchStart= {this.dayPress(item.key)}
              style = {[{
                backgroundColor: '#232323',
                flexDirection: 'row',
                borderRadius: 50,
                height: 40,
                width: 40,
                alignContent: 'center',
                justifyContent: 'center'
              }]}>
              <Text style = {{
                color: '#fff',
                paddingTop: 10
              }}>
                {item.display}
              </Text>
            </View>}>
        </FlatList>

        <View
          style = {[{
            backgroundColor: '#303030',
            flexDirection: 'column'

          }]}>
          {this.renderEvents()}
        </View>
      </View>
    )
  }
  */
}
