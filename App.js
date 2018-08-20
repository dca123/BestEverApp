import React from 'react';
import { StyleSheet, StatusBar, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import styles from './panels/panel_styles';
import Calendar from './panels/calendar_panel';
import Rules from './panels/rules_panel';
import Score from './panels/score_panel';

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'score',  title: 'Scoreboard' },
      { key: 'calendar', title: 'Calendar' },
      { key: 'rules',  title: 'Rule Book' },
    ],
  };
  
  _renderTabBar = props => 
  <TabBar 
    {...props}
    renderLabel={ (route) =>
        <Text style ={{ color: '#fff', margin: 15 }}>
          {route.route.title}
        </Text>
      }
    style={styles.header}
  />;

  render() {
    return ( 
    
      <TabView
        navigationState={this.state}
        renderTabBar= {this._renderTabBar}
        renderScene={SceneMap({
          score: Score,
          calendar: Calendar,
          rules: Rules
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} />
        

        );
  }
}
