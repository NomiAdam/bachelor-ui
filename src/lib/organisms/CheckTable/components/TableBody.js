import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import {range, mapObjIndexed, values, o} from 'ramda';

class ReservationTableBody extends PureComponent {
    state = {
        bodyData: [],
    };

    componentDidUpdate(prevProps) {
        const { selected } = this.props;
        if( selected !== prevProps.selected ) {
            this.handleTableBodyMap();
        }
    }

    handleTableBodyMap = () => {
        const {rowRange, handleChange, selected, isCheckbox} = this.props;

        const cellRange = range(0, rowRange);

        const mapTableRow = ({value, label, disabled}, key) => (
            <TableRow
                key={key}
                label={label}
                dayHours={cellRange}
                selected={value}
                disabled={disabled}
                handleChange={handleChange(key)}
                isCheckbox={isCheckbox}
            />
        );

        const mapRow = mapObjIndexed(mapTableRow);
        const mappedTableRows = o(values, mapRow);

        this.setState({ bodyData: mappedTableRows(selected) })
    };

    render() {
        const { bodyData } = this.state;
        return (
            <tbody>
            {bodyData}
            </tbody>
        );
    }
}

ReservationTableBody.propTypes = {
    /**
     * Number indicating how many TableCells we will have in each row
     */
    rowRange: PropTypes.number,
    /**
     * Handle onClick on TableCell, (key) => (value) => is expected
     */
    handleChange: PropTypes.func,
    /**
     * Object of current table Rows, format as below
     * { key: { label: 'label', value: [] }, ... }
     * value array is array of selected (checked) TableCells
     */
    selected: PropTypes.object,
    /**
     * Whether we use checkbox component inside table or not
     */
    isCheckbox: PropTypes.bool,
};

ReservationTableBody.defaultProps = {
    dayHours: [],
    selected: {},
    rowRange: 0,
};

export default ReservationTableBody;
