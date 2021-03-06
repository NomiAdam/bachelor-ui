import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DEFAULT_THEME from '../../utils/resolveTheme';

const StyledPaperWrapper = styled.div`
  ${ DEFAULT_THEME }
	padding: ${ ({ padding }) => padding };
	border-color: transparent;
	margin: ${ ({ margin }) => margin };
	cursor: ${ ({ cursor }) => cursor };
	${ ({ width }) => (width ? `min-width: ${ width };` : '') }
	${ ({ height }) => (height ? `min-height: ${ height };` : '') } 
	box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease-in-out;
	overflow: ${ ({ overflow }) => overflow };
	&:hover {
	  ${ ({ handleHover }) => handleHover && 'box-shadow: 0 5px 15px rgba(0,0,0,0.3);' } 
	}
	${ ({ center }) => center && `
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	`
}
`;

const Paper = ({
    children, height, width, backgroundColor, padding, center, overflow, borderRadius, secondary, handleHover,
    handleClick, margin, cursor,
}) => (
    <StyledPaperWrapper
        onClick={ handleClick }
        secondary={ secondary }
        cursor={ cursor }
        margin={ margin }
        height={ height }
        width={ width }
        backgroundColor={ backgroundColor }
        padding={ padding }
        center={ center }
        overflow={ overflow }
        borderRadius={ borderRadius }
        handleHover={ handleHover }
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
     * Optional String representation of background color
     */
    backgroundColor: PropTypes.string,
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
    /**
   * Optional borderRadius
   */
    borderRadius: PropTypes.number,
    /**
   * Whether to allow animation on hover
   */
    handleHover: PropTypes.bool,
    /**
   * Function handler to handle onClick event
   */
    handleClick: PropTypes.func,
    /**
   * String definition of margin css property
   */
    margin: PropTypes.string,
    /**
   * String definition of cursor css property
   */
    cursor: PropTypes.string,
};

Paper.defaultProps = {
    overflow: 'hidden',
    cursor: 'initial',
    margin: '0',
    padding: '10px',
};

export { StyledPaperWrapper };
export default Paper;
