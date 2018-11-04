import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab/index';

export const StyledNavigationBar = styled.nav`
    width: 100%;
    min-height: 150px;
`;

const NavigationBar = ({links}) => (
    <StyledNavigationBar>
        <Tab
            links={links}
        />
    </StyledNavigationBar>
);

NavigationBar.propTypes = {
    /**
     * Array of React router Links
     */
    links: PropTypes.any,
};


export default NavigationBar;
