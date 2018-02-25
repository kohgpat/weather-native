import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as citiesActions from "../../store/cities/actions";
import * as citiesSelectors from "../../store/cities/selectors";
import * as settingsSelectors from "../../store/settings/selectors";
import Cities from "../../components/Cities";

class CitiesContainer extends Component {
  componentDidMount() {
    this.props.actions.cities.citiesAll();
  }

  handleRemoveCity = city => {
    this.props.actions.cities.citiesRemove(city);
  };

  render() {
    const { cities, settings } = this.props;

    return (
      <Cities
        cities={cities}
        settings={settings}
        onRemoveCity={this.handleRemoveCity}
      />
    );
  }
}

const mapStateToProps = state => ({
  cities: citiesSelectors.getCities(state),
  settings: {
    units: settingsSelectors.getUnits(state)
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    cities: bindActionCreators(citiesActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);
