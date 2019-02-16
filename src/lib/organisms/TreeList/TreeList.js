import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { o, length, keys } from 'ramda';
import {
    List, CellMeasurerCache, CellMeasurer, AutoSizer,
} from 'react-virtualized';
import RootRow from './components/RootRow';

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

  handleArrowClick = index => () => {
      this.cache.clear(index);
      this.list.recomputeRowHeights(index); // Clear cached size
      this.list.forceUpdateGrid();
  };

  rowRenderer = ({
      node: value, key, style, index, rowKey,
  }) => {
      const {
          handleRedirect, redirect, displayProps, dataProp, initiallyOpen, flag, node, recomputeOnClick,
      } = this.props;
      return (
          <RootRow
              initiallyOpen={ initiallyOpen }
              dataProp={ dataProp }
              displayProps={ displayProps }
              leafKey={ rowKey }
              treeLeaf={ value }
              key={ key }
              recomputeOnClick={ recomputeOnClick }
              handleRedirect={ handleRedirect }
              redirect={ redirect }
              flag={ flag }
              node={ node }
              style={ style }
              handleClick={ this.handleArrowClick(index) }
          />
      );
  }

  measureRowRenderer = nodes => ({
      key, index, parent, style,
  }) => {
      const objectKeys = keys(nodes);
      const node = nodes[ objectKeys[ index ] ];
      return (
          <CellMeasurer cache={ this.cache } columnIndex={ 0 } key={ key } rowIndex={ index } parent={ parent }>
              {m => this.rowRenderer({
                  ...m, node, key, style, index, rowKey: objectKeys[ index ],
              })}
          </CellMeasurer>
      );
  }

  render() {
      const { treeData } = this.props;
      return (
          <AutoSizer>
              { ({ width, height }) => (
                  <List
                      deferredMeasurementCache={ this.cache }
                      width={ width }
                      height={ height }
                      rowCount={ getChildrenCount(treeData) }
                      rowHeight={ this.cache.rowHeight }
                      rowRenderer={ this.measureRowRenderer(treeData) }
                      // eslint-disable-next-line no-return-assign
                      ref={ list => this.list = list }
                  />
              ) }
          </AutoSizer>
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
   * Node to be rendered inside leaf
   */
    node: PropTypes.any,
    /**
   * Whether to reRender when clicked
   */
    recomputeOnClick: PropTypes.bool,
};

TreeList.defaultProps = {
    treeData: {},
    initiallyOpen: true,
};

export default TreeList;
