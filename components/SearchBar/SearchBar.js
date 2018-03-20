import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Button } from "react-native-elements";

export class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  searchInputChange = text => this.setState({ inputValue: text });

  searchButtonClick = () => this.props.onPressSearch(this.state.inputValue);

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
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

export default SearchBar;
