import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TableRow} from '../../../atoms/Table/index';
import {map, slice, o, dec, multiply, sort, prop, equals, ifElse, descend, ascend, always} from 'ramda';

const getSliceStart = o(multiply, dec);

const isAscending = equals('asc');
const sortByAscend = always(ascend);
const sortByDescend = always(descend);
const sortByOrder = ifElse(isAscending, sortByAscend, sortByDescend);

const getRowIdentification = prop('id');

class TableBody extends PureComponent {
    state = {
        columnData: [],
    };

    componentDidUpdate(prevProps) {
        const {
            columnData, order, page, rowsPerPage,
        } = this.props;
        if (
            columnData !== prevProps.columnData
            ||
            order !== prevProps.order
            ||
            page !== prevProps.page
            ||
            rowsPerPage !== prevProps.rowsPerPage
        ) {
            this.handleColumnDataMap();
        }
    };

    handleColumnDataMap = () => {
        const {
            columnData,
            rowsPerPage,
            page,
            orderBy,
            order,
            editable,
            handleDelete,
            handleRedirect,
            redirect,
            handleEdit
        } = this.props;

        const mapTableRow = (value) => (
            <TableRow
                tableRowData={value}
                key={getRowIdentification(value)}
                editable={editable}
                handleDelete={handleDelete(getRowIdentification(value))}
                handleEdit={handleEdit(getRowIdentification(value))}
                handleRedirect={redirect ? handleRedirect(getRowIdentification(value)) : null}
                redirect={redirect}
            />
        );

        const mappedTableRows = map(mapTableRow);

        const sliceStart = getSliceStart(page)(rowsPerPage);
        const sliceEnd = multiply(page, rowsPerPage);
        const sliceBody = slice(sliceStart, sliceEnd);

        const byOrder = sortByOrder(order)(prop(orderBy));

        const sortByGivenKey = sort(byOrder);
        const sortedBody = o(sortByGivenKey, sliceBody);

        const mappedBody = o(mappedTableRows, sortedBody);

        this.setState({ columnData: [] }, () => {
            this.setState({columnData: mappedBody(columnData)})
        });
    };

    render() {
        const {columnData} = this.state;
        return (
            <tbody>
            {columnData}
            </tbody>
        );
    };
}

TableBody.propTypes = {
    /**
     * Number representing current page
     */
    page: PropTypes.number,
    /**
     * Number representing how many rows per page are displayed
     */
    rowsPerPage: PropTypes.number,
    /**
     * String value, representing key, by which we will sort
     */
    orderBy: PropTypes.string,
    /**
     * String representation, either ascending, or descending
     */
    order: PropTypes.string,
    /**
     * [{id: 'id', key: 'value', anotherKey: 'val'}], note that every object must start with id key
     */
    columnData: PropTypes.array,
    /**
     * Function to handle current row delete
     */
    handleDelete: PropTypes.func,
    /**
     * Function to handle current row edit
     */
    handleEdit: PropTypes.func,
    /**
     * Boolean value, indicating whether the body is editable or not
     */
    editable: PropTypes.bool,
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to handle redirect on click
     */
    handleRedirect: PropTypes.func,
};

TableBody.defaultProps = {
    columnData: [],
    editable: false,
    redirect: false,
};

export default TableBody;
