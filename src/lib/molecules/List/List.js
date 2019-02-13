import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledList = styled.ul`
	width: 100%;
	height: 100%;
	padding: 0;
	list-style-type: none;
  margin: 0;
`;

const List = ({ children }) => (<StyledList>{children}</StyledList>);

List.propTypes = {
    /**
	 * Children nodes of List component, ListItem component is expected
	 */
    children: PropTypes.any,
};

export default List;
