import React, { Component } from "react";
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

    const city = this.state;
    const _city = {
      ...city,
      interval: convertMinutesToSeconds(city.interval) * 1000
    };

    this.props.onAddCity(_city);

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
      <styles.Form inAddCityScreen={this.props.inAddCityScreen}>
        <styles.Block>
          <styles.Name>Add City</styles.Name>
        </styles.Block>

        <styles.Block>
          <styles.Label>Name</styles.Label>

          <styles.Input
            name="name"
            value={this.state.name}
            onChangeText={value => this.handleFieldChange("name", value)}
          />
        </styles.Block>

        <styles.Block>
          <styles.Label>
            Update interval
            <styles.HelpText>(in minutes)</styles.HelpText>
          </styles.Label>

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
    );
  }
}

export default Form;
