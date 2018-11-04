import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const background = keyframes`
  from {
    background: rgba(0,0,0,0);
  }
  to {
    background: rgba(0,0,0,0.24);
  }
`;

const StyledBackdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: ${background} .5s ease forwards;
    z-index: 100;
`;

const Backdrop = ({ handleClick }) => (
    <StyledBackdrop onClick={handleClick} />
);

Backdrop.propTypes = {
    /**
     * Function to handle onClick event
     */
    handleClick: PropTypes.func,
};

export { StyledBackdrop };
export default Backdrop;
