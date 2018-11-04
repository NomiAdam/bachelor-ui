import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
	color: white;
	display: inline;
`;

const Header = ({falconName}) => (
    <StyledHeader>
        {falconName}
    </StyledHeader>
);

Header.propTypes = {
    /**
     * Displays name of logged falcon
     */
    falconName: PropTypes.string,
};

export default Header;
