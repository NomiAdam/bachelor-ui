/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledInput } from './Input';
import { StyledTextArea } from './TextAreaInput';
import { StyledSelect } from './Select';
import { basicTheme, lightTheme } from '../../constants/theme';
import { maxMobileM } from '../../constants/device';

const StyledBorder = styled.span`
	position: absolute;
	bottom: ${ ({ select, textArea }) => (select ? '-8px' : textArea ? '4px' : '-6px') }
	left: 0;
	height: 2px;
	width: 100%;
	background: ${ ({ background, error }) => (error ? basicTheme.red : background || lightTheme.lightBlue) };
	transform: scaleX(0);
	transform-origin: 0 0;
	transition: .5s ease all;
	${ StyledInput }:focus ~ & {
		transform: scaleX(1);
	}
	${ StyledTextArea }:focus ~ & {
		transform: scaleX(1);
	}
	${ StyledSelect }:focus ~ & {
		transform: scaleX(1);
	}
	@media ${ maxMobileM } {
	  	bottom: ${ ({ select, textArea }) => (select ? '-8px' : textArea ? '4px' : '-4px') }
	}
`;

StyledBorder.propTypes = {
    /**
	 * String representing color of border, ie. "red", "blue", ....
	 */
    background: PropTypes.string,
    /**
	 * Whether we use border for Input
	 */
    select: PropTypes.bool,
    /**
	 * Whether we use border for TextArea
	 */
    textArea: PropTypes.bool,
    /**
     * Whether we have validation or other error with TextField
     */
    error: PropTypes.bool,
};

export default StyledBorder;
