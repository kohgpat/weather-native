import React, { Component } from "react";
import { Button } from "react-native";
import FormContainer from "../../containers/Form";
import Screen from "../../components/Screen";

class AddCityScreen extends Component {
  static navigationOptions = {
    title: "Add City"
  };

  render() {
    return (
      <Screen>
        <FormContainer navigation={this.props.navigation} inAddCityScreen />
      </Screen>
    );
  }
}

export default AddCityScreen;
