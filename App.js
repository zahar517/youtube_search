import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "./components/SearchBar";
import AppHeader from "./components/AppHeader";
import VideoList from "./components/VideoList";
import { getVideos } from "./api";

export class App extends Component {
  state = {
    isLoading: false,
    videos: [],
  };

  onPressSearch = text => {
    this.setState({ isLoading: true });
    getVideos(text).then(videos => {
      this.setState({ isLoading: false, videos });
    });
  };

  render() {
    const { isLoading, videos } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <AppHeader headerText="Simple youtube Search" />
        <SearchBar onPressSearch={this.onPressSearch} isLoading={isLoading} />
        <VideoList videos={videos} />
      </View>
    );
  }
}

export default App;
