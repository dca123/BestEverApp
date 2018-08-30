import React from 'react'
import { Text, View, Animated } from 'react-native'

// Styles
// import styles from './score_styles'

export default class EventCard extends React.Component {
  constructor (props) {
    super(props)

    // Store house data
    this.state = {
      expanded: false,
      animation: new Animated.Value()
    }
  }
  render () {
    return (
      <View
        style={{
          backgroundColor: '#483F40',

          marginLeft: 10,
          marginRight: 10,
          marginBottom: 20,
          borderRadius: 4,
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 10,
          paddingLeft: 10,

          height: 130,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Text style={{color: '#ffffff'}}> {this.props.name} </Text>
        <Text style={{color: '#ffffff'}}> {this.props.date} </Text>
        <Text style={{color: '#ffffff'}}> {this.props.time} </Text>
        <Text style={{color: '#ffffff'}}> {this.props.location} </Text>
        {/* <Text style={{color: '#ffffff'}}> {this.props.details} </Text> */}
      </View>
    )
  }
}
