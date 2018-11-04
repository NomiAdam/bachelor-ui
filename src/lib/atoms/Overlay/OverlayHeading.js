/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../Heading/index';
import {IoIosArrowThinLeft} from 'react-icons/lib/io';
import { lightTheme, darkTheme } from '../../constants/theme';

const StyledWrapper = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	width: 100%;
	min-height: 150px;
	z-index: 999;
	border-bottom: 1px solid ${lightTheme.whiteBlue};
	background-color: ${lightTheme.lightGrey};
`;

const InnerWrapper = styled.div`
    padding: 0 20px;
    margin-top: 50px;
    margin-bottom: 25px;
`;

const StyledCloseIcon = styled(IoIosArrowThinLeft)`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	margin: 0;
	padding: 20px;
	font-size: 4rem;
	z-index: 10;
	color: ${darkTheme.black};
`;

const OverlayHeading = ({
                     heading, handleIconClick,
                 }) => (
    <StyledWrapper>
        <InnerWrapper>
           <Heading label={heading} component={'h2'}/>
        </InnerWrapper>
        <StyledCloseIcon onClick={handleIconClick}/>
    </StyledWrapper>
);

OverlayHeading.propTypes = {
    /**
     * String representation of heading
     */
    heading: PropTypes.string,
    /**
     * Function triggered upon Icon click.
     */
    handleIconClick: PropTypes.func,
};

OverlayHeading.defaultProps = {
    isOpen: false,
    verticalPosition: 'center',
};

export { StyledWrapper };
export default OverlayHeading;
