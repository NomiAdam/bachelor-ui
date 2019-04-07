import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../molecules/Container/index';

const DialogActions = ({ children }) => (
    <Container height="40px" alignItems="flex-end">
        { children }
    </Container>
);

DialogActions.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.any,
};

export default DialogActions;
