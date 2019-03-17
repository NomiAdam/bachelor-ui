/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ink from 'react-ink';
import flexConstants from '../../constants/flex';

const StyledWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${ ({ width }) => width };
  height: ${ ({ height }) => height };
  background-color: transparent;
  display: ${ flexConstants.FLEX };
  justify-content: ${ flexConstants.POSITION_CENTER };
  align-items: ${ flexConstants.POSITION_CENTER };
`;

const RippleEffect = ({
    onClick, width, height, children,
}) => (
    <StyledWrapper width={ width } height={ height } onClick={ onClick }>
        { children }
        <Ink />
    </StyledWrapper>
);

RippleEffect.propTypes = {
    /**
   * onClick handler
   */
    onClick: PropTypes.func,
    /**
   * Width string definition of css property
   */
    width: PropTypes.string,
    /**
   * Height string definition of css property
   */
    height: PropTypes.string,
    /**
   * Node or array of children nodes
   */
    children: PropTypes.oneOfType([ PropTypes.node, PropTypes.array ]),
};

RippleEffect.defaultProps = {
    width: '35px',
    height: '35px',
};

export default RippleEffect;
