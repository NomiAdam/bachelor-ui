import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/lib/io';
import { o, not } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';
import Input from '../../atoms/Input/index';
import { lightTheme } from '../../constants/theme';

const SearchFieldWrapper = styled.div`
    background-color: ${ ({ backgroundColor }) => backgroundColor || lightTheme.lightGrey };
    border-color: transparent;
    border-radius: 50px;
    padding: 5px 15px;
    position: relative;
`;

const StyledIcon = styled(IoClose)`
    position: absolute;
    right: 10px;
    top: 7.5px;
    color: ${ lightTheme.lightBlue }
`;

const isNotNilOrEmptyString = o(not, isNilOrEmptyString);

const SearchField = ({ handleClear, value, ...others }) => (
    <SearchFieldWrapper>
        <Input
            { ...others }
            value={ value }
            borderBackground="transparent"
        />
        { isNotNilOrEmptyString(value) && <StyledIcon onClick={ handleClear } /> }
    </SearchFieldWrapper>
);

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
};

export { SearchFieldWrapper };
export default SearchField;
