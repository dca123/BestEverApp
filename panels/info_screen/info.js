import React from "react";
import { Text, View } from "react-native";
export default class InfoScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: "#EBF2FA",
          flexGrow: 1,
          justifyContent: "flex-start"
        }}
      >
      <Text style={{ color: "#379634", margin: 15, marginBottom: 0 }}>About the Developers:{"\n"}</Text>
      <Text
        style={{ color: "#379634", marginHorizontal: 15, marginVertical: 8 }}
      >
        <Text style={{fontWeight: 'bold'}}>
          Devinda Senanayaka{"\n"}
        </Text>
        Computer Science{"\n"}
        Delta Tau Delta{"\n"}
        KMNR - DJ Mushroom
      </Text>
        <Text
          style={{ color: "#379634", marginHorizontal: 15, marginVertical: 8 }}
        >
          <Text style={{fontWeight: 'bold'}}>
            Shane Bodimer{"\n"}
          </Text>
          Computer Science{"\n"}
          Delta Sigma Phi{"\n"}
          KMNR - MC Flow
        </Text>
        <Text
          style={{ color: "#379634", marginHorizontal: 15, marginVertical: 8 }}
        >
          <Text style={{fontWeight: 'bold'}}>
            Maneesh Gona{"\n"}
          </Text>
          Delta Sigma Phi{"\n"}
          KMNR - MC Mardi Gras{"\n"}
          EcoMiners{"\n"}
          20's BB
        </Text>
        <Text
          style={{ color: "#379634", marginHorizontal: 15, marginVertical: 8 }}
        >
          <Text style={{fontWeight: 'bold'}}>
            Sam Osborbe{"\n"}
          </Text>
          Senior in Computer Engineering and Computer Science{"\n"}
          Delta Sigma Phi{"\n"}
        </Text>
        <Text
          style={{
            color: "#379634",
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 15,
            fontSize: 10
          }}
        >
          The Best Ever App is not a substitute for the Participation Packet. {"\n"}
          Information is not guranteed to be completely up to date or reliable.{" "}
          {"\n"}
          Please refer to the games packet for definitive rules and schedules{" "}
          {"\n"}
        </Text>
      </View>
    );
  }
}
