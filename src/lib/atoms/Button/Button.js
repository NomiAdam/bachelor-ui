import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toUpper } from 'ramda';
import { basicTheme, lightTheme } from '../../constants/theme';

const StyledButton = styled.button`
  position: relative;
	background-color: ${ ({ background }) => background };
	border: none;
	margin: 5px;
	font-weight: 500;
	text-align: center;
	cursor: pointer;
	${ ({ fullWidth }) => (fullWidth ? 'width: 100%' : 'min-width: 50px') };
	transition: .4s all ease;
	overflow: hidden;
	height: ${ ({ large }) => (large ? '50px' : '35px') };	
	color: ${ ({ color }) => (color || 'white') };
	&:hover {
		background-color: ${ lightTheme.lightBlue };
	}
	&:focus {
		outline: none;
	}
	&:after {
	    content: "";
        background: ${ lightTheme.whiteBlue };
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        border-radius: 50%;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
	}
	&:active {
	    &:after {
	        padding: 0;
            margin: 0;
            opacity: 1;
            transition: 0s
	    }
	}
`;

const StyledSpan = styled.span`
    padding: 20px;
`;

const Button = ({
    disabled, label, onClick, color, background, large, fullWidth,
}) => (
    <StyledButton
        onClick={ onClick }
        disabled={ disabled }
        color={ color }
        background={ background }
        large={ large }
        fullWidth={ fullWidth }
    >
        <StyledSpan>{toUpper(label)}</StyledSpan>
    </StyledButton>
);

Button.propTypes = {
    /**
	 * Whether button is disabled or not
	 */
    disabled: PropTypes.bool,
    /**
	 * onClick event function handler
	 */
    onClick: PropTypes.func,
    /**
	 * Value, or label, for given button
	 */
    label: PropTypes.string,
    /**
     * Button label color, black as default
     */
    color: PropTypes.string,
    /**
	 * Whether button will be large or not
	 */
    large: PropTypes.bool,
    /**
     * Background color of button, #1eb4ff (kind of light blue) as default
     */
    background: PropTypes.string,
    /**
	 * Boolean representing whether we should use full width of container
     */
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    label: '',
    fullWidth: false,
    background: basicTheme.indigo,
};

export { StyledButton };
export default Button;
