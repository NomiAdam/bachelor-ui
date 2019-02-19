// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyleListItem = styled.li`
	max-width: 100%;
	padding: 10px 0;
	background-color: transparent;
	transition: .25s all ease;
  ${ ({ disableBorder, ...props }) => (disableBorder ? (
        ''
    ) : (
        `border-bottom: 1px solid ${ resolveTheme(TYPES.COLOR)(props) };`
    ))
}
	&:hover {
	  cursor: ${ ({ pointer }) => (pointer ? 'pointer' : 'initial') };
		background-color: ${
    ({ disableHover, ...props }) => (disableHover ? 'transparent' : resolveTheme(TYPES.BACKGROUND_COLOR_HOVER)(props))
};
}
`;

const ListItem = ({ children, ...props }) => (
    <StyleListItem { ...props }>
        {children}
    </StyleListItem>
);

ListItem.propTypes = {
    /**
   * Children nodes of ListItem component
   */
    children: PropTypes.any,
    /**
   * Whether to show pointer
   */
    pointer: PropTypes.bool,
    /**
   * Whether to show border
   */
    disableBorder: PropTypes.bool,
    /**
   * Whether to disable hover effect
   */
    disableHover: PropTypes.bool,
};

export default ListItem;
