import React from 'react';
import PropTypes from 'prop-types';
import { SimpleTableRow } from '../../../atoms/Table/index';

const ReservationTableHead = ({ dayHours }) => (
    <thead>
        <SimpleTableRow simpleTableRowData={ dayHours } labeled label="Sportoviště" />
    </thead>
);

ReservationTableHead.propTypes = {
    /**
     * Array of displayed day hours on given sport center
     */
    dayHours: PropTypes.array,
};

ReservationTableHead.defaultProps = {
    dayHours: [],
};

export default ReservationTableHead;
