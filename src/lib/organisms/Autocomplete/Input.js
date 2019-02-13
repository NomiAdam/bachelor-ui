import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${ resolveTheme(TYPES.COLOR) };
  box-sizing: border-box;
  width: 100%;
  min-height: 30px;
  padding: 10px 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Input = ({
    value, handleFocus, handleChange, placeholder, handleEnter,
}) => (
    <StyledInput
        onKeyPress={ handleEnter }
        onChange={ handleChange }
        onFocus={ handleFocus }
        value={ value }
        placeholder={ placeholder }
    />
);

Input.propTypes = {
    /**
     * Current value of Input field
     */
    value: PropTypes.string,
    /**
     * Function triggered when Input is Focused, ie. user clicked into Input
     */
    handleFocus: PropTypes.func,
    /**
     * Function to handle value change on user input
     */
    handleChange: PropTypes.func,
    /**
     * String placeholder value, for when Input is empty
     */
    placeholder: PropTypes.string,
    /**
     * Function to be called upon enter press
     */
    handleEnter: PropTypes.func,
};

export { StyledInput };
export default Input;
