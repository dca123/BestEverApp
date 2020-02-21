import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { createStackNavigator } from "react-navigation";

// Components
import Calendar from "./panels/calendar/calendar_panel";
import Daze from "./panels/daze_panel/daze_panel";
import Score from "./panels/scoreboard/score_panel";
import NonGreek from "./panels/scoreboard/nongreek_panel";
import InfoScreen from "./panels/info_screen/info";

// Styles
import styles from "./panels/panel_styles";

import shamrock from './images/shamrock.png'


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    // Store house data
    this.state = {
      index: 0,
      routes: [
        { key: "daze", title: "DAZE" },
        { key: "score", title: "All Scores" },
        { key: "nongreek", title: "Non Greek" },
        { key: "calendar", title: "Calendar" }
      ]
    };

    // Bind state functions
    this._renderTabBar = this.renderTabBar.bind(this);
  }

  static navigationOptions = { title: "Home", header: null };

  renderTabBar(props) {
    return (
      <TabBar
        {...props}
        renderLabel={route => (
          <Text style={{ color: "#fff", paddingBottom: 15 }}>
            {route.route.title}
          </Text>
        )}
        style={styles.header}
        indicatorStyle={{ backgroundColor: '#96e6b3', height: 2 }}
      />
    );
  }

  render() {
    return (
      <View
        style={{
          flexGrow: 1
        }}
      >
        <View
          style={{
            flex: 2,
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 0,
            backgroundColor: "#4cbb17",
            borderBottomWidth: 1,
            borderBottomColor: "#4cbb17",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "#fff"
            }}
          >
          <Image style={{height: 25, width:25}} source={shamrock} />
            {" "}
            Best Ever St Pat's
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Info")}
            // style={{ backgroundColor: 'red' }}
          >
            <View
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "center",
                width: 25,
                height: 25,
                borderRadius: 100,
                backgroundColor: "#fff"
              }}
            >
              <Text
                style={{ color: "#395e66", fontSize: 17, fontStyle: "italic" }}
              >
                {" "}
                i{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TabView
          style={{
            flex: 30
          }}
          navigationState={this.state}
          renderTabBar={this._renderTabBar}
          renderScene={SceneMap({
            score: Score,
            nongreek: NonGreek,
            calendar: Calendar,
            daze: Daze
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: InfoScreen }
});
