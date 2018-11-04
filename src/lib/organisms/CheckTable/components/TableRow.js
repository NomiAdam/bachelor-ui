import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TableCell} from '../../../atoms/Table/index';
import {StyledTableRow} from '../../../atoms/Table/SimpleTableRow';
import Checkbox from '../../../atoms/Checkbox/index';
import CheckCell from './CheckCell';
import {
    map, addIndex, indexOf, o, append, equals, ifElse, __, remove, always, reduce, add,
} from 'ramda';

const mapIndexed = addIndex(map);
const isSelected = equals(-1);

const computeSelectedArray = reduce(add, 0);

class TableRow extends PureComponent {
    state = {
        rowData: [],
    };

    componentDidMount() {
        this.handleDayHoursMap();
    };

    componentDidUpdate(prevProps) {
        const {selected} = this.props;
        if (computeSelectedArray(selected) !== computeSelectedArray(prevProps.selected)) {
            this.handleDayHoursMap();
        }
    };

    handleClick = (id) => (e) => {
        e.preventDefault();

        const {selected, handleChange} = this.props;

        const indexOfSelected = indexOf(__, selected);

        const appendWithSelected = always(append(id, selected));
        const removeFromSelected = always(o(remove(__, 1, selected), indexOfSelected)(id));

        const removeOrConcat = ifElse(isSelected, appendWithSelected, removeFromSelected);

        const changedSelectedState = o(removeOrConcat, indexOfSelected);

        handleChange(changedSelectedState(id));
    };

    handleDayHoursMap = () => {
        const {dayHours, isCheckbox} = this.props;
        const mapDayHour = (hour, index) => {
            return isCheckbox ?
                (
                    <TableCell key={index} onClick={this.handleClick(index)}>
                        <Checkbox checked={this.isSelected(index) && !this.isDisabled(index)}/>
                    </TableCell>
                ) : (
                    <CheckCell checked={this.isSelected(index)} disabled={this.isDisabled(index)}/>
                );
        };
        const mappedReservationCells = mapIndexed(mapDayHour);

        this.setState({rowData: mappedReservationCells(dayHours)});
    };

    isSelected = id => this.props.selected.indexOf(id) !== -1;

    isDisabled = id => this.props.disabled.indexOf(id) !== -1;

    render() {
        const {label} = this.props;
        const {rowData} = this.state;
        return (
            <StyledTableRow>
                <TableCell>
                    {label}
                </TableCell>
                {rowData}
            </StyledTableRow>
        );
    }
}

TableRow.propTypes = {
    /**
     * String representing label for each row, note that this can be day or sports center
     */
    label: PropTypes.string.isRequired,
    /**
     * Array of displayed day hours
     */
    dayHours: PropTypes.array,
    /**
     * Handle onClick on TableCell, (value) => is expected
     */
    handleChange: PropTypes.func,
    /**
     * Array of checked TableCells for current row
     */
    selected: PropTypes.array,
    /**
     * Whether we use checkbox inside component or not
     */
    isCheckbox: PropTypes.bool,
    /**
     * Array of disabled TableCells for current row
     */
    disabled: PropTypes.array,
};

TableRow.defaultProps = {
    dayHours: [],
    selected: [],
    disabled: [],
    isCheckbox: true,
};

export default TableRow;
