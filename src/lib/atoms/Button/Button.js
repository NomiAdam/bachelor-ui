import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toUpper } from 'ramda';
import Ink from 'react-ink';
import DEFAULT_THEME, { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledButton = styled.button`
  ${ DEFAULT_THEME }
  position: relative;
	transition: .4s all ease; 
	margin: 5px;
	font-weight: 300;
	text-align: center;
	cursor: pointer;
	min-width: 50px;
	${ ({ fullWidth }) => (fullWidth ? 'width: 100%' : '') };
	overflow: hidden;
	height: ${ ({ large }) => (large ? '70px' : '35px') };	
	&:hover {
		background-color: ${ resolveTheme(TYPES.BACKGROUND_COLOR_HOVER) };
	}
	&:focus {
		outline: none;
	}
`;

const Button = ({
    disabled, label, onClick, color, backgroundColor, large, fullWidth, secondary,
}) => (
    <StyledButton
        onClick={ onClick }
        disabled={ disabled }
        color={ color }
        backgroundColor={ backgroundColor }
        large={ large }
        fullWidth={ fullWidth }
        secondary={ secondary }
    >
        <span>{toUpper(label)}</span>
        <Ink />
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
   * Optional Button label color
   */
    color: PropTypes.string,
    /**
   * Whether button will be large or not
   */
    large: PropTypes.bool,
    /**
   * Optional Background color of button
   */
    backgroundColor: PropTypes.string,
    /**
   * Boolean representing whether we should use full width of container
   */
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    label: '',
};

export { StyledButton };
export default Button;
