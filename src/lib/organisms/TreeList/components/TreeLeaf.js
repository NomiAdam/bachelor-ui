import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pickAll } from 'ramda';
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
    renderLeafData = () => {
        const {
            leafData, depth, displayProps, hasFlag, node: Node,
        } = this.props;
        const props = pickAll(displayProps)(leafData);
        return <Node { ...props } hasFlag={ hasFlag } depth={ depth } />;
    };

    handleIconClick = (e) => {
        e.stopPropagation();
        const { toggleOpen } = this.props;
        toggleOpen();
    };

    handleRedirectClick = () => {
        const {
            handleRedirect, leafKey, redirect, handleClick, recomputeOnClick,
        } = this.props;
        if (redirect) {
            if (recomputeOnClick) {
                handleClick();
            }
            handleRedirect(leafKey);
        }
    };

    render() {
        const { depth, hasChildren, isOpen } = this.props;
        return (
            <Grid
                onClick={ this.handleRedirectClick }
                padding={ `0 0 0 ${ ( depth - 1 ) * 25 }px` }
            >
                <StyledIconGridCol colXS={ 2 } onClick={ e => e.stopPropagation() }>
                    {
                        hasChildren
                      && <StyledOpenIcon isOpen={ isOpen } onClick={ this.handleIconClick } />}
                </StyledIconGridCol>
                <GridCol colXS={ 10 }>
                    { this.renderLeafData() }
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
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to be called upon TableCell Click
     */
    handleRedirect: PropTypes.func,
    /**
     * Unique string key of current key
     */
    leafKey: PropTypes.string,
    /**
     * Array of props we want to display in this row
     */
    displayProps: PropTypes.array,
    /**
     * Whether current leaf has flag or not
     */
    hasFlag: PropTypes.bool,
    /**
   * Node to render inside leaf
   */
    node: PropTypes.any,
    /**
   * Whether to reRender when clicked
   */
    recomputeOnClick: PropTypes.bool,
    /**
   * onClick function handler
   */
    handleClick: PropTypes.func,
};

export default TreeLeaf;
