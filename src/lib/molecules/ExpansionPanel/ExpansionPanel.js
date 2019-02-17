/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    contains, without, append, ifElse, __, always,
} from 'ramda';
import { mapIndexed } from 'ramda-extension';
import ExpansionPanelChild from './ExpansionPanelChild';

const StyledExpansionPanelWrapper = styled.div`
    padding: 10px;
`;

const handleMultipleChange = (index, single) => ifElse(
    contains(index),
    without([index], __),
    single ? always(append(index, [])) : append(index, __),
);
class ExpansionPanel extends PureComponent {
    state = {
        opened: [],
    };

    handleOpenClick = index => () => {
        const { openSingle } = this.props;
        const { opened } = this.state;
        this.setState({
            opened: handleMultipleChange(index, openSingle)(opened),
        });
    };

    isTabOpen = index => contains(index, this.state.opened);

    render() {
        const { items, secondary } = this.props;
        const mapExpansionTableChildren = ({ heading, body }, index) => (
            <ExpansionPanelChild
                key={ index }
                handleClick={ this.handleOpenClick(index) }
                open={ this.isTabOpen(index) }
                heading={ heading }
                body={ body }
                secondary={ secondary }
            />
        );
        const mappedExpansionTableChildren = mapIndexed(mapExpansionTableChildren);
        return (
            <StyledExpansionPanelWrapper secondary={ secondary }>
                {mappedExpansionTableChildren(items)}
            </StyledExpansionPanelWrapper>
        );
    }
}

ExpansionPanel.propTypes = {
    /**
     * Array of objects each representing each PanelChild, [ { heading: 'String', body: 'Anything' } ]
     */
    items: PropTypes.array,
    /**
     * Whether we can have more than one expansion open
     */
    openSingle: PropTypes.bool,
};

ExpansionPanel.defaultProps = {
    items: [],
};

export { StyledExpansionPanelWrapper };
export default ExpansionPanel;
