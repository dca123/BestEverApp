import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';

const ScoreView = () => (
  <View style={[styles.container, { backgroundColor: '#777171' }]}>
    <Text style = {[{
      alignItems: 'center',
      justifyContent: 'center'}]}>
      Test
    </Text>
  </View>
);
const CalendarView = () => (
  <View style={[styles.container, { backgroundColor: '#777171' }]} />
);
const RulesView = () => (
  <View style={[styles.container, { backgroundColor: '#777171' }]} />
);

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
          score: ScoreView,
          calendar: CalendarView,
          rules: RulesView
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#474040',
    paddingTop: Constants.statusBarHeight,
  },
});
