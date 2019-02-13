import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map, equals } from 'ramda';
import { StyledTableRow } from '../../../molecules/Table/TableRow';
import TableHeadingCell from './TableHeadingCell';

class TableHeading extends PureComponent {
    state = {
        headingData: [],
    };

    componentDidUpdate(prevProps) {
        const { orderBy, headingData, order } = this.props;
        if (
            headingData !== prevProps.headingData
            || orderBy !== prevProps.orderBy
            || order !== prevProps.order
        ) {
            this.handleTableHeadingMap();
        }
    }

    handleTableHeadingMap = () => {
        const {
            headingData, onRequestSort, order, orderBy,
        } = this.props;

        const beingSorted = equals(orderBy);

        const mapHeaderCell = ({ label, colSpan, id }) => (
            <TableHeadingCell
                key={ id }
                colSpan={ colSpan }
                onRequestSort={ onRequestSort(id) }
                label={ label }
                order={ order }
                beingSorted={ beingSorted(id) }
            />
        );

        const mappedHeading = map(mapHeaderCell);
        this.setState({ headingData: mappedHeading(headingData) });
    };

    render() {
        const { editable } = this.props;
        const { headingData } = this.state;
        return (
            <thead>
                <StyledTableRow effect>
                    {editable && <TableHeadingCell editable />}
                    {headingData}
                </StyledTableRow>
            </thead>
        );
    }
}

TableHeading.propTypes = {
    /**
	 * Array of possible tableHeadings, is expected array of
	 * [{ label: 'label', colSpan: 2, id: 'name' }, ... ]
     */
    headingData: PropTypes.array,
    /**
     * Function handler when requesting sort by given ID (key)
     */
    onRequestSort: PropTypes.func,
    /**
     * String representation of actual sorting order, ascending or descending
     */
    order: PropTypes.string,
    /**
     * String representation of ID (key) by which we are sorting
     */
    orderBy: PropTypes.string,
    /**
     * Whether Table is editable or not
     */
    editable: PropTypes.bool,

};

TableHeading.defaultProps = {
    headingData: [],
};

export default TableHeading;
