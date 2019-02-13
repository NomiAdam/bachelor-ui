import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid ${ resolveTheme(TYPES.COLOR) };
    box-sizing: border-box;
    width: 100%;
	  min-height: 30px;
	  padding: 10px 20px;
	  font-size: 16px;
	  display: inline-block;
	  text-align: center;
	  background-color: ${ ({ disabled }) => (disabled ? lightTheme.lightGrey : 'transparent') };
	  &:hover {
	    cursor: ${ ({ disabled }) => (disabled ? 'initial' : 'pointer') };
	  }
    &:focus {
        outline: none;
    }
`;

const Input = ({
    value, handleFocus, handleChange, placeholder, disabled,
}) => (
    <StyledInput disabled={ disabled } onChange={ handleChange } onFocus={ handleFocus } value={ value } placeholder={ placeholder } />
);

Input.propTypes = {
    /**
     * Current value of Input field
     */
    value: PropTypes.any,
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
     * Whether select field is disabled or not
     */
    disabled: PropTypes.bool,
};

export { StyledInput };
export default Input;
