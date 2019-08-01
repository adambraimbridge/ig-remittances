/**
 * @file
 * Country selector
 */

import React from 'react';
import PropTypes from 'prop-types';

const CountrySelector = ({ country, countries, setHighlighted }) => (
  <span className="o-forms-input o-forms-input--select">
    <select className="selector__dropdown selector__dropdown--country" value={country} onChange={setHighlighted}>
      {countries.map(({ country_iso3, country_name }) => (
        <option key={country_iso3} value={country_iso3}>
          {country_name}
        </option>
      ))}
    </select>
  </span>
);

CountrySelector.propTypes = {
  country: PropTypes.string.isRequired,
  setHighlighted: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      country_iso3: PropTypes.string.isRequired,
      country_name: PropTypes.string.isRequired,
    }),
  ),
};

CountrySelector.defaultProps = {
  countries: [],
};

export default CountrySelector;