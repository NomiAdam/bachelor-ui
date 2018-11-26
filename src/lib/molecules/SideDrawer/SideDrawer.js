/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toolbar from './Toolbar';

const StyledResponsiveDrawerWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const StyledContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  transition: all .5s ease;
  margin-left: ${ ({ isOpen }) => (isOpen ? '300' : '50') }px;
`;

class SideDrawer extends PureComponent {
    state = {
        isOpen: false,
    };

    handleClick = (/* EVENT */) => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

    render() {
        const {
            children, navigation, primary,
        } = this.props;
        const { isOpen } = this.state;
        return (
            <StyledResponsiveDrawerWrapper>
                <Toolbar
                    isOpen={ isOpen }
                    primary={ primary }
                    handleClick={ this.handleClick }
                >
                    { navigation }
                </Toolbar>
                <StyledContentWrapper isOpen={ isOpen }>
                    { children }
                </StyledContentWrapper>
            </StyledResponsiveDrawerWrapper>
        );
    }
}

SideDrawer.propTypes = {
    /**
     * Should be an array of just one navigation node
     * Note that UL -> LI -> anchor, is expected, its possible to add different nodes
     * But you have to take care of styling
     */
    navigation: PropTypes.any,
    /**
     * Whether to use primary theme or secondary
     */
    primary: PropTypes.bool,
    /**
     * Function handler to call for decorator
     */
    handleClick: PropTypes.func,
};

export { SideDrawer };
export default SideDrawer;
