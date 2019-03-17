/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import { noop } from 'ramda-extension';
import { greenValid, redError } from './constants/icon';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

export const StyledInput = styled.input`
	border: 0;
	font-family: inherit;
	font-size: 16px;
	font-weight: 500;
	width: 100%;
	border-bottom: 1px solid ${ resolveTheme(TYPES.COLOR) };
	${ ({ borderBackground, ...props }) => (borderBackground ? `border-color: ${ borderBackground };` : resolveTheme(TYPES.COLOR)(props)) }
	border-radius: 0;
	color: ${ resolveTheme(TYPES.COLOR) };
	transition: .15s ease all;
	background-image: ${ ({ displayIcon, error }) => (displayIcon ? error ? redError : greenValid : 'none') };
	background-position: right;
	background-repeat: no-repeat;
	background-origin: content-box;
	background-color: inherit;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
`;

const getTargetValue = path(['target', 'value']);
const Input = ({ placeholder, onChange, ...rest }) => (
    placeholder ? (
        <StyledInput
            { ...rest }
            onChange={ e => onChange(e, getTargetValue(e)) }
            placeholder={ placeholder }
        />
    ) : (
        <StyledInput { ...rest } onChange={ e => onChange(e, getTargetValue(e)) } placeholder="&nbsp;" />
    )
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
    /**
   * String representation of name prop
   */
    name: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    onChange: noop,
};

export default Input;
