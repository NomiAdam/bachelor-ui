import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '../Paper/index';
import Table from '../../molecules/Table/index';
import { TableHeading, TablePagination, TableBody } from './components/index';

class SortTable extends PureComponent {
    state = {
        order: 'asc',
        orderBy: '',
        page: 1,
        rowsPerPage: 10,
    };

    componentDidMount() {
        const { pagination, orderBy } = this.props;
        if (!pagination) this.setState({ rowsPerPage: 50 });
        this.setState({ orderBy });
    }

    handleRequestSort = property => () => {
        const { orderBy, order } = this.state;
        const orderByProperty = property;
        if (orderBy === orderByProperty && order === 'desc') {
            return this.setState({ orderBy: orderByProperty, order: 'asc' });
        }
        return this.setState({ orderBy: orderByProperty, order: 'desc' });
    };

    handleChangePage = (page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = (value) => {
        this.setState({ rowsPerPage: parseInt(value, 10) });
    };

    requestChange = () => {
        const { rowsPerPage, page } = this.state;
        const { requestChange } = this.props;
        requestChange(rowsPerPage, page);
    };

    handleEdit = value => () => {
        const { handleEdit } = this.props;
        handleEdit(value);
    };

    handleDelete = value => () => {
        const { handleDelete } = this.props;
        handleDelete(value);
    };

    render() {
        const {
            headingData, bodyData, editable, handleRedirect, redirect, pagination,
        } = this.props;
        const {
            order, orderBy, rowsPerPage, page,
        } = this.state;
        return (
            <div>
                <Paper overflow="auto">
                    <Table>
                        <TableHeading
                            headingData={ headingData }
                            orderBy={ orderBy }
                            order={ order }
                            onRequestSort={ this.handleRequestSort }
                            columnData={ headingData }
                            editable={ editable }
                        />
                        <TableBody
                            orderBy={ orderBy }
                            order={ order }
                            page={ page }
                            rowsPerPage={ rowsPerPage }
                            columnData={ bodyData }
                            handleDelete={ this.handleDelete }
                            handleEdit={ this.handleEdit }
                            editable={ editable }
                            handleRedirect={ handleRedirect }
                            redirect={ redirect }
                        />
                    </Table>
                </Paper>
                {pagination
                && (
                    <TablePagination
                        totalRows={ bodyData.length }
                        rowsPerPage={ rowsPerPage }
                        page={ page }
                        currentPage={ page }
                        handleChangePage={ this.handleChangePage }
                        handleChangeRowsPerPage={ this.handleChangeRowsPerPage }
                    />
                )
                }
            </div>
        );
    }
}

SortTable.propTypes = {
    /**
     * String, representing name of heading column, "id" property of headingData object is expected
     */
    orderBy: PropTypes.string,
    /**
     * Array of Heading objects, format below is expected
     * [ { id: 'name', label: 'label' }, ... ]
     */
    headingData: PropTypes.array,
    /**
     * Array of table body data, format below is expected
     * [ { key: 'one', anotherKey: 'two', ... }, ... ]
     * Note that number of keys in object should match number of objects in headingData
     */
    bodyData: PropTypes.array,
    /**
     *  Whether table has extra column with edit Icons, boolean is expected
     */
    editable: PropTypes.bool,
    /**
     * Function to handle edit icon action, is present only when table is editable
     */
    handleEdit: PropTypes.func,
    /**
     * Function to handle delete icon action, is present only when table is editable
     */
    handleDelete: PropTypes.func,
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
     * Function to handle redirect on click
     */
    handleRedirect: PropTypes.func,
    /**
     * Whether we show pagination or not, in case pagination is not shown we display all rows
     */
    pagination: PropTypes.bool,
    /**
     * Function to be called when rowsPerPage, or Page has changes,
     * dispatched with 2 params, rowsPerPage and currentPage
     */
    requestChange: PropTypes.func,
};

SortTable.defaultProps = {
    headingData: [],
    bodyData: [],
    editable: false,
    redirect: false,
    pagination: true,
};

export default SortTable;
