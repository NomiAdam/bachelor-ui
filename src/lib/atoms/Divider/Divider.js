import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledDivider = styled.hr`
	border-top: .5px solid ${ resolveTheme(TYPES.COLOR) };
`;

const Divider = ({ color }) => <StyledDivider color={ color } />;

Divider.propTypes = {
    /**
   * Optional Divider color
   */
    color: PropTypes.string,
};

export { StyledDivider };
export default Divider;
