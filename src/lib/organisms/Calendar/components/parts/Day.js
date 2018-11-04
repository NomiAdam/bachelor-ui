import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDayWrapper = styled.div`
      overflow-y: scroll;
      overflow-x: auto;
      display: flex;
      align-items: flex-start;
`;

const Day = ({ children }) => (
    <StyledDayWrapper>
        {children}
    </StyledDayWrapper>
);

Day.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.any,
};

export default Day;
