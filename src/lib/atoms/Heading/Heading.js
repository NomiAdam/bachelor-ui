// eslint-disable-next-line no-unused-vars
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const HeadingWrapper = styled.div`
  color: ${ resolveTheme(TYPES.COLOR) };
  cursor: ${ ({ cursor }) => cursor };
`;

const Heading = ({
    component, label, width, cursor, ...others
}) => (
    <HeadingWrapper>
        {createElement(component, others, label)}
    </HeadingWrapper>
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
   * String representation of desired css cursor property
   */
    cursor: PropTypes.string,
};

Heading.defaultProps = {
    component: 'h2',
    cursor: 'initial',
};

export default Heading;
