import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme } from '../../../../constants/theme';

const StyledBorder = styled.div`
  width: 100%;
  height: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  top: ${({ position }) => position * 48 }px;
  border-bottom: 1px solid ${basicTheme.grey};
`;

StyledBorder.propTypes = {
    /**
     * Position from top
     */
    position: PropTypes.number,
};

export default StyledBorder;
