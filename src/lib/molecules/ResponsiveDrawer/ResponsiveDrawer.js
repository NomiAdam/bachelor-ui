/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import { withSwipe } from '../../decorators/index';

const StyledResponsiveDrawerWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const StyledContentWrapper = styled.main`
  margin: 64px 0;
`;

class ResponsiveDrawer extends PureComponent {
    state = {
        isOpen: false,
    };

    componentDidUpdate() {
        const { left } = this.props;
        this.setState({ isOpen: left === 100 });
    }

    handleClick = (left) => {
        const { handleClick } = this.props;
        handleClick(left);
    };

    handleBurgerClick = () => {
        const { isOpen } = this.state;
        this.handleClick(isOpen ? 0 : 100);
    };

    handleBackDrop = () => {
        const { left } = this.props;
        const { isOpen } = this.state;
        this.handleClick(isOpen ? 0 : left);
    };

    render() {
        const {
            children, navigation, logo, mobileVersion, primary, left,
        } = this.props;
        const { isOpen } = this.state;
        return (
            <StyledResponsiveDrawerWrapper>
                <Toolbar
                    logo={ logo }
                    mobileVersion={ mobileVersion }
                    primary={ primary }
                    handleClick={ this.handleBurgerClick }
                >
                    { navigation }
                </Toolbar>
                <SideDrawer isOpen={ isOpen } primary={ primary } left={ left }>
                    {navigation}
                </SideDrawer>
                {isOpen && <Backdrop handleClick={ this.handleBackDrop } />}
                <StyledContentWrapper>
                    {children}
                </StyledContentWrapper>
            </StyledResponsiveDrawerWrapper>
        );
    }
}

ResponsiveDrawer.propTypes = {
    /**
     * Should be an array of just one navigation node
     * Note that UL -> LI -> anchor, is expected, its possible to add different nodes
     * But you have to take care of styling
     */
    navigation: PropTypes.any,
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
    /**
     * Left position of navigation bar
     */
    left: PropTypes.number,
    /**
     * Function handler to call for decorator
     */
    handleClick: PropTypes.func,
};

ResponsiveDrawer.defaultProps = {
    left: 0,
};

export { StyledResponsiveDrawerWrapper, ResponsiveDrawer };
export default withSwipe(ResponsiveDrawer);
