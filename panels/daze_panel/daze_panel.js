import React from 'react'
import axios from 'axios'
import { View, Text, Image, ScrollView, RefreshControl, TouchableCapacity } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
// Styles
import styles from './daze_styles'

import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer

import moment from 'moment';
//import moment to help you play with date and time

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    //initialize the counter duration-
    this.state = {
      totalDuration: 0,
    };
  }

  componentDidMount() {
    var that = this;
    //We are showing the coundown timer for a given expiry date-time
    //If you are making an quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec

    var date = moment()
      .utcOffset('-06:00')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate;
    if (moment().isAfter('2020-03-14T00:00:00')) {
      expirydate = '2021-03-11 00:00:00';//You can set your own date-time
    } else {
      expirydate = '2020-03-12 00:00:00';//You can set your own date-time
    }
    //Let suppose we have to show the countdown for above date-time

    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time

    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());

    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds

    that.setState({ totalDuration: d });
    //Settign up the duration of countdown in seconds to re-render
  }

  render() {

    return (
      <View style={styles.container}>
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          //on Press call
          size={35}

          digitTxtStyle={{color: '#4cbb17'}}
          digitStyle={{backgroundColor: '#FFF'}}
          timeLabelStyle={{color: '#4cbb17', fontWeight: 'bold'}}
          timeLabels={{d: 'Daze', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
          timeToShow={['D','H','M','S']}
        />
        <Text style={styles.daze_title}>Read {totalDuration} daze</Text>
      </View>
    );


  }
}
