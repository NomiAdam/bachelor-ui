import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StyledInput} from './Input';
import {StyledTextArea} from './TextAreaInput';
import {maxMobileM, maxMobileS} from "../../constants/device";
import { darkTheme } from '../../constants/theme';

export const StyledLabel = styled.span`
	position: absolute;
	top: ${({multiline}) => multiline ? '-7px' : '0px'};
	left: 0px;
	font-size: 16px;
	color: ${darkTheme.black};
	font-weight: 500;
	transform-origin: 0 0;
	transition: 0.3s ease all;
	min-width: 200px;
	max-width: 200px;
	${StyledInput}:focus ~ & {
		transform: translateY(${({multiline}) => multiline ? '-25px' : '-15px'}) scale(.75);
	}
	${StyledInput}:not(:placeholder-shown) ~ & {
		transform: translateY(${({multiline}) => multiline ? '-25px' : '-15px'}) scale(.75);
	}
	${StyledTextArea}:focus ~ & {
		transform: translateY(${({multiline}) => multiline ? '-70px' : '-75px'}) scale(.75);
	}
	${StyledTextArea}:not(:placeholder-shown) ~ & {
		transform: translateY(${({multiline}) => multiline ? '-70px' : '-75px'}) scale(.75);
	}
	@media ${maxMobileM} {
		top: ${({multiline}) => multiline ? '0px' : '5px'};
		font-size: 12px;
		${StyledInput}:focus ~ & {
		transform: translateY(${({multiline}) => multiline ? '-21px' : '-18px'}) scale(.75);
		}
		${StyledInput}:not(:placeholder-shown) ~ & {
			transform: translateY(${({multiline}) => multiline ? '-21px' : '-18px'}) scale(.75);
		}
		${StyledTextArea}:focus ~ & {
			transform: translateY(${({multiline}) => multiline ? '-70px' : '-77px'}) scale(.75);
		}
		${StyledTextArea}:not(:placeholder-shown) ~ & {
			transform: translateY(${({multiline}) => multiline ? '-70px' : '-77px'}) scale(.75);
		}
	}
	@media ${maxMobileS} {
		top: ${({multiline}) => multiline ? '2px' : '8px'};
		font-size: 10px;
		${StyledInput}:focus ~ & {
			transform: translateY(${({multiline}) => multiline ? '-20px' : '-18px'}) scale(.75);
		}
		${StyledInput}:not(:placeholder-shown) ~ & {
			transform: translateY(${({multiline}) => multiline ? '-20px' : '-18px'}) scale(.75);
		}
		${StyledTextArea}:focus ~ & {
			transform: translateY(${({multiline}) => multiline ? '-73px' : '-79px'}) scale(.75);
		}
		${StyledTextArea}:not(:placeholder-shown) ~ & {
		transform: translateY(${({multiline}) => multiline ? '-73px' : '-79px'}) scale(.75);
		}
	}
`;

const Label = ({label,multiline}) => (<StyledLabel multiline={multiline}>{label}</StyledLabel>);

Label.propTypes = {
    /**
     * String representing value of Label
     */
    label: PropTypes.string,
    /**
	 * Whether we are in multiline textfield or not
     */
	multiline: PropTypes.bool,
};

Label.defaultProps = {
    label: '',
};

export default Label;
