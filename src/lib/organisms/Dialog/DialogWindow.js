import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../../molecules/Paper/index';
import { Grid, GridCol } from '../../molecules/Grid/index';
import { DialogContent, DialogActions } from './components/index';

const preventClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

const DialogWindow = ({
    actionChildren, children, heading, width, height, backgroundColor,
}) => (
    <Paper width={ width } height={ height } backgroundColor={ backgroundColor } handleClick={ preventClick }>
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
    /**
   * string definition of dialog width
   */
    width: PropTypes.string,
    /**
   * string definition of dialog height
   */
    height: PropTypes.string,
    /**
   * String representation of outer backgroundColor css property
   */
    backgroundColor: PropTypes.string,
};

export default DialogWindow;
