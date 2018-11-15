/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import { mapIndexed } from 'ramda-extension';
import styled from 'styled-components';
import { TimeCell, DayCell } from './components/cells/index';
import { Time, Day } from './components/parts/index';
import Container from '../../atoms/Container/index';
import dayArray from './constants/day';
import { getDate } from './utils/getDays';
import { getTime } from './utils/getTime';
import Dialog from './components/Dialog';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  * {
    box-sizing: border-box;
  }
`;

const mockElem = () => <h1>Hola</h1>;

class Calendar extends PureComponent {
    state = {
        timeColumn: [],
        activeRole: undefined,
        dialogOpen: true,
        dialogLeft: 0,
        dialogRight: 0,
        dialogTop: 0,
        dialogWidth: 0,
        roleId: undefined,
        role: {
            roleTop: 0,
            roleHeight: 0,
            roleLabel: '',
            roleDate: '',
        },
    };

    componentDidMount() {
        this.setState({ timeColumn: getTime(6, 20) });
    }

    renderTimeColumn = map(
        label => <TimeCell label={ label } />,
    );

    renderDayColumns = mapIndexed(
        ({ items }, index) => (
            <DayCell
                id={ index }
                activeDay={ index === this.state.roleId }
                items={ items }
                roleData={ this.state.role }
                activeRole={ this.state.activeRole }
                times={ this.state.timeColumn }
                label={ getDate(this.props.startDate, index) }
                handleClick={ this.handleColumnClick }
                handleDialogOpen={ this.handleDialogOpen }
            />
        ),
    );

    handleColumnClick = ({ roleTop, roleHeight, roleId }) => {
        const { dialogOpen } = this.state;
        if (dialogOpen) {
            this.handleDialogClose();
        }
        this.setState({ roleId, role: { roleTop, roleHeight } });
    };

    resetColumnData = () => this.setState({ roleId: undefined });

    handleDialogOpen = ({
        id, left, top, right, width,
    }) => {
        const { dialogOpen, activeRole } = this.state;
        if (dialogOpen && activeRole === id) {
            this.handleDialogClose();
        } else {
            this.setState({
                activeRole: id,
                dialogLeft: left,
                dialogRight: right,
                dialogTop: top,
                dialogWidth: width,
                dialogOpen: true,
            });
        }
    };

    handleDialogClose = () => this.setState({ dialogOpen: false, activeRole: undefined });

    render() {
        const {
            timeColumn, dialogLeft, dialogOpen, dialogTop, dialogRight, dialogWidth,
        } = this.state;
        return (
            <Container
                height="1000px"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="initial"
            >
                <StyledWrapper>
                    <Dialog
                        isOpen={ dialogOpen }
                        left={ dialogLeft }
                        right={ dialogRight }
                        top={ dialogTop }
                        width={ dialogWidth }
                        elem={ mockElem }
                    />
                    <Time>
                        {this.renderTimeColumn(timeColumn)}
                    </Time>
                    <Day>
                        {this.renderDayColumns(dayArray)}
                    </Day>
                </StyledWrapper>
            </Container>
        );
    }
}

Calendar.propTypes = {
    startDate: PropTypes.string,
};

Calendar.defaultProps = {
    startDate: Date.now(),
};

export default Calendar;
