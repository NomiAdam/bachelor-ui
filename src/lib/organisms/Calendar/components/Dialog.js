import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const minWidth = 200;

const StyledDialogWrapper = styled.div.attrs({
    style: ({
        left, top, width,
    }) => {
        const correctLeft = left > minWidth ? (left - minWidth - 15) : (left + width);
        return {
            top: `${ top - 10 }px`,
            left: `${ correctLeft }px`,
        };
    },
})`
  transition: top 1s, left 1s, opacity .5s, visibility .6s;
  transition-timing-function: ease;
  border: 1px solid black;
  opacity: ${ ({ isOpen }) => (isOpen ? '1' : '0') };
  visibility: ${ ({ isOpen }) => (isOpen ? 'visible' : 'hidden') };
  position: absolute;
  width: ${ minWidth }px;
  top: ${ ({ top }) => top }px;
  height: 250px; 
  z-index: 99;
`;

const Dialog = ({
    left, top, right, width, isOpen, elem: Elem,
}) => (
    <StyledDialogWrapper onClick={ e => e.stopPropagation() } right={ right } left={ left } top={ top } isOpen={ isOpen } width={ width }>
        <Elem />
    </StyledDialogWrapper>
);

Dialog.propTypes = {
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
    isOpen: PropTypes.bool,
    elem: PropTypes.node,
};

export default Dialog;
