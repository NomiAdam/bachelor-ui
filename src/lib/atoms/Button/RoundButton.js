import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/lib/fa';
import Ink from 'react-ink';
import { basicTheme, lightTheme, darkTheme } from '../../constants/theme';

const StyledButton = styled.button`
	background-color: ${ ({ backgroundColor }) => (backgroundColor || basicTheme.green) };
	display: flex;
	align-items: center;
	justify-content: center;
	border-color: transparent;
	border-radius: 50%;
	margin: 5px;
	font-weight: 500;
	width: 50px;
	height: 50px;
	opacity: 1;
	transition: .5s all ease;
	box-shadow: 2px 2px 10px ${ lightTheme.lightGrey };
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
	&:focus {
		outline: none;
	}
	&:active {
	      background-color: ${ lightTheme.lightGreen };
        box-shadow: 2px 2px ${ darkTheme.darkGrey };
        transform: translateY(4px);
	}
`;

const StyledFaPlus = styled(FaPlus)`
    color: white;
    font-size: 1.5em;
`;

const RoundButton = ({
    disabled, icon, onClick, backgroundColor,
}) => (
    <StyledButton
        onClick={ onClick }
        disabled={ disabled }
        backgroundColor={ backgroundColor }
    >
        {icon || <StyledFaPlus />}
        <Ink />
    </StyledButton>
);

RoundButton.propTypes = {
    /**
     * Whether button is disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * onClick event function handler
     */
    onClick: PropTypes.func,
    /**
     * Node with icon or something of that kind is expected
     */
    icon: PropTypes.any,
    /**
     * Optional Background color of button, limeGreen as default
     */
    backgroundColor: PropTypes.string,
};

export { StyledButton };
export default RoundButton;
