import React from 'react';
import PropTypes from 'prop-types';

const InformationLayout = ({ children }) => {
	return <div className="information-layout">{children}</div>;
};

InformationLayout.propTypes = {
	children: PropTypes.node,
};

export default InformationLayout;
