import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
    FaClose, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle,
} from 'react-icons/lib/fa';
import { Grid, GridCol } from '../../molecules/Grid/index';
import { basicTheme, lightTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const width = 400;
const height = 60;

const variantColor = {
    success: basicTheme.green,
    warning: basicTheme.orange,
    error: basicTheme.red,
    info: lightTheme.lightBlue,
};

const hideNotification = keyframes`
    from {
       transform:translateX(0px); 
    } 
    to {
       transform:translateX(${ width }px);  
    }
`;

const displayNotification = keyframes`
    from {
       transform:translateX(${ width }px); 
    } 
    to {
       transform:translateX(0px);  
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    border: none;
    border-radius: ${ resolveTheme(TYPES.BORDER_RADIUS) };
    align-items: center;
    position: fixed;
    overflow: hidden;
    visibility: ${ ({ isOpen }) => (isOpen ? 'visible' : 'hidden') };
    transition: visibility .5s ease;
    top: 0;
    right: 0;
    max-width: 100%;
    height: ${ height }px;
    background-color: ${ props => variantColor[ props.variant ] };
    animation: ${ ({ isOpen }) => (isOpen ? `${ displayNotification } .5s linear;` : `${ hideNotification } .5s linear;`) };
    z-index: 999;	
    margin: 15px;
`;

const StyledIcon = styled(FaClose)`
    color: ${ lightTheme.white };
    font-size: 1em;
`;

const StyledCheck = StyledIcon.withComponent(FaCheckCircle);
const StyledWarning = StyledIcon.withComponent(FaExclamationTriangle);
const StyledAlert = StyledIcon.withComponent(FaExclamationCircle);
const StyledInfo = StyledIcon.withComponent(FaInfoCircle);

const StyledClose = styled(StyledIcon)`
    cursor: pointer;
`;

const StyledTextWrapper = styled.div`
    width: ${ width - 100 }px;
    font-size: 1em;
    color: ${ lightTheme.white };
`;

const variantIcon = {
    success: StyledCheck,
    warning: StyledWarning,
    error: StyledAlert,
    info: StyledInfo,
};

class Notification extends Component {
    componentDidUpdate() {
        const { onClose, open } = this.props;
        if (open) {
            setTimeout(onClose, 5000);
        }
    }

    handleClose = (/* EVENT */) => {
        const { onClose } = this.props;
        onClose(false);
    };

    render() {
        const {
            open, variant, message, secondary,
        } = this.props;
        const Icon = variantIcon[ variant ];
        return (
            <StyledWrapper secondary={ secondary } isOpen={ open } variant={ variant }>
                <Grid gridGap="10px" padding="10px">
                    <GridCol colXS={ 1 }>
                        <Icon />
                    </GridCol>
                    <GridCol colXS={ 10 }>
                        <StyledTextWrapper secondary={ secondary }>
                            <span>
                                {message}
                            </span>
                        </StyledTextWrapper>
                    </GridCol>
                    <GridCol colXS={ 1 }>
                        <StyledClose onClick={ this.handleClose } secondary={ secondary } />
                    </GridCol>
                </Grid>
            </StyledWrapper>
        );
    }
}

Notification.propTypes = {
    /**
     * Whether we should display Notification or not
     */
    open: PropTypes.bool,
    /**
     * onClick handler is triggered when clicked on Close Icon
     */
    onClose: PropTypes.func,
    /**
     * Message to display, string is expected
     */
    message: PropTypes.string,
    /**
     * What kind of notification will be displayed, string is expected
     */
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
};

Notification.defaultProps = {
    variant: 'info',
};

export {
    StyledWrapper, StyledAlert, StyledCheck, StyledClose, StyledInfo, StyledWarning,
};
export default Notification;
