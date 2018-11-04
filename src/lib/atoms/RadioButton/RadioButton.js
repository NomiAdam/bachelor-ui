import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  margin: 3.5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${({ checked }) => checked ? lightTheme.lightBlue : lightTheme.whiteBlue};
  border-radius: 50%;
  transition: .25s all ease;
  &:after {
    content: "";
    position: absolute;
    display: ${({ checked }) => checked ? 'block' : 'none'};
	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${lightTheme.white};
  }
`;

const StyledContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  &:hover {
    ${StyledSpan} {
      background-color: ${lightTheme.whiteBlue};
    }
  }
`;

const StyledLabel = styled.span`
  margin-left: 35px;
  padding: 0; 
`;

const RadioButton = ({label, checked, handleChange, handleClick}) => {
    return (
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type="radio" checked={checked} onChange={handleChange} onClick={handleClick} />
            <StyledSpan checked={checked} />
        </StyledContainer>
    );
};

RadioButton.propTypes = {
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
