import React from "react";
import { Header } from "react-native-elements";

export const AppHeader = ({ headerText }) => (
  <Header
    centerComponent={{
      text: headerText,
      style: { color: "white" },
    }}
    outerContainerStyles={{ backgroundColor: "#e62117" }}
  />
);

export default AppHeader;
