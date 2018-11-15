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
            isOpen, children, heading, renderActionChildren,
        } = this.props;
        return (
            <Overlay
                isOpen={ isOpen }
                handleClose={ this.handleClose }
                background="rgba(0, 0, 0, 0.2)"
                displayHeading={ false }
                backColor={ lightTheme.white }
            >
                <DialogWindow heading={ heading } renderActionChildren={ renderActionChildren }>
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
    renderActionChildren: PropTypes.func.isRequired,
    /**
     * Heading node of dialog window
     */
    heading: PropTypes.any.isRequired,
};

export default Dialog;
