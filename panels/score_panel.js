import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import axios from 'axios'

// import dsp from './Crests/dsp.jpg'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    // Store house data
    this.state = {
      houses: []
    }
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/A2:D?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
      // alert(JSON.stringify(response.data.values))
        //   alert(navigator.geolocation)
        this.setState({ houses: response.data.values })
      })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.state.houses && this.state.houses.map((house, i) => {
          return (
            <View key={i} style={{

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

              borderLeftWidth: 5,
              borderColor: house[2]

            }}>

              {/* Placement */ }
              <Text style={{ fontWeight: 'bold', color: 'rgba(255, 235, 60, 0.9)', width: 45 }}>
                {/* Value */ }
                <Text style={{ fontSize: 25 }}>{i + 1}</Text>

                {/* Modify top three  */ }
                <Text style={{ fontSize: 22 }}>{i + 1 === 1 && 'st'}</Text>
                <Text style={{ fontSize: 22 }}>{i + 1 === 2 && 'nd'}</Text>
                <Text style={{ fontSize: 22 }}>{i + 1 === 3 && 'rd'}</Text>
              </Text>

              {/* House */ }
              <Text style={{ width: 200, color: '#fff', fontSize: 24 }}>{house[0]} </Text>

              <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
                <Text style={{ fontSize: 24 }}>{house[1]}</Text>

                <Text>pts</Text>
              </Text>

            </View>
          )
        })
        }

        <Text style={{ width: '100%', height: 20 }}></Text>
      </ScrollView>
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
