import React from 'react'
import axios from 'axios'
import { View, Text, Image, ScrollView, RefreshControl, TouchableOpacity, Linking } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
// Styles
import styles from './sales_styles'
import MapView from 'react-native-maps';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      markers: [],
    };
  }

  componentDidMount () {
    axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1Z-Sv-zqberGZB0nGmaLoL5wmk9fqPLbbnihsh6jZVhg/values/Sales!A2:D?key=AIzaSyAWiQfbQSxDv2Agmxfq8yhVEEs_Dq99zdc`)
      .then((response) => {
        this.setState({
          isLoading: false,
          sales: response.data.values
        })
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.9485,
            longitude: -91.7715,
            latitudeDelta: 0.06,
            longitudeDelta: 0.0421
          }}
        >
        {this.state.isLoading ? null : this.state.sales.map((marker, index) => {
         const coords = {
             latitude: parseFloat(marker[1]),
             longitude: parseFloat(marker[2]),
         };

         return (
             <MapView.Marker
                key={index}
                coordinate={coords}
             >
             <MapView.Callout onPress={() => this.openMap(marker[1],marker[2])}>
               <Text style={styles.calloutTitle}>{marker[0]}</Text>
               <Text style={styles.calloutDesc}>{marker[3]}</Text>
            </MapView.Callout>
            </MapView.Marker>
         );
        })}
        </MapView>
        <TouchableOpacity onPress={this.openShop}>
          <Text style={styles.buyButton}>Buy Online</Text>
        </TouchableOpacity>
      </View>
    );
  }
  openShop = () => {
    Linking.openURL("https://stpats.mst.edu/merchandise")
  }
  openMap = (lat, lng) => {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`)
  }
}
