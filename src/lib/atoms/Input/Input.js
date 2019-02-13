/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { greenValid, redError } from './constants/icon';
import { basicTheme, darkTheme } from '../../constants/theme';

export const StyledInput = styled.input`
	border: 0;
	font-family: inherit;
	font-size: 16px;
	font-weight: 500;
	border-bottom: 2px solid ${ darkTheme.black };
	${ ({ borderBackground }) => (borderBackground ? `border-color: ${ borderBackground };` : '') }
	border-radius: 0;
	color: ${ basicTheme.blue };
	transition: .15s ease all;
	background-image: ${ ({ displayIcon, error }) => (displayIcon ? error ? redError : greenValid : 'none') };
	background-position: right;
	background-repeat: no-repeat;
	background-origin: content-box;
	background-color: inherit;
	&:focus {
		outline: none;
	}
`;

const Input = ({ placeholder, ...rest }) => (
    placeholder ? <StyledInput { ...rest } placeholder={ placeholder } /> : <StyledInput { ...rest } placeholder="&nbsp;" />
);

Input.propTypes = {
    /**
	 * Any value of Input
	 */
    value: PropTypes.any,
    /**
	 * Function triggered during onChange
	 */
    onChange: PropTypes.func,
    /**
	 * Whether Input is disabled or not
     */
    disabled: PropTypes.bool,
    /**
	 * Whether we have some kind of validation error
     */
    error: PropTypes.bool,
    /**
	 * Function to be called upon onBlur event on input field
     */
    onBlur: PropTypes.func,
    /**
	 * String representation of input type
     */
    type: PropTypes.string,
    /**
	 * Whether we should display icon in input or not
     */
    displayIcon: PropTypes.bool,
    /**
     * String indicating border-color css property
     */
    borderBackground: PropTypes.string,
    /**
     * String definition of placeholder text
     */
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
