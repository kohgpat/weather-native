import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "react-native";
import * as citiesSelectors from "../../store/cities/selectors";
import * as settingsActions from "../../store/settings/actions";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import Screen from "../../components/Screen";
import * as styles from "./styles";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "Weather",
      headerLeft: (
        <styles.HeaderLeft
          settings={params.settings}
          toggleSettingsUnits={params.toggleSettingsUnits}
        />
      ),
      headerRight: (
        <styles.HeaderRight
          title="+"
          onPress={() => {
            navigation.navigate("AddCity");
          }}
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({
      settings: this.props.settings,
      toggleSettingsUnits: this.toggleSettingsUnits,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settings.units !== this.props.settings.units) {
      this.props.navigation.setParams({
        settings: nextProps.settings
      });
    }
  }

  toggleSettingsUnits = units => {
    this.props.actions.settings.settingsSetUnits(units);
  };

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
  cities: citiesSelectors.getCities(state),
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  actions: {
    settings: bindActionCreators(settingsActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
