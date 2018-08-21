import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { Constants } from 'expo';
import styles from './panel_styles';
import axios from 'axios'

export default class Calendar extends React.Component {
     
    state = {
        selected_day: false,
        events: false,
        days: [ {key: "0", display: "Sat", date: "9/15"},
                {key: "1", display: "Sun", date: "9/16"},
                {key: "2", display: "Mon", date: "9/17"},
                {key: "3", display: "Tue", date: "9/18"},
                {key: "4", display: "Wed", date: "9/19"},
                {key: "5", display: "Th",  date: "9/20"},
                {key: "6", display: "Fri", date: "9/21"},
                {key: "7", display: "Sat", date: "9/22"} ] 
    }

    componentDidMount () {
        axios
          .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/Calendar!A:E?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
          .then((response) => {
            this.setState({ events: response.data.values })
          })
      }
    
      refresh () {
        axios
          .get(`https://sheets.googleapis.com/v4/spreadsheets/1ussRz_MYmSR-Hhj98cez87DOOl5Txl5z1hK1mhT9sVM/values/Calendar!A:E?key=AIzaSyA1lvmJgQeRYaoCPkjOZt7kI1kv2dyRch8`)
          .then((response) => {
            this.setState({ events: response.data.values })
          })
      }

    render()
    {
        return(
        <View style = {{
            backgroundColor: '#ff5e5e',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'stretch',
            }}>
            <FlatList
                contentContainerStyle = {{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexGrow: 1,
                    height: 40,
                }}
                data={ this.state.days }
                scrollEnabled={false}
                horizontal
                renderItem={({item}) => 
                    <View
                        style = {[{
                            backgroundColor: '#232323',
                            flexDirection: 'row',
                            borderRadius: 50,
                            height: 40,
                            width: 40,
                            alignContent: 'center',
                            justifyContent: 'center'
                            }]}>
                        <Text style = {{
                            color: '#fff',
                            paddingTop: 10
                            }}>
                        {item.display}
                        </Text>
                    </View>}>
            </FlatList>
            <View 
                style = {[{
                    backgroundColor: '#303030',
                    flexDirection: 'column',
                    
                    }]}>

            </View>
        </View>
        )
    }
}