import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../../atoms/Paper/index';
import Table from '../../atoms/Table/index';
import {TableHeading, TableBody} from './components/index';
import {evolve, always, length} from 'ramda';

const CheckTable = ({selected, timeSheet, handleChange, isCheckbox}) => {

    const handleRowChange = (key) => (value) => {
        const field = selected[key];

        const evolvedField = evolve({value: always(value)}, field);
        const evolvedSelected = evolve({[key]: always(evolvedField)}, selected);

        handleChange(evolvedSelected);
    };

    const rowRange = length(timeSheet);

    return (
        <Paper overflow={'auto'}>
            <Table rowSpacing>
                <TableHeading dayHours={timeSheet}/>
                <TableBody
                    rowRange={rowRange}
                    handleChange={handleRowChange}
                    selected={selected}
                    isCheckbox={isCheckbox}
                />
            </Table>
        </Paper>
    );
};


CheckTable.propTypes = {
    /**
     * Array of possible day hours for current sport center, format below is expected
     * [ '8:00', '8:30', ... ]
     */
    timeSheet: PropTypes.array,
    /**
     * Object of current table Rows, format as below
     * { key: { label: 'label', value: [], disabled: [] }, ... }
     * value array is array of selected (checked) TableCells
     */
    selected: PropTypes.object,
    /**
     * Function triggered upon selected change, expect new object with changed values
     */
    handleChange: PropTypes.func,
    /**
     * Whether we are using this table using select boxes or not
     */
    isCheckbox: PropTypes.bool,
};

CheckTable.defaultProps = {
    timeSheet: [],
    selected: {},
    isCheckbox: true,
};

export default CheckTable;
