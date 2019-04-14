import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, GridCol } from '../../../molecules/Grid/index';
import Icon from '../../../atoms/Icon';
import flexConstants from '../../../constants/flex';

const StyledIconGridCol = styled(GridCol)`
  display: flex;
  align-items: center;
  cursor: initial;
`;

const stopPropagation = e => e.stopPropagation();

class TreeLeaf extends PureComponent {
    handleIconClick = (e) => {
        e.stopPropagation();
        const { toggleOpen } = this.props;
        toggleOpen();
    };

    handleClick = (/* EVENT */) => {
        const { handleClick, leafKey, clickable } = this.props;
        if (clickable) {
            handleClick(leafKey);
        }
    };

    render() {
        const {
            hasChildren, isOpen, leafData, node,
        } = this.props;
        return (
            <Grid
                onClick={ this.handleClick }
            >
                <StyledIconGridCol colXS={ 1 } onClick={ stopPropagation }>
                    {
                        hasChildren
                      && <Icon name="arrowDown" open={ isOpen } onClick={ this.handleIconClick } />}
                </StyledIconGridCol>
                <GridCol colXS={ 11 } horizontalAlign={ flexConstants.POSITION_LEFT }>
                    { node({ ...leafData }) }
                </GridCol>
            </Grid>
        );
    }
}

TreeLeaf.propTypes = {
    /**
     * Whether has any children, leafs
     */
    hasChildren: PropTypes.bool,
    /**
     * Function handler to toggle open leafs
     */
    toggleOpen: PropTypes.func,
    /**
     * Number representation space between Cells
     */
    leafData: PropTypes.object,
    /**
     * Depth in tree for current leaf
     */
    depth: PropTypes.number,
    /**
     * Whether we handle some action on click or not
     */
    clickable: PropTypes.bool,
    /**
     * Function to be called upon List item Click
     */
    handleClick: PropTypes.func,
    /**
     * Unique string key of current key
     */
    leafKey: PropTypes.string,
    /**
   * Node to render inside leaf
   */
    node: PropTypes.func,
};

export default TreeLeaf;
