import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, equals, addIndex } from 'ramda';
import { Select, Border, Option } from '../../atoms/Input/index';

const StyledLabel = styled.label`
	position: relative;
	margin: auto;
	width: 100%;
`;

const mapIndexed = addIndex(map);

const NativeSelectField = ({
    options, onChange, required, disabled, selectedValue, error, onBlur, withBorder,
}) => {
    const renderFields = ({ value, text }, index) => (
        <Option
            selected={ equals(value, selectedValue) }
            key={ index }
            value={ value }
        >
            {text}
        </Option>
    );
    const optionFields = mapIndexed(renderFields);
    return (
        <StyledLabel>
            <Select
                onChange={ onChange }
                defaultValue="Select a value"
                required={ required }
                disabled={ disabled }
                error={ error }
                onBlur={ onBlur }
                withBorder={ withBorder }
            >
                {optionFields(options)}
            </Select>
            {withBorder && <Border select />}
        </StyledLabel>
    );
};

NativeSelectField.propTypes = {
    /**
     * Array of select items, expects array of objects with these properties { text, value }
     */
    options: PropTypes.array,
    /**
     * onChange functionHandler, return (event), check for these values [event.target.name]: event.target.value
     */
    onChange: PropTypes.func,
    /**
     * Whether select is required or not
     */
    required: PropTypes.bool,
    /**
     * Whether select is disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * Current selected value
     */
    selectedValue: PropTypes.any,
    /**
     * Whether we have validation error on current SelectField
     */
    error: PropTypes.bool,
    /**
     * Function to be called upon onBlur event on select field
     */
    onBlur: PropTypes.func,
    /**
     * Whether we want select with border or not
     */
    withBorder: PropTypes.bool,
};

NativeSelectField.defaultProps = {
    options: [],
    withBorder: true,
};

export { StyledLabel };
export default NativeSelectField;
