import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import flexConstant from '../../constants/flex';
import Container from '../../molecules/Container/index';

const StyledOverlayWrapper = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 222;
  background-color: rgba(0,0,0,.3);
  display: ${ flexConstant.FLEX };
  justify-content: ${ flexConstant.POSITION_CENTER };
  align-items: ${ flexConstant.POSITION_CENTER };  
  overflow-y: auto;
`;

const refuseScroll = (e) => {
    e.preventDefault();
    return false;
};

const Overlay = ({ handleClick, children, secondary }) => (
    <StyledOverlayWrapper secondary={ secondary } height="100vh" onClick={ handleClick } onScroll={ refuseScroll }>
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
