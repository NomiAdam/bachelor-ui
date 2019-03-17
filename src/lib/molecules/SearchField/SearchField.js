import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { o, not } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';
import Input from '../../atoms/Input/index';
import { lightTheme } from '../../constants/theme';
import Icon from '../../atoms/Icon';
import flexConstants from '../../constants/flex';

const SearchFieldWrapper = styled.div`
    background-color: ${ ({ isFocused }) => (isFocused ? lightTheme.lightGrey : lightTheme.transparent) };
    border-color: transparent;
    padding: 5px;
    position: relative;
    width: ${ ({ isFocused }) => (isFocused ? '250px' : '125px') };
    transition: all .5s ease;
    display: ${ flexConstants.FLEX };
    justify-content: ${ flexConstants.POSITION_LEFT };
    align-items: ${ flexConstants.POSITION_CENTER };
`;

const isNotNilOrEmptyString = o(not, isNilOrEmptyString);

const SearchField = ({
    handleClear, value, searchColor, ...others
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const setFocus = () => setIsFocused(true);
    const setBlur = () => setIsFocused(false);
    return (
        <SearchFieldWrapper isFocused={ isFocused } onFocus={ setFocus } onBlur={ setBlur }>
            <Icon name="search" color={ searchColor } />
            <Input
                { ...others }
                value={ value }
                onFocus={ setFocus }
                onBlur={ setBlur }
                borderBackground={ lightTheme.transparent }
            />
            { isNotNilOrEmptyString(value) && (
                <Icon
                    name="cross"
                    fontSize="1em"
                    onClick={ handleClear }
                    color={ searchColor }
                />
            )
            }
        </SearchFieldWrapper>
    );
};

SearchField.propTypes = {
    /**
     * onChange function handler
     */
    onChange: PropTypes.func,
    /**
     * String value of TextField
     */
    value: PropTypes.any,
    /**
     * Whether Input is disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * Function to be called upon onBlur event on input field
     */
    onBlur: PropTypes.func,
    /**
     * String definition of placeholder text
     */
    placeholder: PropTypes.string,
    /**
     * Function handle to clear whole text
     */
    handleClear: PropTypes.func,
    /**
     * String definition of background color
     */
    backgroundColor: PropTypes.string,
    /**
   * String representation of Icon colors
   */
    searchColor: PropTypes.string,
};

SearchField.defaultProps = {
    searchColor: lightTheme.lightBlue,
};

export { SearchFieldWrapper };
export default SearchField;
