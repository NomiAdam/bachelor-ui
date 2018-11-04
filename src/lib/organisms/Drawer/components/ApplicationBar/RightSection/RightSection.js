import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label/index';
import Button from '../../../../../atoms/Button/index';

export const StyledRightSection= styled.div`
	width: 50%;
	margin-right: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: center;
`;

const RightSection = ({ onLogout, userName}) => (
    <StyledRightSection>
        <Label
            username={userName}
        />
        <Button
            label="odhlásit se"
            onClick={onLogout}
        />
    </StyledRightSection>
);

RightSection.propTypes = {
    /**
     * Displays name of logged user
     */
    userName: PropTypes.string,
    /**
     * Logout function
     */
    onLogout: PropTypes.func,
};

export default RightSection;
