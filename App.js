import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <Header
          centerComponent={{
            text: "Simple youtube Search",
            style: { color: "white" },
          }}
          outerContainerStyles={{ backgroundColor: "#e62117" }}
        />
      </View>
    );
  }
}

export default App;
