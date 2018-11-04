import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationBar from "../NavigationBar";

export const StyledUl = styled.ul`
	list-style-type: none;
	width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
`;

const Tab = ({links}) => (
    <StyledUl>
        {links}
    </StyledUl>
);

Tab.propTypes = {
    /**
     * Array of React router Links
     */
    links: PropTypes.any,
};

export default Tab;
