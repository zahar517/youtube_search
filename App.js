import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Header, Button } from "react-native-elements";

export class App extends Component {
  state = {
    inputValue: "",
  };

  searchInputChange = text => this.setState({ inputValue: text });

  searchButtonClick = () => console.log(this.state.inputValue);

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
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={this.state.inputValue}
            onChangeText={this.searchInputChange}
          />
          <Button
            buttonStyle={styles.searchButton}
            title="Search"
            onPress={this.searchButtonClick}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  searchContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchButton: {
    backgroundColor: "#e62117",
  },
};

export default App;
