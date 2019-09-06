import React from "react";
import { Text, View } from "react-native";
export default class InfoScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: "#474040",
          flexGrow: 1,
          justifyContent: "flex-start"
        }}
      >
        <Text style={{ color: "#fff", margin: 15 }}>About the Developers:</Text>
        <Text style={{ color: "#fff", marginHorizontal: 15, marginBottom: 10 }}>
          This app was developed by three members of Delta Sigma Phi: Delta
          Epsilon at Missouri S&T
        </Text>
        <Text
          style={{ color: "#fff", marginHorizontal: 15, marginVertical: 8 }}
        >
          Shane Bodimer:{"\n"}
          Computer Science{"\n"}
          Delta Sigma Phi{"\n"}
          KMNR
        </Text>
        <Text
          style={{ color: "#fff", marginHorizontal: 15, marginVertical: 8 }}
        >
          Sam Osborne:{"\n"}
          Super Senior in Computer Engineering and Computer Science{"\n"}
          Delta Sigma Phi{"\n"}
          IFC VP Riskman
        </Text>
        <Text
          style={{ color: "#fff", marginHorizontal: 15, marginVertical: 8 }}
        >
          Maneesh Gona:{"\n"}
          Super Senior in Computer Engineering and Computer Science{"\n"}
          Delta Sigma Phi{"\n"}
          KMNR - MC Mardi Gras
        </Text>
        <Text
          style={{
            color: "#fff",
            marginTop: 30,
            marginBottom: 30,
            fontSize: 10
          }}
        >
          The Greek Week App is not a substitute for the Games Packet. {"\n"}
          Information is not guranteed to be completely up to date or reliable.{" "}
          {"\n"}
          Please refer to the games packet for definitive rules and schedules{" "}
          {"\n"}
        </Text>
      </View>
    );
  }
}
