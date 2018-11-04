import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledTabButton = styled.button`
    background-color: inherit;
    position: relative;
    border-color: transparent;
    font-size: .95em;
    text-transform: uppercase;
    color: ${({ active }) => active ? lightTheme.whiteBlue : lightTheme.white};
    outline: none;
    cursor: pointer;
    width: 100%;
    padding: 14px 16px;
    transition: .4s all ease;
    overflow: hidden;
    &:after {
	    content: "";
        background: ${lightTheme.whiteBlue};
        display: block;
        position: absolute;
        padding-top: 350%;
        padding-left: 350%;
        margin-left: -30px !important;
        border-radius: 50%;
        margin-top: -180%;
        opacity: 0;
        transition: all 0.8s
	}
	&:active {
	    &:after {
	        padding: 0;
            margin: 0;
            opacity: 1;
            transition: 0s
	    }
	}
`;

const TabCell = ({handleClick, label, active}) => (
    <StyledTabButton onClick={handleClick(label)} active={active} >{label}</StyledTabButton>
);

TabCell.propTypes = {
    /**
     * String representation of label
     */
    label: PropTypes.string,
    /**
     * onClick action handler
     */
    handleClick: PropTypes.func,
    /**
     * Whether current tab is active or not
     */
    active: PropTypes.bool,
};

TabCell.defaultProps = {
    handleClick: () => () => {},
};

export { StyledTabButton };
export default TabCell
