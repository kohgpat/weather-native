import React, { Component } from "react";
import { Keyboard } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as citiesActions from "../../store/cities/actions";
import Form from "../../components/Form";

class FormContainer extends Component {
  handleAddCity = city => {
    this.props.actions.cities.citiesAdd(city);

    Keyboard.dismiss();

    if (this.props.inAddCityScreen) {
      this.props.navigation.goBack();
    }
  };

  render() {
    return <Form {...this.props} onAddCity={this.handleAddCity} />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    cities: bindActionCreators(citiesActions, dispatch)
  }
});

export default connect(null, mapDispatchToProps)(FormContainer);
