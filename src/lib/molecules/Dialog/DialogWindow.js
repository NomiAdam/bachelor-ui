import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../../organisms/Paper/index';
import { Grid, GridCol } from '../../organisms/Grid/index';
import { DialogContent, DialogActions } from './components/index';

const DialogWindow = ({
    actionChildren, children, heading, width, height,
}) => (
    <Paper width={ width } height={ height }>
        <Grid gridGap="0" padding="0">
            <GridCol colXS={ 12 }>
                {heading}
            </GridCol>
            <GridCol colXS={ 12 }>
                <DialogContent>
                    {children}
                </DialogContent>
            </GridCol>
            <GridCol colXS={ 12 }>
                <DialogActions>
                    { actionChildren }
                </DialogActions>
            </GridCol>
        </Grid>
    </Paper>
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
    actionChildren: PropTypes.any.isRequired,
    /**
     * Node rendered on heading
     */
    heading: PropTypes.any.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default DialogWindow;
