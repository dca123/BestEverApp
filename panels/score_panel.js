import React from 'react'
import { StyleSheet, Text, ScrollView, View, RefreshControl } from 'react-native'
import axios from 'axios'

// import dsp from './Crests/dsp.jpg'

// Components
import HouseCard from '../components/house_card.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    // Store house data
    this.state = {
      houses: false,
      refreshing: false
    }

    // Bind state functions
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/G2:K?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
        // alert(JSON.stringify(response.data.values))
        this.setState({ houses: response.data.values })
      })
  }

  refresh () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/G2:J?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
      .then((response) => {
        this.setState({ houses: response.data.values })
      })
  }

  render () {
    return (
      <ScrollView
        style={styles.container}
        horizontal={false}
        refreshControl={
          <RefreshControl
            colors={['#fff']}
            tintColor="#fff"
            refreshing={this.state.refreshing}
            onRefresh={this.refresh}
          />
        }
      >

        {/* House list */}
        {this.state.houses && this.state.houses.map((house, i) => {
          return (
            <HouseCard
              key={i}
              rank={i + 1}
              house={house[0]}
              score={house[1]}
              color={house[2]}
              secondary={house[4]}
            />
          )
        })
        }

        {/* Bottom padding */}
        <Text style={{ width: '100%', height: 10 }}></Text>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
