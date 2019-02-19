import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/lib/io';
import { Grid, GridCol } from '../../Grid/index';
import { resolveTheme, TYPES } from '../../../utils/resolveTheme';

const StyledIconGridCol = styled(GridCol)`
  display: flex;
  align-items: center;
  cursor: initial;
`;

const StyledOpenIcon = styled(IoIosArrowDown)`
  transition: all .5s ease;
  font-size: 1.5rem;
  color: ${ resolveTheme(TYPES.COLOR) };
  transform: ${ ({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)') };
`;

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
            depth, hasChildren, isOpen, leafData, node,
        } = this.props;
        return (
            <Grid
                onClick={ this.handleClick }
                padding={ `0 0 0 ${ ( depth - 1 ) * 25 }px` }
            >
                <StyledIconGridCol colXS={ 1 } onClick={ e => e.stopPropagation() }>
                    {
                        hasChildren
                      && <StyledOpenIcon isOpen={ isOpen } onClick={ this.handleIconClick } />}
                </StyledIconGridCol>
                <GridCol colXS={ 11 } horizontalAlign="flex-start">
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
