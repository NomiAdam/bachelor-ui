import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../Paper/index';
import GridCol from './GridCol';
import { lightTheme } from '../../constants/theme';

const GridTile = ({ background, width, height, children, padding, center, ...rest }) => (
    <GridCol {...rest} center={center}>
        <Paper background={background} width={width} height={height} padding={padding} center={center} >
            {children}
        </Paper>
    </GridCol>
);

GridTile.propTypes = {
    /**
     * String representation of background color
     */
    background: PropTypes.string,
    /**
     * String representation of width
     */
    width: PropTypes.string,
    /**
     * String representation of height
     */
    height: PropTypes.string,
    /**
     * Whether we should center inner parts
     */
    center: PropTypes.bool,
};

GridTile.defaultProps = {
    width: '100%',
    background: lightTheme.white,
};

export default GridTile;
