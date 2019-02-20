/* eslint-disable react/destructuring-assignment */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    keys, values, mapObjIndexed, o, propOr,
} from 'ramda';
import { isNotEmpty } from 'ramda-extension';
import TreeLeaf from './TreeLeaf';
import { lightTheme } from '../../../constants/theme';
import { resolveTheme, TYPES } from '../../../utils/resolveTheme';
import { ListItem } from '../../../molecules/List';

const StyledListItem = styled(ListItem)`
	  background-color: transparent;
	  border-bottom: 1px solid ${ lightTheme.lightGrey };
	  &:hover {
	    cursor: ${ ({ clickable }) => (clickable ? 'pointer' : 'initial') };
		  background-color: ${
    ({ clickable, ...props }) => (clickable ? resolveTheme(TYPES.BACKGROUND_COLOR_HOVER)(props) : 'transparent')
};
	  }
`;

const StyledChildrenWrapper = styled.ul`
    width: 100%;
	  padding: 0;
	  list-style-type: none;
    margin: 0;
    transition: .5s all ease;
    overflow: hidden;
    max-height: ${ ({ isOpen }) => (isOpen ? '800px' : '0') };
`;

const notEmptyChildren = o(isNotEmpty, keys);
class RootRow extends PureComponent {
    state = {
        isOpen: this.props.initiallyOpen,
    };

    renderAnotherRow = (children) => {
        const {
            clickable, initiallyOpen, node, handleClick, depth, dataProp,
        } = this.props;
        const dataP = propOr({}, dataProp);
        const renderChildrenRow = (num, key, obj) => (
            <RootRow
                depth={ depth + 1 }
                key={ key }
                initiallyOpen={ initiallyOpen }
                leafKey={ key }
                dataProp={ dataProp }
                leafData={ dataP(obj[ key ]) }
                handleClick={ handleClick }
                clickable={ clickable }
                node={ node }
            >
                { obj[ key ].children }
            </RootRow>
        );
        return o(values, mapObjIndexed(renderChildrenRow))(children);
    };

    toggleOpen = () => {
        const { handleClick } = this.props;
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }), handleClick);
    }

    render() {
        const {
            leafData, handleClick, clickable, node, children, depth, leafKey,
        } = this.props;
        const { isOpen } = this.state;
        const hasChildren = notEmptyChildren(children);
        return (
            <Fragment>
                <StyledListItem clickable={ clickable }>
                    <TreeLeaf
                        depth={ depth }
                        hasChildren={ hasChildren }
                        isOpen={ isOpen }
                        leafKey={ leafKey }
                        toggleOpen={ this.toggleOpen }
                        clickable={ clickable }
                        leafData={ leafData }
                        node={ node }
                        handleClick={ handleClick }
                    />
                </StyledListItem>
                {
                    hasChildren ? (
                        <StyledChildrenWrapper isOpen={ isOpen }>
                            { this.renderAnotherRow(children) }
                        </StyledChildrenWrapper>
                    ) : null
                }
            </Fragment>
        );
    }
}

RootRow.propTypes = {
    /**
     * Whether we can handle onClick event or not
     */
    clickable: PropTypes.bool,
    /**
     * Object that has all data about current leaf
     */
    leafData: PropTypes.object,
    /**
     * Whether we want to have leaf opened during render
     */
    initiallyOpen: PropTypes.bool,
    /**
     * Children object
     */
    children: PropTypes.object,
    /**
   * Function to render children node
   */
    node: PropTypes.func,
    /**
   * onClick function handler
   */
    handleClick: PropTypes.func,
    /**
   * Prop which desired data resides
   */
    dataProp: PropTypes.string,
};

RootRow.defaultProps = {
    leafData: {},
};

export default RootRow;
