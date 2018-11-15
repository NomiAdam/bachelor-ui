/* eslint-disable react/destructuring-assignment,no-shadow,prefer-destructuring */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    map, times, evolve, findIndex, contains, o, always, length,
} from 'ramda';
import styled from 'styled-components';
import Role from '../Role';
import HeadingCell from './HeadingCell';
import Border from '../utils/Border';
import { basicTheme } from '../../../../constants/theme';

const StyledDayWrapper = styled.div`
  min-width: 81px;
  position: relative;
  height: 100%;
  flex: 1 0 80px;
  border-right: 1px solid ${ basicTheme.grey };
  overflow-x: hidden;
`;

const getTimeIndex = (timeString, aryTime) => findIndex(contains(timeString), aryTime);
const evolveTime = aryTime => time => evolve({
    start: always(getTimeIndex(time.start, aryTime)),
    end: always(getTimeIndex(time.end, aryTime)),
}, time);

const renderBorder = times(n => <Border position={ n } />);

class DayCell extends PureComponent {
    handleRoleClick = id => (e) => {
        e.stopPropagation();
        const { handleDialogOpen } = this.props;
        const offset = e.target.getBoundingClientRect();
        handleDialogOpen({
            id, top: offset.top, right: offset.right, left: offset.left, width: offset.width,
        });
    };

    renderRole = props => (
        <Role
            { ...props }
            isActive={ props.id === this.props.activeRole }
            handleClick={ this.handleRoleClick(props.id) }
        />
    );

    renderRoles = times => o(map(this.renderRole), map(evolveTime(times)));

    handleClick = (e) => {
        const { handleClick, id } = this.props;
        const clientY = e.clientY;
        const offset = e.target.getBoundingClientRect();
        const clickIndex = Math.floor((clientY - offset.top) / 48);
        handleClick({ roleTop: clickIndex - 1, roleHeight: clickIndex, roleId: id });
    };

    render() {
        const {
            items, label, times, activeDay, roleData, id,
        } = this.props;
        const roles = this.renderRoles(times)(items);
        const borderCount = length(times);
        return (
            <StyledDayWrapper onClick={ this.handleClick }>
                <HeadingCell label={ label } />
                {activeDay
                && (
                    <Role
                        start={ roleData.roleTop }
                        end={ roleData.roleHeight }
                        background={ basicTheme.grey }
                        label={ roleData.label }
                        handleClick={ this.handleRoleClick(id) }
                        // eslint-disable-next-line no-return-assign
                        ref={ el => this.role = el }
                    />
                )
                }
                {roles}
                {renderBorder(borderCount)}
            </StyledDayWrapper>
        );
    }
}

DayCell.propTypes = {
    /**
     * Children nodes
     */
    items: PropTypes.any,
    /**
     * Array of all string times available
     */
    times: PropTypes.array,
    /**
     * String definition of label
     */
    label: PropTypes.string,
    /**
     * onClick function handler
     */
    handleClick: PropTypes.func,
    /**
     * Function handler to close calendar dialog
     */
    handleDialogClose: PropTypes.func,
    /**
     * Function handler to open calendar dialog
     */
    handleDialogOpen: PropTypes.func,
    /**
     * Identification of currently active role
     */
    activeRole: PropTypes.number,
    /**
     * Unique number definition of current cell
     */
    id: PropTypes.number,
    /**
     * Whether current cell is active one or not
     */
    activeDay: PropTypes.bool,
    /**
     * Role data object as defined in Calendar
     */
    roleData: PropTypes.bool,
};

export default DayCell;
