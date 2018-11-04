import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftSection from './LeftSection/index';
import RightSection from './RightSection/index';
import { lightTheme } from '../../../../constants/theme';

export const StyledApplicationBar = styled.div`
	background-color: ${lightTheme.lightBlue};
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin: 0;
	padding: 0;
`;

const ApplicationBar = ({ onLogout, falconName, userName}) => (
    <StyledApplicationBar>
        <LeftSection
            falconName={falconName}
        />
        <RightSection
            onLogout={onLogout}
            userName={userName}
        />
    </StyledApplicationBar>
);

ApplicationBar.propTypes = {
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
};

export { ApplicationBar };
export default ApplicationBar;
