import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DrawerToggleButton from './BurgerButton';
import { basicTheme } from '../../constants/theme';

const StyledToolbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${ ({ primary }) => (primary ? basicTheme.purple : basicTheme.indigo) };
  height: 100%;
  min-height: 100vh;
  width: ${ ({ isOpen }) => (isOpen ? '300' : '50') }px;
  overflow: hidden;
  transition: all .5s ease;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Toolbar = ({
    handleClick, primary, isOpen, children,
}) => (
    <StyledToolbar primary={ primary } isOpen={ isOpen }>
        <DrawerToggleButton
            primary={ primary }
            handleClick={ handleClick }
        />
        { children }
    </StyledToolbar>
);

Toolbar.propTypes = {
    /**
     * Function to handle toggle button click, will open
     */
    handleClick: PropTypes.func,
    /**
     * Whether to use primary theme or secondary
     */
    primary: PropTypes.bool,
    isOpen: PropTypes.bool,
};

Toolbar.defaultProps = {
    primary: false,
};

export { StyledToolbar };
export default Toolbar;
