// eslint-disable-next-line no-unused-vars
import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ component, label, ...others }) => createElement(component, others, label);

Heading.propTypes = {
    /**
     * String representation of desired element
     */
    component: PropTypes.string,
    /**
     * String representation of display text
     */
    label: PropTypes.string,
};

Heading.defaultProps = {
    component: 'h2',
};

export default Heading;
