import React, { Component } from "react";
import PropTypes from "prop-types";
import City from "../City";
import * as styles from "./styles";

class Cities extends Component {
  _keyExtractor = (item, index) => item.city.id;

  _renderItem = ({ item }) => (
    <City
      id={item.city.id}
      city={item.city}
      settings={item.settings}
      onRemoveCity={item.onRemoveCity}
    />
  );

  render() {
    const { cities, settings, onRemoveCity } = this.props;

    const data = cities.map(city => ({
      city,
      settings,
      onRemoveCity
    }));

    if (!cities.length) {
      return (
        <styles.NoCitiesMessage>
          You have no cities. Please add one using form below.
        </styles.NoCitiesMessage>
      );
    }

    return (
      <styles.Cities
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired
};

Cities.defaultProps = {
  cities: [],
  settings: null,
  onRemoveCity: null
};

export default Cities;
