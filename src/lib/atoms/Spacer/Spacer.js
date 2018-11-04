import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpacerWrapper = styled.div`
  display: block;
  content: '';
  background-color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Spacer = ({ width, height }) => (
    <StyledSpacerWrapper width={width} height={height} />
);

Spacer.propTypes = {
    /**
     * String definition of spacing component width
     */
    width: PropTypes.string,
    /**
     * String definition of spacing component height
     */
    height: PropTypes.string,
};

Spacer.defaultProps = {
    width: '100%',
    height: '63px',
};

export { StyledSpacerWrapper };
export default Spacer;
