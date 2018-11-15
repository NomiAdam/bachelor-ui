import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '../../atoms/Paper/index';
import { Grid } from '../../atoms/Grid/index';
import { TreeHeading, TreeBody } from './components/index';

class TreeTable extends Component {
    shouldComponentUpdate(prevProps) {
        const { treeData, flag } = this.props;
        return JSON.stringify(treeData) !== JSON.stringify(prevProps.treeData)
            || JSON.stringify(flag) !== JSON.stringify(prevProps.flag);
    }

    render() {
        const {
            headingData,
            treeData,
            redirect,
            handleRedirect,
            displayProps,
            dataProp,
            initiallyOpen,
            flag,
        } = this.props;
        return (
            <Paper padding="0" center overflow="auto">
                <Grid padding="0" gridGap="0">
                    <TreeHeading
                        headingData={ headingData }
                    />
                    <TreeBody
                        initiallyOpen={ initiallyOpen }
                        dataProp={ dataProp }
                        displayProps={ displayProps }
                        treeData={ treeData }
                        handleRedirect={ handleRedirect }
                        redirect={ redirect }
                        flag={ flag }
                    />
                </Grid>
            </Paper>
        );
    }
}

TreeTable.propTypes = {
    /**
     * Array of Heading objects, format below is expected
     * [ { id: 'name', label: 'label' }, ... ]
     */
    headingData: PropTypes.array,
    /**
     * Array of table body data, format below is expected
     * [ { key: 'one', anotherKey: 'two', ... }, ... ]
     * Note that number of keys in object should match number of objects in headingData
     */
    treeData: PropTypes.array,
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to handle redirect on click
     */
    handleRedirect: PropTypes.func,
    /**
     * Array of properties that we wish to display in table
     */
    displayProps: PropTypes.array.isRequired,
    /**
     * String property of object that contains tree leaf data
     */
    dataProp: PropTypes.string.isRequired,
    /**
     * Whether to open all tree nodes during render
     */
    initiallyOpen: PropTypes.bool,
    /**
     * Flag, can be anything, note that it compares leafKey with array, and changes color of leaf accordingly
     */
    flag: PropTypes.bool,
};

TreeTable.defaultProps = {
    redirect: false,
    initiallyOpen: true,
};

export default TreeTable;
