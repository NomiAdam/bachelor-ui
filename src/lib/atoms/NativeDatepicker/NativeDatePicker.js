import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DEFAULT_THEME from '../../utils/resolveTheme';

const StyledLabel = styled.label`
    display: block;
`;

const StyledInput = styled.input`
  ${ DEFAULT_THEME }
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat;
`;

const NativeDatePicker = ({
    onChange, value, label, min, max,
}) => (
    <div>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="date" onChange={ onChange } value={ value } min={ min } max={ max } />
    </div>
);

NativeDatePicker.propTypes = {
    /**
     * Function to handle onChange event on Date input
     */
    onChange: PropTypes.func,
    /**
     * Current date value, format YYYY-MM-DD is expected
     */
    value: PropTypes.string,
    /**
     * String value of label above NativeDatePicker
     */
    label: PropTypes.string,
    /**
     * String value representing minimal allowed value of date, format YYYY-MM-DD is expected
     */
    min: PropTypes.string,
    /**
     * String value representing maximal allowed value of date, format YYYY-MM-DD is expected
     */
    max: PropTypes.string,
};

export { StyledInput };
export default NativeDatePicker;
