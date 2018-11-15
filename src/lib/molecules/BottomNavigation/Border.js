import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    findIndex, length, propEq, __, divide, multiply, compose,
} from 'ramda';
import { basicTheme } from '../../constants/theme';

const StyledBorder = styled.div`
  position: absolute;
  height: 2px;
  width: ${ ({ percentage }) => percentage }%;
  background-color: ${ ({ color }) => color };
  top: 0;
  left: ${ ({ leftPosition }) => leftPosition }%;
  transition: 1s all ease;
`;

const multiplyByHundred = multiply(100);
const divideHundred = divide(100);
const findActiveIndex = active => findIndex(propEq('id', active));

const Border = ({ items, active, color }) => {
    const lengthOfItems = length(items);
    const percentageOfBorder = compose(
        multiplyByHundred,
        divide(__, lengthOfItems),
        findActiveIndex(active),
    );
    return (
        <StyledBorder
            leftPosition={ percentageOfBorder(items) }
            percentage={ divideHundred(lengthOfItems) }
            color={ color }
        />
    );
};

Border.propTypes = {
    /**
     * Array of objects is expected, { id: 'String', icon: 'IconNode', label: 'String' }
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
    // eslint-disable-next-line react/default-props-match-prop-types
    percentage: '0',
    color: basicTheme.purple,
};

export { StyledBorder };
export default Border;
