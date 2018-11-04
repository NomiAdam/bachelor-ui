import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../../constants/theme';

export const StyledListItemText = styled.span`
	color: ${darkTheme.black};
	font-size: 16px;
`;

export const StyledListItemTextDiv = styled.div`
	width: 100%;
	height: 100%;
	text-align: ${props => props.align};
`;

const ListItemText = ({align, primary}) => (
	<StyledListItemTextDiv align={align}>
		<StyledListItemText>
			{primary}
		</StyledListItemText>
	</StyledListItemTextDiv>
);


ListItemText.propTypes = {
	/**
	 * String representing alignment of ListItemText text
	 */
	align: PropTypes.string,
	/**
	 * String representing primary value
	 */
	primary: PropTypes.string
};

ListItemText.defaultProps = {
    align: 'left',
    primary: '',
};

export default ListItemText;
