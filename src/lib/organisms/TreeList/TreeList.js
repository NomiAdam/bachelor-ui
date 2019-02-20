import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    mapObjIndexed, o, values, propOr,
} from 'ramda';
import List from '../../molecules/List';
import RootRow from './components/RootRow';

class TreeList extends Component {
    shouldComponentUpdate(prevProps) {
        const { treeData } = this.props;
        return JSON.stringify(treeData) !== JSON.stringify(prevProps.treeData);
    }

  rowRenderer = ({ children, ...other }, key) => {
      const {
          handleClick, clickable, initiallyOpen, node, dataProp,
      } = this.props;
      const dataP = propOr({}, dataProp);
      return (
          <RootRow
              depth={ 1 }
              key={ key }
              initiallyOpen={ initiallyOpen }
              leafKey={ key }
              dataProp={ dataProp }
              leafData={ dataP(other) }
              handleClick={ handleClick }
              clickable={ clickable }
              node={ node }
          >
              {children}
          </RootRow>
      );
  }

  renderInitialRows = o(values, mapObjIndexed(
      (num, key, obj) => this.rowRenderer(obj[ key ], key),
  ));

  render() {
      const { treeData } = this.props;
      return (
          <List>
              {
                  this.renderInitialRows(treeData)
              }
          </List>
      );
  }
}

TreeList.propTypes = {
    /**
   * {
   *  key: {id: 'id', key: 'value', children: { ..... }'}
   * }, note that only objects are accepted value
   */
    treeData: PropTypes.object,
    /**
   * Whether we handle onClick events
   */
    clickable: PropTypes.bool,
    /**
   * Function to handle on click
   */
    handleClick: PropTypes.func,
    /**
   * Boolean indicating whether we want to have opened leaf during render
   */
    initiallyOpen: PropTypes.bool,
    /**
   * Function to be called with single node data
   */
    node: PropTypes.func,
    /**
   * In which prop are desired data
   */
    dataProp: PropTypes.string,
};

TreeList.defaultProps = {
    treeData: {},
    initiallyOpen: true,
};

export default TreeList;
