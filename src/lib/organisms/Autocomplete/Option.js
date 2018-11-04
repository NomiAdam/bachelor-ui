import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lightTheme} from '../../constants/theme';

const StyledOption = styled.div`
    width: 100%;
    border: none;
	padding: 10px 20px;
	background-color: ${({selected}) => selected ? lightTheme.lightGrey : 'initial'};
    &:hover {
        background-color: ${lightTheme.lightGrey};
        cursor: pointer;
    }
`;

const Option = ({value, onClick, selected}) => (
    <StyledOption onMouseDown={onClick(value)} selected={selected}>
        {value}
    </StyledOption>
);

Option.propTypes = {
    /**
     * String value of Option
     */
    value: PropTypes.string,
    /**
     * onMouseDown event handler, (value) => (e) =>
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Boolean value whether current option is selected or not
     */
    selected: PropTypes.bool,
};

export {StyledOption};
export default Option;
