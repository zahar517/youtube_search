import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";

export class App extends Component {
  onPressSearch = text => console.log(text);

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <AppHeader headerText="Simple youtube Search" />
        <SearchBar onPressSearch={this.onPressSearch} />
      </View>
    );
  }
}

export default App;
