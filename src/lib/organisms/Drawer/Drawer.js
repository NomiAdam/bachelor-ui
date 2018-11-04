import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, GridCol} from '../../atoms/Grid/index';
import NavigationBar from './components/NavigationBar/index';
import ApplicationBar from './components/ApplicationBar/index';

const StyledDrawer = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledContent = styled.div`
	width: 100%;
	height: 100%;
`;

const Drawer = ({children, links, onLogout, falconName, userName}) => (
        <StyledDrawer>
            <Grid>
                <GridCol colXS={12} >
                    <ApplicationBar
                        onLogout={onLogout}
                        falconName={falconName}
                        userName={userName}
                    />
                </GridCol>
            </Grid>
            <Grid>
                <GridCol colXS={3} colMD={2}>
                    <NavigationBar
                        links={links}
                    />
                </GridCol>
                <GridCol colXS={9} colMD={10}>
                    <StyledContent>
                        {children}
                    </StyledContent>
                </GridCol>
            </Grid>
        </StyledDrawer>
);

Drawer.propTypes = {
    /**
     * Displays name of logged falcon
     */
    falconName: PropTypes.string,
    /**
     * Displays name of logged user
     */
    userName: PropTypes.string,
    /**
     * Logout function
     */
    onLogout: PropTypes.func,
    /**
     * Array of React router Links
     */
    links: PropTypes.any,
    /**
     * Content of the application
     */
    children: PropTypes.any,
};

export { StyledDrawer, StyledContent };
export default Drawer;
