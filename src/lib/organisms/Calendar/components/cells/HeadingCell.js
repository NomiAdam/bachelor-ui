import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme } from '../../../../constants/theme';

const StyledHeadingColumn = styled.div`
  width: ${ ({ isTime }) => (isTime ? '48px' : '100%') };
  height: 50px;
  text-align: center;
  ${ ({ isTime }) => (isTime ? `border-right: 1px solid ${ basicTheme.grey }` : '') };
`;

const HeadingCell = ({ label, isTime }) => (
    <StyledHeadingColumn isTime={ isTime }>
        { label }
    </StyledHeadingColumn>
);

HeadingCell.propTypes = {
    /**
     * String representation of heading label
     */
    label: PropTypes.string,
    /**
     * Boolean representation of whether its timeCell or not
     */
    isTime: PropTypes.bool,
};

export default HeadingCell;
