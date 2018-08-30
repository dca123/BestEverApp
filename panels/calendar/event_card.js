import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// Styles
// import styles from './score_styles'

export default class EventCard extends React.Component {
  constructor (props) {
    super(props)

    // Store house data
    this.state = {
      expanded: false
    }
  }
  detailtoggle () {
    let old = this.state.expanded
    this.setState({expanded: !old})
  }
  render () {
    return (
      <TouchableOpacity
        onPress = { () => { this.detailtoggle() } }
      >
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
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Text style={{color: '#ffffff'}}> {this.props.name} </Text>
            <Text style={{color: '#ffffff'}}> {this.props.date} </Text>
            <Text style={{color: '#ffffff'}}> {this.props.time} </Text>
            <Text style={{color: '#ffffff'}}> {this.props.location} </Text>
          </View>
          {this.state.expanded
            ? <View>
              <Text style={{color: '#ffffff'}}> {this.props.details} </Text>
            </View>
            : null }
        </View>
      </TouchableOpacity>
    )
  }
}
