// eslint-disable-next-line no-unused-vars
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const ListItem = styled(
    ({ component, ...props }) => createElement(component, props),
)`
	max-width: 100%;
	padding: 10px 0;
	background-color: transparent;
	transition: .25s all ease;
	&:hover {
		background-color: ${ lightTheme.whiteBlue };
	}
`;

ListItem.propTypes = {
    /**
	 * Children nodes of ListItem component
	 */
    children: PropTypes.any,
    /**
	 * String representation of used ListItem component, "li", "div", ...
	 */
    component: PropTypes.string,
};

ListItem.defaultProps = {
    component: 'li',
};

export default ListItem;
