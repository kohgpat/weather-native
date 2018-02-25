import React, { Component } from "react";
import { Button } from "react-native";
import FormContainer from "../../containers/Form";
import Screen from "../../components/Screen";
import * as styles from "./styles";

class AddCityScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerRight: (
      <styles.HeaderRight
        title="&times;"
        onPress={() => {
          navigation.goBack();
        }}
      />
    )
  });

  render() {
    return (
      <Screen>
        <FormContainer navigation={this.props.navigation} inAddCityScreen />
      </Screen>
    );
  }
}

export default AddCityScreen;
