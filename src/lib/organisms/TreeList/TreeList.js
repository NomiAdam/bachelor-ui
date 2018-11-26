import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { o, length, keys } from 'ramda';
import { List, CellMeasurerCache, CellMeasurer } from 'react-virtualized';
import RootRow from './components/RootRow';
import { GridCol } from '../../atoms/Grid/index';

const getChildrenCount = o(length, keys);
class TreeList extends Component {
  cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 20,
  })

  shouldComponentUpdate(prevProps) {
      const { treeData, flag } = this.props;
      return JSON.stringify(treeData) !== JSON.stringify(prevProps.treeData)
      || JSON.stringify(flag) !== JSON.stringify(prevProps.flag);
  }

  rowRenderer = ({ node: value, key }) => {
      const {
          handleRedirect, redirect, displayProps, dataProp, initiallyOpen, flag, node,
      } = this.props;
      return (
          <RootRow
              initiallyOpen={ initiallyOpen }
              dataProp={ dataProp }
              displayProps={ displayProps }
              leafKey={ key }
              treeLeaf={ value }
              key={ key }
              handleRedirect={ handleRedirect }
              redirect={ redirect }
              flag={ flag }
              node={ node }
          />
      );
  }

  measureRowRenderer = nodes => ({
      key, index, parent,
  }) => {
      const objectKeys = keys(nodes);
      const node = nodes[ objectKeys[ index ] ];
      return (
          <CellMeasurer cache={ this.cache } columnIndex={ 0 } key={ key } rowIndex={ index } parent={ parent }>
              {m => this.rowRenderer({
                  ...m, node, key,
              })}
          </CellMeasurer>
      );
  }

  render() {
      const { treeData, width, height } = this.props;
      return (
          <GridCol colXS={ 12 }>
              <List
                  deferredMeasurementCache={ this.cache }
                  width={ width }
                  height={ height }
                  rowCount={ getChildrenCount(treeData) }
                  rowHeight={ this.cache.rowHeight }
                  rowRenderer={ this.measureRowRenderer(treeData) }
              />
          </GridCol>
      );
  }
}

TreeList.propTypes = {
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
    /**
   *
   */
    node: PropTypes.any,
    /**
   *
   */
    width: PropTypes.number.isRequired,
    /**
   *
   */
    height: PropTypes.number.isRequired,
};

TreeList.defaultProps = {
    treeData: {},
    redirect: false,
    initiallyOpen: true,
};

export default TreeList;
