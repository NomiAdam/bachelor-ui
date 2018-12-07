// eslint-disable-next-line no-unused-vars
import React, { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme } from '../../constants/theme';

const HeadingUnderline = styled.div`
  content: '';
  width: ${ ({ width }) => width };
  border-bottom: 3px solid ${ basicTheme.indigo };
  margin: -15px 0 0 5px;
`;

const Heading = ({
    component, label, width, underlineClass, underline, ...others
}) => (
    <Fragment>
        { createElement(component, others, label) }
        { underline ? <HeadingUnderline className={ underlineClass } width={ width } /> : null }
    </Fragment>
);
Heading.propTypes = {
    /**
     * String representation of desired element
     */
    component: PropTypes.string,
    /**
     * String representation of display text
     */
    label: PropTypes.string,
    /**
   * String representation of heading underline
   */
    width: PropTypes.string,
    /**
   * className for heading borderline
   */
    underlineClass: PropTypes.string,
    /**
   * Whether to render border or not
   */
    underline: PropTypes.bool,
};

Heading.defaultProps = {
    component: 'h2',
};

export default Heading;
