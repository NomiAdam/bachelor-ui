import React from 'react';
import PropTypes from 'prop-types';
import DrawerToggleButton from './DrawerToggleButton';
import styled from 'styled-components';
import {maxTablet, minTablet} from "../../constants/device";
import { basicTheme, darkTheme, lightTheme } from '../../constants/theme';

const StyledToolbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ primary }) => primary ? lightTheme.white : basicTheme.purple };
  height: 56px;
`;
const StyledToolbarNavigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
`;
const StyledNavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  ${({ hide }) => hide ? 'width: 0;' : ''}
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    padding: 0 .5rem;
  }
  a {
    color: ${({ primary }) => primary ? darkTheme.black : lightTheme.white };
    text-decoration: none;
  }
  @media ${maxTablet} {
	display: none;
  }
`;

const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ mobileVersion }) => mobileVersion ? '' : 'justify-content: flex-start;' }
  color: ${({ primary }) => primary ? darkTheme.black : lightTheme.white };
  @media ${minTablet} {
	left: ${({ mobileVersion }) => mobileVersion ? '45%' : '-1%'};
  }
`;

const Toolbar = ({handleClick, children, logo, mobileVersion, primary}) => (
    <StyledToolbar primary={primary}>
        <StyledToolbarNavigation>
            <DrawerToggleButton
                primary={primary}
                handleClick={handleClick}
                mobileVersion={!mobileVersion}
            />
            <StyledLogoWrapper mobileVersion={mobileVersion} primary={primary}>
                {logo}
            </StyledLogoWrapper>
            <StyledNavigationItemWrapper primary={primary} hide={mobileVersion}>
                {!mobileVersion && children}
            </StyledNavigationItemWrapper>
        </StyledToolbarNavigation>
    </StyledToolbar>
);

Toolbar.propTypes = {
    /**
     * Function to handle toggle button click, will open
     */
    handleClick: PropTypes.func,
    /**
     * Logo, either node or plain text is expected
     */
    logo: PropTypes.any,
    /**
     * Whether we should use mobile version
     */
    mobileVersion: PropTypes.bool,
    /**
     * Whether to use primary theme or secondary
     */
    primary: PropTypes.bool,
};

Toolbar.defaultProps = {
    primary: false,
};

export {StyledToolbar};
export default Toolbar;
