import React from 'react';
import PropTypes from 'prop-types';

const ChartHead = ({ title, subHead }) => (
  <div className="chart-head">
    <div className="stab-rule" />

    <h2 className="o-typography-heading-level-2">
      {title}
    </h2>

    <h3 className="o-typography-heading-level-3">
      {subHead}
    </h3>
  </div>
);

ChartHead.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  subHead: PropTypes.string.isRequired,
};

export default ChartHead;
