import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lightTheme, darkTheme} from '../../constants/theme';

const StyledPaperWrapper = styled.div`
	padding: ${({padding}) => padding};
	border-color: transparent;
	border-radius: 3px;
	${props => props.width ? `min-width: ${props.width};` : ''}
	${props => props.height ? `min-height: ${props.height};` : ''} 
	box-shadow:  0 1px 5px ${darkTheme.darkGrey};
	background-color: ${({background}) => background}; 
	overflow: ${({ overflow }) => overflow};
	${({ center }) => center && `
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	`
    }
`;

const Paper = ({children, height, width, background, padding, center, overflow}) => (
    <StyledPaperWrapper
        height={height}
        width={width}
        background={background}
        padding={padding}
        center={center}
        overflow={overflow}
    >
        {children}
    </StyledPaperWrapper>
);

Paper.propTypes = {
    /**
     * Children nodes of Paper component
     */
    children: PropTypes.any,
    /**
     * String representation of Paper height, ie. 100%, 50px ....
     */
    height: PropTypes.string,
    /**
     * String representation of Paper width, ie. 100%, 50px ....
     */
    width: PropTypes.string,
    /**
     * String representation of background color
     */
    background: PropTypes.string,
    /**
     * String representation of css padding
     */
    padding: PropTypes.string,
    /**
     * Whether we should center according to flex box
     */
    center: PropTypes.bool,
    /**
     * String definition of css property overflow
     */
    overflow: PropTypes.string,
};

Paper.defaultProps = {
    background: lightTheme.white,
    overflow: 'hidden',
    padding: '10px',
};

export {StyledPaperWrapper}
export default Paper;
