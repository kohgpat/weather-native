import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as styles from "./styles";

const INITIAL_STATE = {
  name: "",
  interval: "10"
};

const convertMinutesToSeconds = minutes => {
  return minutes * 60;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.isValid()) {
      return false;
    }

    const city = {
      name: this.state.name.replace(/ /g, ''),
      interval: convertMinutesToSeconds(this.state.interval) * 1000
    };

    this.props.onAddCity(city);

    this.setState({
      ...INITIAL_STATE
    });
  };

  isValid = () => {
    const { name, interval } = this.state;

    if (!name || !name.length) {
      return false;
    }

    if (!interval) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <styles.Form inAddCityScreen={this.props.inAddCityScreen}>
          <styles.Block>
            <styles.Name>Enter City</styles.Name>
          </styles.Block>

          <styles.Block>
            <styles.Header>
              <styles.Label>Name</styles.Label>
            </styles.Header>

            <styles.Input
              name="name"
              value={this.state.name}
              onChangeText={value => this.handleFieldChange("name", value)}
            />
          </styles.Block>

          <styles.Block>
            <styles.Header>
              <styles.Label>Update interval</styles.Label>

              <styles.HelpText>(in minutes)</styles.HelpText>
            </styles.Header>

            <styles.Input
              name="interval"
              keyboardType="numeric"
              value={this.state.interval}
              onChangeText={value => this.handleFieldChange("interval", value)}
            />
          </styles.Block>

          <styles.Block last>
            <styles.SubmitButton
              title="Add city"
              disabled={!this.isValid()}
              onPress={this.handleSubmit}
            />
          </styles.Block>
        </styles.Form>
      </TouchableWithoutFeedback>
    );
  }
}

export default Form;
