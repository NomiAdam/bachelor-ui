import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import RootRow from './RootRow';
import { GridCol } from '../../../atoms/Grid/index';
import {mapObjIndexed, o, values} from 'ramda';

class TreeBody extends PureComponent {
    renderTableRow = () => {
        const {handleRedirect, redirect, treeData, displayProps, dataProp, initiallyOpen, flag} = this.props;
        const mapTableRow = (num, key, obj) => (
            <RootRow
                initiallyOpen={initiallyOpen}
                dataProp={dataProp}
                displayProps={displayProps}
                leafKey={key}
                treeLeaf={obj[key]}
                key={key}
                handleRedirect={handleRedirect}
                redirect={redirect}
                flag={flag}
            />
        );
        return o(values, mapObjIndexed(mapTableRow))(treeData);
    };

    render() {
        return (
            <GridCol colXS={12}>
                {this.renderTableRow()}
            </GridCol>
        );
    };
}

TreeBody.propTypes = {
    /**
     * [{id: 'id', key: 'value', anotherKey: 'val'}], note that every object must start with id key
     */
    treeData: PropTypes.object,
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to handle redirect on click
     */
    handleRedirect: PropTypes.func,
    /**
     * Array of props that we want to display in each row
     */
    displayProps: PropTypes.array,
    /**
     * String property representing which prop has our leafData
     */
    dataProp: PropTypes.string,
    /**
     * Boolean indicating whether we want to have opened leaf during render
     */
    initiallyOpen: PropTypes.bool,
    /**
     * Flag, can be anything, note that it compares leafKey with array, and changes color of leaf accordingly
     */
    flag: PropTypes.bool,
};

TreeBody.defaultProps = {
    treeData: {},
};

export default TreeBody;
