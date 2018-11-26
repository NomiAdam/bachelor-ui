import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pickAll } from 'ramda';
import { IoIosArrowDown } from 'react-icons/lib/io';
import { Grid, GridCol } from '../../../atoms/Grid/index';

const StyledIconGridCol = styled(GridCol)`
  display: flex;
  align-items: center;
  cursor: initial;
`;

const StyledOpenIcon = styled(IoIosArrowDown)`
  transition: all .5s ease;
  font-size: 1.5rem;
  ${ ({ depth }) => `margin-left: ${ depth * 8 }px` };
  transform: ${ ({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)') };
  &:hover {
	    cursor: pointer;
  }
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
        const { handleRedirect, leafKey, redirect } = this.props;
        if (redirect) {
            handleRedirect(leafKey);
        }
    };

    render() {
        const { depth, hasChildren, isOpen } = this.props;
        return (
            <Grid
                onClick={ this.handleRedirectClick }
                depth={ depth }
            >
                <StyledIconGridCol colXS={ 2 } onClick={ e => e.stopPropagation() }>
                    {
                        hasChildren
                      && <StyledOpenIcon depth={ depth } isOpen={ isOpen } onClick={ this.handleIconClick } />}
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
   *
   */
    node: PropTypes.any,
};

export default TreeLeaf;
