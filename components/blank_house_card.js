import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'

export default class BlankHouseCard extends React.Component {
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
        borderColor: '#fff'

      }}>

        <Text style={{ fontSize: 24, color: '#483F40' }}>yo</Text>

      </View>

    )
  }
}
