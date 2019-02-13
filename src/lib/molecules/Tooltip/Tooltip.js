import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DEFAULT_THEME, { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledTooltipText = styled.span`
  ${ DEFAULT_THEME }
  visibility: hidden;
  width: 120px;
  text-align: center;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%; 
  margin-bottom: 5px;
  margin-left: -60px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top-color: ${ resolveTheme(TYPES.COLOR) };
  }
`;

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${ StyledTooltipText } {
      visibility: visible;
    }
  }
`;

const Tooltip = ({ label, children }) => (
    <StyledTooltip>
        {children}
        <StyledTooltipText>{ label }</StyledTooltipText>
    </StyledTooltip>
);

Tooltip.propTypes = {
    /**
     * String definition of tooltip text
     */
    label: PropTypes.string,
    /**
     * Anything to have tooltip attached to it
     */
    children: PropTypes.any,
};

export { StyledTooltip };
export default Tooltip;
