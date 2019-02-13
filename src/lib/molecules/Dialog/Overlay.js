import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../organisms/Container/index';

const StyledOverlayWrapper = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0,0,0,.3);
`;

const refuseScroll = (e) => {
    e.preventDefault();
    return false;
};

const Overlay = ({ handleClick, children }) => (
    <StyledOverlayWrapper height="100vh" onClick={ handleClick } onScroll={ refuseScroll }>
        { children }
    </StyledOverlayWrapper>
);

Overlay.propTypes = {
    /**
     * onClick function handler
     */
    handleClick: PropTypes.func,
    /**
     * Children nodes
     */
    children: PropTypes.any,
};

export default Overlay;
