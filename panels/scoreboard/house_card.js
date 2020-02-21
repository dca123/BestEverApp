import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './score_styles'

// Components
import HouseCrest from './house_crest'

export default class HouseCard extends React.Component {
  render () {
    // Set default card shadow
    let glow = '#000'
    let opacity = 0.10
    let radius = 2

    // If top 3 ranked, apply gold glow
    if (this.props.rank <= 3) {
      glow = '#96e6b3'
      radius = 5
    }

    // Alter opacity to highlight top 3
    if (this.props.rank === 1) opacity = 0.25
    if (this.props.rank === 2) opacity = 0.15
    if (this.props.rank === 3) opacity = 0.1

    // Assemble border style
    let border = {
      shadowColor: glow,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: opacity,
      shadowRadius: radius
    }

    // Set point color
    let textColor = {
      color: this.props.rank <= 3 ? '#fff' : 'rgba(255,255,255,0.7)'
    }

    return (
      <View style={[styles.card, border]}>

        {/* Crest */ }
        <View><HouseCrest abbr={this.props.abbr} /></View>
        {/* Rank */ }

        {/* House */ }
        <View>
          <Text style={[textColor, styles.f22]}>
            {this.props.house}
          </Text>
        </View>


        {/* Score */ }
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* Value */ }
          <Text style={styles.rank}>{this.props.rank}</Text>

          {/* Modify top three */ }

          <Text style={styles.rank_append}>{this.props.rank === 1 && 'st'}</Text>
          <Text style={styles.rank_append}>{this.props.rank === 2 && 'nd'}</Text>
          <Text style={styles.rank_append}>{this.props.rank === 3 && 'rd'}</Text>


          {/* <Text style={[styles.f24, styles.bold, textColor]}>
          //   {this.props.score}
          // </Text>
          // <Text style={textColor}>
          //   pts
           </Text>*/}

        </View>

      </View>
    )
  }
}
