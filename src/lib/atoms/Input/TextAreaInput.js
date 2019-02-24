import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import { basicTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

export const StyledTextArea = styled.textarea`
	border: 0;
	font-family: inherit;
	font-size: 16px;
	font-weight: 500;
  width: 100%;
	border-bottom: 1px solid ${ resolveTheme(TYPES.COLOR) };
	background: none;
	border-radius: 0;
	color: ${ basicTheme.blue };
	transition: .15s ease all;
	resize: none;
	box-sizing: border-box;
	${ ({ error }) => (error ? `
	    border: 1px solid ${ basicTheme.red };
	    border-top-left-radius: 5px;
      border-top-right-radius: 5px;
	` : '') }
	&:focus {
		outline: none;
	}
`;

const getTargetValue = path(['target', 'value']);
const TextAreaInput = ({
    value, onChange, cols, rows, disabled, error, onBlur, secondary,
}) => (
    <StyledTextArea
        secondary={ secondary }
        onChange={ e => onChange(e, getTargetValue(e)) }
        rows={ rows }
        cols={ cols }
        value={ value }
        disabled={ disabled }
        onBlur={ onBlur }
        error={ error }
        placeholder="&nbsp;"
    />
);

TextAreaInput.propTypes = {
    /**
	 * Number representing how many rows will TextArea have by default
	 */
    rows: PropTypes.number,
    /**
	 * Value of TextArea
	 */
    value: PropTypes.string,
    /**
	 * onChange handler for TextArea
	 */
    onChange: PropTypes.func,
    /**
	 * Number representing how many columns will TextArea have
	 */
    cols: PropTypes.number,
    /**
	 * Whether we have some kind of validation error on current TextArea
     */
    error: PropTypes.bool,
    /**
     * Function to be called upon onBlur event on input field
     */
    onBlur: PropTypes.func,
};

TextAreaInput.defaultProps = {
    cols: 50,
    rows: 4,
};

export default TextAreaInput;
