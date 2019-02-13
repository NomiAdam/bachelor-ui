/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    compose, keys, prop, values, mapObjIndexed, o, contains,
} from 'ramda';
import { isNotEmpty, defaultToEmptyObject } from 'ramda-extension';
import TreeLeaf from './TreeLeaf';
import { lightTheme } from '../../../constants/theme';
import { resolveTheme, TYPES } from '../../../utils/resolveTheme';

const StyledRow = styled.div`
	  background-color: transparent;
	  border-bottom: 1px solid ${ lightTheme.lightGrey };
	  &:hover {
	    cursor: ${ ({ redirect }) => (redirect ? 'pointer' : 'initial') };
		  background-color: ${
    ({ redirect, ...props }) => (redirect ? resolveTheme(TYPES.BACKGROUND_COLOR_HOVER)(props) : 'transparent')
};
	  }
`;

const StyledChildrenWrapper = styled.div`
    overflow: hidden;
    height: ${ ({ isOpen }) => (isOpen ? '100%' : '0') };
`;

const notEmptyChildren = compose(isNotEmpty, keys, prop('children'));
const getTreeDataByProp = dataProp => o(defaultToEmptyObject, prop(dataProp));

class RootRow extends PureComponent {
    state = {
        isOpen: this.props.initiallyOpen,
    };

    renderAnotherRow = (children) => {
        const {
            handleRedirect, redirect, displayProps, dataProp, initiallyOpen, flag, node, handleClick,
        } = this.props;
        const renderChildrenRow = (num, key, obj) => (
            <RootRow
                dataProp={ dataProp }
                initiallyOpen={ initiallyOpen }
                displayProps={ displayProps }
                leafKey={ key }
                treeLeaf={ obj[ key ] }
                key={ key }
                handleRedirect={ handleRedirect }
                redirect={ redirect }
                flag={ flag }
                node={ node }
                handleClick={ handleClick }
            />
        );
        return o(values, mapObjIndexed(renderChildrenRow))(children);
    };

    toggleOpen = () => {
        const { handleClick } = this.props;
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }), handleClick);
    }

    render() {
        const {
            treeLeaf, handleRedirect, redirect, leafKey, displayProps, dataProp, flag, node, style,
        } = this.props;
        const { isOpen } = this.state;
        const hasChildren = notEmptyChildren(treeLeaf);
        const hasFlag = contains(leafKey, flag);
        return (
            <div style={ style }>
                <StyledRow redirect={ redirect }>
                    <TreeLeaf
                        displayProps={ displayProps }
                        leafKey={ leafKey }
                        hasChildren={ hasChildren }
                        handleRedirect={ handleRedirect }
                        isOpen={ isOpen }
                        toggleOpen={ this.toggleOpen }
                        redirect={ redirect }
                        depth={ treeLeaf.depth }
                        leafData={ getTreeDataByProp(dataProp)(treeLeaf) }
                        hasFlag={ hasFlag }
                        node={ node }
                    />
                </StyledRow>
                {
                    hasChildren && (
                        <StyledChildrenWrapper isOpen={ isOpen }>
                            { this.renderAnotherRow(treeLeaf.children) }
                        </StyledChildrenWrapper>
                    )
                }
            </div>
        );
    }
}

RootRow.propTypes = {
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to handle redirect on click, if redirect is set to false, handleRedirect is null
     */
    handleRedirect: PropTypes.any,
    /**
     * Object that has all data about current leaf
     */
    treeLeaf: PropTypes.object,
    /**
     * Unique string key for each leaf
     */
    leafKey: PropTypes.string,
    /**
     * Array of properties that we wish to display in each row
     */
    displayProps: PropTypes.array,
    /**
     * String representation of property that contains leaf data
     */
    dataProp: PropTypes.string,
    /**
     * Whether we want to have leaf opened during render
     */
    initiallyOpen: PropTypes.bool,
    /**
     * Flag, can be anything, note that it compares leafKey with array, and changes color of leaf accordingly
     */
    flag: PropTypes.array,
    /**
   * Children node
   */
    node: PropTypes.any,
    /**
   * onClick function handler
   */
    handleClick: PropTypes.func,
};

RootRow.defaultProps = {
    treeLeaf: {},
    flag: [],
    displayProps: [],
};

export default RootRow;
