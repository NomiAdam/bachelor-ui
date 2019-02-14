import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import { basicTheme, lightTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledSpan = styled.span`
  margin: 3.5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${ ({ checked, ...props }) => (checked ? resolveTheme(TYPES.COLOR)(props) : basicTheme.grey) };
  border-radius: 50%;
  transition: .25s all ease;
  &:after {
    content: "";
    position: absolute;
    display: ${ ({ checked }) => (checked ? 'block' : 'none') };
	  top: 8.5px;
	  left: 8.5px;
	  width: 8px;
	  height: 8px;
	  border-radius: 50%;
	  background: ${ lightTheme.white };
  }
`;

const StyledContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  &:hover {
    cursor: ${ ({ disabled }) => (disabled ? 'not-allowed' : 'pointer') };
    ${ StyledSpan } {
      background-color: ${ resolveTheme(TYPES.BACKGROUND_COLOR_HOVER) };
    }
  }
`;

const StyledLabel = styled.span`
  margin-left: 35px;
  padding: 0; 
`;

const getTargetValue = path(['target', 'value']);
const RadioButton = ({
    label, checked, handleChange, handleClick, disabled,
}) => (
    <StyledContainer disabled={ disabled }>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
            type="radio"
            checked={ checked }
            onChange={ disabled ? undefined : e => handleChange(e, getTargetValue(e)) }
            onClick={ handleClick }
            disabled={ disabled }
        />
        <StyledSpan checked={ checked } />
    </StyledContainer>
);

RadioButton.propTypes = {
    /**
   * Whether its disabled or not
   */
    disabled: PropTypes.bool,
    /**
     * String value of label, label will reside on left side of radio
     */
    label: PropTypes.string,
    /**
     * Whether radio is checked or not
     */
    checked: PropTypes.bool,
    /**
     * Function to be called upon change
     */
    handleChange: PropTypes.func,
    /**
     * Function to be called upon click
     */
    handleClick: PropTypes.func,
};

export { StyledSpan };
export default RadioButton;
