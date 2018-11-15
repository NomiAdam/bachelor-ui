import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minTablet } from '../../constants/device';
import { darkTheme, lightTheme } from '../../constants/theme';

const StyledToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    @media ${ minTablet } {
        display: ${ ({ hideButton }) => (hideButton ? 'none' : 'flex') };
    }
`;

const StyledButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: ${ ({ primary }) => (primary ? darkTheme.black : lightTheme.white) };
`;

const DrawerToggleButton = ({ handleClick, mobileVersion, primary }) => (
    <StyledToggleButton className="toggle-button" onClick={ handleClick } hideButton={ mobileVersion }>
        <StyledButtonLine primary={ primary } />
        <StyledButtonLine primary={ primary } />
        <StyledButtonLine primary={ primary } />
    </StyledToggleButton>
);

DrawerToggleButton.propTypes = {
    /**
     * Function to handle onClick event
     */
    handleClick: PropTypes.func,
    /**
     * Boolean whether we should display navigation on toolbar or not
     */
    mobileVersion: PropTypes.bool,
    /**
     * Whether to use primary theme or secondary
     */
    primary: PropTypes.bool,
};

export { StyledToggleButton, StyledButtonLine };
export default DrawerToggleButton;
