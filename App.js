import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";
import { getVideos } from "./api";

export class App extends Component {
  state = {
    isLoading: false,
    videos: [],
  };

  onPressSearch = text => {
    this.setState({ isLoading: true });
    getVideos(text).then(videos => {
      console.log(videos);
      this.setState({ isLoading: false, videos });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <AppHeader headerText="Simple youtube Search" />
        <SearchBar
          onPressSearch={this.onPressSearch}
          isLoading={this.state.isLoading}
        />
      </View>
    );
  }
}

export default App;
