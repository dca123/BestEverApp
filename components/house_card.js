import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import axios from 'axios'

// import dsp from './Crests/dsp.jpg'

export default class HouseCard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={{

        backgroundColor: '#483F40',
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        flexGrow: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 2,

        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        borderLeftWidth: 10,
        borderColor: `${this.props.color}`

      }}>

        {/* Placement */ }
        <Text style={{ fontWeight: 'bold', color: 'rgba(255, 235, 60, 0.9)', width: 35 }}>
          {/* Value */ }
          <Text style={{ fontSize: 24 }}>{this.props.rank}</Text>

          {/* Modify top three  */ }
          <Text style={{ fontSize: 22 }}>{this.props.rank === 1 && 'st'}</Text>
          <Text style={{ fontSize: 22 }}>{this.props.rank === 2 && 'nd'}</Text>
          <Text style={{ fontSize: 22 }}>{this.props.rank === 3 && 'rd'}</Text>
        </Text>

        {/* House */ }
        <Text style={{ width: 200, color: `${this.props.rank <= 3 ? '#fff' : 'rgba(255,255,255,0.7)'}`, fontSize: 24 }}>{this.props.house} </Text>

        <Text style={{ color: `${this.props.rank <= 3 ? '#fff' : 'rgba(255,255,255,0.7)'}` }}>
          <Text style={{ fontSize: 24 }}>{this.props.score}</Text>

          <Text>pts</Text>
        </Text>

        {/* <Text>▲</Text> */}

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    overflow: 'scroll',
    backgroundColor: '#777171'
  },
  house: {
  },
  card: {
    backgroundColor: '#483F40',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 4,
    flexGrow: 4,
    fontSize: 22,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 2,

    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
