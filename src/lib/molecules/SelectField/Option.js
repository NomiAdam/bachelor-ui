import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledOption = styled.div`
    width: 100%;
    display: inline-block;
    border: none;
	padding: 10px 20px;
	text-align: center;
	background-color: ${ ({ selected }) => (selected ? lightTheme.lightGrey : 'initial') };
    &:hover {
        background-color: ${ lightTheme.lightGrey };
        cursor: pointer;
    }
`;

const Option = ({
    value, onClick, label, selected,
}) => (
    <StyledOption onMouseDown={ onClick(value) } selected={ selected }>
        {label}
    </StyledOption>
);

Option.propTypes = {
    /**
     * String value of Option
     */
    value: PropTypes.any,
    /**
     * onMouseDown event handler, (value) => (e) =>
     */
    onClick: PropTypes.func.isRequired,
    /**
     * String representation of displayed value
     */
    label: PropTypes.string,
    /**
     * Boolean representation of currently selected item
     */
    selected: PropTypes.bool,
};

export { StyledOption };
export default Option;
