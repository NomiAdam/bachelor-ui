import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledLabel = styled.h3`
	font-size: 18px;
	color: white;
	margin-right: 10px;
	display: inline;
`;

const Label = ({username}) => (
    <StyledLabel>
        {username}
    </StyledLabel>
);

Label.propTypes = {
    /**
     * Displays username of logged user
     */
    username: PropTypes.string,
};

export default Label;
