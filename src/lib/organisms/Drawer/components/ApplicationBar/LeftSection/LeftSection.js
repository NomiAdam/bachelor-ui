import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from "./Header/index";

export const StyledLeftSection= styled.div`
	width: 50%;
	margin-left: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const LeftSection = ({falconName}) => (
    <StyledLeftSection>
        <Header
            falconName={falconName}
        />
    </StyledLeftSection>
);

LeftSection.propTypes = {
    /**
     * Displays name of logged falcon
     */
    falconName: PropTypes.string,
};

export default LeftSection;