import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input, { Label, Border, TextAreaInput } from '../../atoms/Input/index';
import { maxMobileM, maxMobileS } from '../../constants/device';
import FieldLabel from '../../atoms/FieldLabel/index';
import { lightTheme } from '../../constants/theme';

const StyledTextField = styled.label`
	position: relative;
	width: 100%;
`;

const TextFieldWrapper = styled.div`
    padding: 15px 0;
    width: 100%;
    box-sizing: border-box;
    @media ${ maxMobileM } {
		  padding: 5px;
	  }
	  @media ${ maxMobileS } {
		  padding: 5px;
	  }
`;

const TextField = ({
    onChange, value, label, secondary, multiLine, rows, cols,
    disabled, error, onBlur, borderBackground, type, errorLabel, displayIcon,
}) => (
    <TextFieldWrapper secondary={ secondary }>
        <StyledTextField secondary={ secondary }>
            {multiLine
                ? (
                    <TextAreaInput
                        secondary={ secondary }
                        onChange={ onChange }
                        value={ value }
                        rows={ rows }
                        cols={ cols }
                        disabled={ disabled }
                        error={ error }
                        onBlur={ onBlur }
                    />
                )
                : (
                    <Input
                        secondary={ secondary }
                        onChange={ onChange }
                        value={ value }
                        disabled={ disabled }
                        error={ error }
                        onBlur={ onBlur }
                        type={ type }
                        displayIcon={ displayIcon }
                    />
                )
            }
            <Label label={ label } multiline={ multiLine } rows={ rows } secondary={ secondary } />
            <Border background={ borderBackground } textArea={ multiLine } error={ error } secondary={ secondary } />
        </StyledTextField>
        <FieldLabel secondary={ secondary } error={ error } label={ errorLabel } />
    </TextFieldWrapper>
);

TextField.propTypes = {
    /**
     * onChange function handler
     */
    onChange: PropTypes.func,
    /**
     * Any value of TextField
     */
    value: PropTypes.any,
    /**
     * String label of TextField
     */
    label: PropTypes.string,
    /**
     * Whether we use simple Input or TextArea
     */
    multiLine: PropTypes.bool,
    /**
     * In case of TextArea for many rows we want
     */
    rows: PropTypes.number,
    /**
     * In case of TextArea for many cols we want
     */
    cols: PropTypes.number,
    /**
     * Whether Input is disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * Whether we have validation or other error with TextField
     */
    error: PropTypes.bool,
    /**
     * Function to be called upon onBlur event on input field
     */
    onBlur: PropTypes.func,
    /**
     * String representation of background border, default is #1eb4ff (light blue)
     */
    borderBackground: PropTypes.string,
    /**
     * When using Input field, type definition of input field type
     */
    type: PropTypes.oneOf(['text', 'password', 'number']),
    /**
     * String definition of error message
     */
    errorLabel: PropTypes.string,
    /**
     * Whether we should display icon on Input or not
     */
    displayIcon: PropTypes.bool,
};

TextField.defaultProps = {
    borderBackground: lightTheme.lightBlue,
    type: 'text',
};

export { TextFieldWrapper, StyledTextField };
export default TextField;
