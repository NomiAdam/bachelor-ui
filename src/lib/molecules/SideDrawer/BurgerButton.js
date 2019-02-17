import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { minTablet } from '../../constants/device';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 40px;
    background: transparent;
    border: none;
    cursor: pointer;  
    box-sizing: border-box;
    margin: 5px 0;
    &:focus {
      outline: none;
    }
    @media ${ minTablet } {
        display: ${ ({ hideButton }) => (hideButton ? 'none' : 'flex') };
    }
`;

const StyledButtonLine = styled.div`
    width: 35px;
    height: 2px;
    background-color: ${ resolveTheme(TYPES.COLOR) };
`;

const BurgerButton = ({ handleClick, mobileVersion, secondary }) => (
    <StyledToggleButton
        secondary={ secondary }
        className="toggle-button"
        onClick={ handleClick }
        hideButton={ mobileVersion
        }
    >
        <StyledButtonLine secondary={ secondary } />
        <StyledButtonLine secondary={ secondary } />
        <StyledButtonLine secondary={ secondary } />
    </StyledToggleButton>
);

BurgerButton.propTypes = {
    /**
     * Function to handle onClick event
     */
    handleClick: PropTypes.func,
    /**
     * Boolean whether we should display navigation on toolbar or not
     */
    mobileVersion: PropTypes.bool,
};

export { StyledToggleButton, StyledButtonLine };
export default BurgerButton;
