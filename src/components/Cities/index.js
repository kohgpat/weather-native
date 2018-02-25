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
    const {
      cities,
      settings,
      onRemoveCity,
      onRefreshCities,
      isCitiesFetching
    } = this.props;

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
        onRefresh={onRefreshCities}
        refreshing={isCitiesFetching}
      />
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired,
  onRefreshCities: PropTypes.func.isRequired,
  isCitiesFetching: PropTypes.bool.isRequired
};

Cities.defaultProps = {
  cities: [],
  settings: null,
  onRemoveCity: null,
  onRefreshCities: null,
  isCitiesFetching: false
};

export default Cities;
