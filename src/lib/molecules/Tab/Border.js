import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { findIndex, length, equals, __, divide, multiply, compose } from 'ramda';
import { basicTheme } from '../../constants/theme';
import { minTablet, maxTablet } from '../../constants/device';

const StyledBorder = styled.div`
  position: absolute;
  background-color: ${({ color }) => color};
  transition: 1s all ease;
  @media ${minTablet} {
    height: 2px;
    width: ${({percentage}) => percentage}%;
    bottom: 0;
    left: ${({leftPosition}) => leftPosition}%;
  }
  @media ${maxTablet} {
    width: 2px;
    height: ${({percentage}) => percentage}%;
    left: 0;
    top: ${({leftPosition}) => leftPosition}%;
  }
`;

const multiplyByHundred = multiply(100);
const divideHundred = divide(100);
const findActiveIndex = (active) => findIndex(equals(active));

const Border = ({ items, active, color }) => {
    const lengthOfItems = length(items);
    const percentageOfBorder = compose(
        multiplyByHundred,
        divide(__, lengthOfItems),
        findActiveIndex(active)
    );
    return (
        <StyledBorder
            leftPosition={percentageOfBorder(items)}
            percentage={divideHundred(lengthOfItems)}
            color={color}
        />
    );
};

Border.propTypes = {
    /**
     * Array of strings is expected, ['String', 'Another String'],
     */
    items: PropTypes.array,
    /**
     * String definition of active currently active item
     */
    active: PropTypes.string,
    /**
     * String definition of border color
     */
    color: PropTypes.string,
};

Border.defaultProps = {
    items: [],
    percentage: '0',
    color: basicTheme.purple,
};

export { StyledBorder };
export default Border;
