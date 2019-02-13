import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../../constants/theme';
import DEFAULT_THEME from '../../utils/resolveTheme';

const StyledPaperWrapper = styled.div`
  ${ DEFAULT_THEME }
	padding: ${ ({ padding }) => padding };
	border-color: transparent;
	${ props => (props.width ? `min-width: ${ props.width };` : '') }
	${ props => (props.height ? `min-height: ${ props.height };` : '') } 
	box-shadow:  0 1px 5px ${ darkTheme.darkGrey };
	overflow: ${ ({ overflow }) => overflow };
	${ ({ center }) => center && `
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	`
}
`;

const Paper = ({
    children, height, width, backgroundColor, padding, center, overflow, borderRadius,
}) => (
    <StyledPaperWrapper
        height={ height }
        width={ width }
        backgroundColor={ backgroundColor }
        padding={ padding }
        center={ center }
        overflow={ overflow }
        borderRadius={ borderRadius }
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
};

Paper.defaultProps = {
    overflow: 'hidden',
    padding: '10px',
};

export { StyledPaperWrapper };
export default Paper;
