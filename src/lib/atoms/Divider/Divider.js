import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledDivider = styled.hr`
	border-top: .5px solid ${ ({ color, ...props }) => (color || resolveTheme(TYPES.COLOR)(props)) };
	width: 100%;
  margin: 0;
`;

const Divider = ({ color, secondary }) => <StyledDivider color={ color } secondary={ secondary } />;

Divider.propTypes = {
    /**
   * Optional Divider color
   */
    color: PropTypes.string,
};

export { StyledDivider };
export default Divider;
