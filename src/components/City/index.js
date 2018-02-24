import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const City = ({ city, settings, onRemoveCity }) => {
  if (!city) {
    return null;
  }

  return (
    <styles.City>
      <styles.Name>{city.name}</styles.Name>
    </styles.City>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired
};

City.defaultProps = {
  onRemoveCity: null
};

export default City;
