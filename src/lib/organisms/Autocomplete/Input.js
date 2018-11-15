import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledInput = styled.input`\n    border: none;\n    border-bottom: 1px solid ${ lightTheme.lightGrey };\n    box-sizing: border-box;\n    width: 100%;\n	min-height: 30px;\n	padding: 10px 20px;\n	font-size: 16px;\n    &:focus {\n        outline: none;\n    }\n`;

const Input = ({
    value, handleFocus, handleChange, placeholder, handleEnter,
}) => (
    <StyledInput onKeyPress={ handleEnter } onChange={ handleChange } onFocus={ handleFocus } value={ value } placeholder={ placeholder } />
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
