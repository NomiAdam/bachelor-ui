import React from 'react';
import Paper from '../../atoms/Paper/index';
import {Grid, GridCol} from '../../atoms/Grid/index';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {DialogContent, DialogActions} from './components/index';

const StyledWindowWrapper = styled(Paper)`
    max-height: 800px;
    min-width: 500px;
    min-height: 500px;
    max-width: 800px;
`;

const DialogWindow = ({ renderActionChildren, children, heading}) => (
    <StyledWindowWrapper>
        <Grid gridGap={'0'} padding={'0'}>
            <GridCol colXS={12}>
                {heading}
            </GridCol>
            <GridCol colXS={12}>
                <DialogContent>
                    {children}
                </DialogContent>
            </GridCol>
            <GridCol colXS={12}>
                <DialogActions>
                    { renderActionChildren() }
                </DialogActions>
            </GridCol>
        </Grid>
    </StyledWindowWrapper>
);

DialogWindow.propTypes = {
    /**
     * onClick function handler
     */
    handleClick: PropTypes.func,
    /**
     * Children nodes
     */
    children: PropTypes.any,
    /**
     * Function handler to render action children
     */
    renderActionChildren: PropTypes.func.isRequired,
    /**
     * Node rendered on heading
     */
    heading: PropTypes.any.isRequired,
};

export default DialogWindow;
