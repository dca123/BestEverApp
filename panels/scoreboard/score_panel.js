import React from 'react'
import axios from 'axios'
import { Text, ScrollView, RefreshControl } from 'react-native'

// Utilities
import { recordPageView } from '../../utilities/analytics'

// Components
import HouseCard from './house_card'

// Styles
import styles from './score_styles'

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

  // When page loads
  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1Z-Sv-zqberGZB0nGmaLoL5wmk9fqPLbbnihsh6jZVhg/values/G2:K?key=AIzaSyAWiQfbQSxDv2Agmxfq8yhVEEs_Dq99zdc`)
      .then((response) => {
        this.setState({ houses: response.data.values })
      })
  }

  // When user pulls to refresh
  refresh () {
    recordPageView('Scoreboard-Refresh')
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1Z-Sv-zqberGZB0nGmaLoL5wmk9fqPLbbnihsh6jZVhg/values/G2:K?key=AIzaSyAWiQfbQSxDv2Agmxfq8yhVEEs_Dq99zdc`)
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
            onRefresh={this.refresh}score
          />
        }>

        {/* House list */}
        {this.state.houses && this.state.houses.slice(0,8).map((house, i) => {
          return (
            <HouseCard
              key={i}
              rank={i + 1}
              house={house[0]}
              score={house[1]}
              color={house[2]}
              abbr={house[3]}
              secondary={house[4]}
            />
          )
        })}

        {/* Bottom padding */}
        <Text style={{ width: '100%', height: 15 }}></Text>

      </ScrollView>
    )
  }
}
