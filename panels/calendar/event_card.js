import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './calendar_styles'

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
  resetExpands () {
    this.setState({expanded: false})
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
          style={styles.eventCard}>
          <View
            style={{ // main details
              flexDirection: 'row'
            }}
            justifyContent = 'space-between'
          >
            <Text
              style={{ // event name
                color: '#ffffff',
                fontSize: 20
              }}
            > {this.props.name} </Text>
            <Text
              style={{
                color: '#ffffff'
              }} // time
            > {this.props.time} </Text>
          </View>
          {this.state.expanded // expanded details
            ? <View
              justifyContent = 'flex-start'>
              <Text style={{color: '#ffffff'}}> Location: {this.props.location} {'\n'} </Text>
              <Text style={{color: '#ffffff'}}> {this.props.details} </Text>
            </View>
            : null }
        </View>
      </TouchableOpacity>
    )
  }
}
