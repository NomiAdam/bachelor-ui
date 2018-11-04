import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeadingCell } from '../cells/index';

const StyledTimeWrapper = styled.div`
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      min-width: 48px;
      align-items: flex-start;
      flex-direction: column;
`;

const Time = ({ children }) => (
    <StyledTimeWrapper>
        <HeadingCell isTime />
        {children}
    </StyledTimeWrapper>
);

Time.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.any,
};

export default Time;
