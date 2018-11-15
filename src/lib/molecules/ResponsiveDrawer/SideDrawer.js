import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme, darkTheme, lightTheme } from '../../constants/theme';

const StyledSideDrawer = styled.nav.attrs({
    style: ({ left }) => ({
        left: `${ left * 0.7 }%`,
    }),
})`
    height: 100%;
    background: ${ lightTheme.white };
    box-shadow: 1px 0px 7px ${ darkTheme.darkGrey };
    position: fixed;
    top: 0;
    width: 70%;
    z-index: 200;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: all .5s ease-out;
    ul {
      height: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: ${ ({ primary }) => (primary ? darkTheme.black : basicTheme.purple) };
      text-decoration: none;
      font-size: 1.2rem;
      &:hover {
        color: ${ ({ primary }) => (primary ? lightTheme.lightBlue : basicTheme.orange) };
      }
      &:active {
        color: ${ ({ primary }) => (primary ? lightTheme.lightBlue : basicTheme.orange) };;
      }
    }
`;

const SideDrawer = ({ children, primary, left }) => (
    <StyledSideDrawer primary={ primary } left={ left }>
        { children }
    </StyledSideDrawer>
);

SideDrawer.propTypes = {
    /**
     * Shows whether drawer is open or not
     */
    isOpen: PropTypes.bool,
    /**
     * Whether to use primary theme or secondary
     */
    primary: PropTypes.bool,
    /**
     * Left position of drawer
     */
    left: PropTypes.number,
};

export { StyledSideDrawer };
export default SideDrawer;
