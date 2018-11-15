import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme, darkTheme } from '../../../../constants/theme';

const StyledCellWrapper = styled.div`
    min-height: 48px;
    min-width: 48px;
    text-align: center;
    position: relative;
    border-right: 1px solid ${ basicTheme.grey };
`;

const StyledCellSpan = styled.span`
    position: absolute;
    top: -6px;
    display: block;
    font-size: 10px;
    color: ${ darkTheme.black };
`;

const TimeCell = ({ label }) => (
    <StyledCellWrapper>
        <StyledCellSpan>{label}</StyledCellSpan>
    </StyledCellWrapper>
);

TimeCell.propTypes = {
    /**
     * String definition of label property
     */
    label: PropTypes.string,
};

export default TimeCell;
