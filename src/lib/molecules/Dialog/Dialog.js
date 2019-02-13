import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DialogWindow from './DialogWindow';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  display: ${ ({ isOpen }) => (isOpen ? 'flex' : 'none') };
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;  
`;

class Dialog extends PureComponent {
    render() {
        const {
            isOpen, children, heading, actionChildren, width, height, handleClose, closeOnOverlayClick,
        } = this.props;
        return (
            <StyledWrapper isOpen={ isOpen } onClick={ closeOnOverlayClick ? handleClose : undefined }>
                <DialogWindow heading={ heading } actionChildren={ actionChildren } width={ width } height={ height }>
                    { children }
                </DialogWindow>
            </StyledWrapper>
        );
    }
}

Dialog.propTypes = {
    /**
     * Boolean whether Dialog is open or not
     */
    isOpen: PropTypes.bool,
    /**
     * Function handler to handle onClose click
     */
    handleClose: PropTypes.func,
    /**
     * Children nodes
     */
    children: PropTypes.any,
    /**
     * Function handler to render action children
     */
    actionChildren: PropTypes.any.isRequired,
    /**
     * Heading node of dialog window
     */
    heading: PropTypes.any.isRequired,
    /**
   * Width of Dialog
   */
    width: PropTypes.number,
    /**
   * Height of Dialog
   */
    height: PropTypes.number,
    /**
   * Whether to close on overlay click
   */
    closeOnOverlayClick: PropTypes.bool,
};

export default Dialog;
