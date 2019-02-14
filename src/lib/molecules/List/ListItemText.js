import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

export const StyledListItemText = styled.span`
	color: ${ resolveTheme(TYPES.COLOR) };
	font-size: 16px;
`;

export const StyledListItemTextDiv = styled.div`
	width: 100%;
	height: 100%;
	text-align: ${ ({ align }) => align };
`;

const ListItemText = ({ align, primary }) => (
    <StyledListItemTextDiv align={ align }>
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
    primary: PropTypes.string,
};

ListItemText.defaultProps = {
    align: 'left',
    primary: '',
};

export default ListItemText;
