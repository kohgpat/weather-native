import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-native";
import * as citiesSelectors from "../../store/cities/selectors";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import Screen from "../../components/Screen";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Weather",
    headerRight: (
      <Button
        title="+"
        onPress={() => {
          navigation.navigate("AddCity");
        }}
      />
    )
  });

  render() {
    return (
      <Screen>
        <CitiesContainer />

        {this.props.cities.length < 1 && <FormContainer />}
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  cities: citiesSelectors.getCities(state)
});

export default connect(mapStateToProps, null)(HomeScreen);
