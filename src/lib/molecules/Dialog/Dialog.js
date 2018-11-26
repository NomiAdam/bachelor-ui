import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { lightTheme } from '../../constants/theme';
import Overlay from '../../atoms/Overlay/index';
import DialogWindow from './DialogWindow';

class Dialog extends PureComponent {
    handleClose = () => {
        const { handleClose } = this.props;
        handleClose();
    };

    render() {
        const {
            isOpen, children, heading, actionChildren, width, height,
        } = this.props;
        return (
            <Overlay
                isOpen={ isOpen }
                handleClose={ this.handleClose }
                background="rgba(0, 0, 0, 0.2)"
                displayHeading={ false }
                backColor={ lightTheme.white }
            >
                <DialogWindow heading={ heading } actionChildren={ actionChildren } width={ width } height={ height }>
                    { children }
                </DialogWindow>
            </Overlay>
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
   *
   */
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Dialog;
