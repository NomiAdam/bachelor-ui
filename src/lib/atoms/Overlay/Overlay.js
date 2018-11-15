/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowThinLeft } from 'react-icons/lib/io';
import { lightTheme, darkTheme } from '../../constants/theme';
import { FadeIn } from '../../transition/Fade/index';

const StyledWrapper = styled.div`
	display: ${ ({ isOpen }) => (isOpen ? 'flex' : 'none') }
	position: fixed;
	align-items: center;
	flex-direction: column;
	justify-content: ${ ({ verticalPosition }) => verticalPosition }
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: ${ ({ background }) => background };
`;

const InnerWrapper = styled.div``;

const StyledHeading = styled.h2`
	font-size: 1.5em;
	color: ${ darkTheme.black };
	margin: 0;
	padding: 60px 10px;
`;

const StyledCloseIcon = styled(IoIosArrowThinLeft)`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	margin: 0;
	font-size: 3rem;
	z-index: 999;
	color: ${ ({ backColor }) => backColor };
`;

const Overlay = ({
    isOpen, heading, handleClose, children, verticalPosition, background, displayHeading, backColor,
}) => (
    <StyledWrapper background={ background } isOpen={ isOpen } verticalPosition={ verticalPosition }>
        <InnerWrapper>
            {
                displayHeading && (
                    <StyledHeading>
                        {heading}
                    </StyledHeading>
                )
            }
            <FadeIn>
                {children}
            </FadeIn>
        </InnerWrapper>
        <StyledCloseIcon onClick={ handleClose } backColor={ backColor } />
    </StyledWrapper>
);

Overlay.propTypes = {
    /**
     * Whether selection window is open, if true window is open.
     */
    isOpen: PropTypes.bool,
    /**
     * String representation of heading
     */
    heading: PropTypes.string,
    /**
     * Function triggered upon Close button click, or on select.
     */
    handleClose: PropTypes.func,
    /**
     * String definition of vertical position of overlay
     */
    verticalPosition: PropTypes.string,
    /**
     * String definition of background color
     */
    background: PropTypes.string,
    /**
     * String definition of back Icon color
     */
    backColor: PropTypes.string,
    /**
     * Whether to display heading or not
     */
    displayHeading: PropTypes.bool,
};

Overlay.defaultProps = {
    isOpen: false,
    verticalPosition: 'center',
    background: lightTheme.white,
    displayHeading: true,
    backColor: darkTheme.black,
};

export { StyledWrapper };
export default Overlay;
