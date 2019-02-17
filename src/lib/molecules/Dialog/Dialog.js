import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DialogWindow from './DialogWindow';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 999;
  display: ${ ({ isOpen }) => (isOpen ? 'flex' : 'none') };
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;  
`;

class Dialog extends PureComponent {
    render() {
        const {
            isOpen, children, heading, actionChildren, width, height, backgroundColor, secondary,
        } = this.props;
        return (
            <StyledWrapper isOpen={ isOpen }>
                <DialogWindow
                    backgroundColor={ backgroundColor }
                    heading={ heading }
                    actionChildren={ actionChildren }
                    width={ width }
                    height={ height }
                    secondary={ secondary }
                >
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
     * Children nodes
     */
    children: PropTypes.any,
    /**
     * Function handler to render action children
     */
    actionChildren: PropTypes.any,
    /**
     * Heading node of dialog window
     */
    heading: PropTypes.any,
    /**
   * Width of Dialog
   */
    width: PropTypes.string,
    /**
   * Height of Dialog
   */
    height: PropTypes.string,
    /**
   * Background color of inner wrapping element
   */
    backgroundColor: PropTypes.string,
};

export default Dialog;
