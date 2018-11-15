import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, tail, values } from 'ramda';
import { mapIndexed } from 'ramda-extension';
import { IoEdit, IoAndroidDelete } from 'react-icons/lib/io';
import TableCell from './TableCell';
import { lightTheme, darkTheme } from '../../constants/theme';

const StyledTableRow = styled.tr`
	background-color: transparent;
	border-bottom: 1px solid ${ lightTheme.lightGrey };
	transition: .25s all ease;
	&:hover {
		background-color: ${ ({ effect }) => (effect ? 'transparent' : lightTheme.whiteBlue) };
	}
`;

const Icon = styled.div`
    padding: 10px 15px;
    font-size: 1.5em;
    cursor: pointer; 
    color: ${ darkTheme.darkGrey };
`;

const StyledEdit = Icon.withComponent(IoEdit);
const StyledTrash = Icon.withComponent(IoAndroidDelete);

class TableRow extends PureComponent {
    state = {
        rowData: [],
    };

    componentDidMount() {
        this.handleTableCellsMap();
    }

    componentDidUpdate(prevProps) {
        const { tableRowData } = this.props;
        if (tableRowData !== prevProps.tableRowData) {
            this.handleTableCellsMap();
        }
    }

    handleTableCellsMap = () => {
        const { tableRowData, redirect, handleRedirect } = this.props;

        const mapTableCells = (value, index) => (
            <TableCell
                redirect={ redirect }
                key={ `${ index }-${ value }` }
                onClick={ handleRedirect }
            >
                {value}
            </TableCell>
        );
        const mappedTableCells = compose(tail, values, mapIndexed(mapTableCells));

        this.setState({ rowData: mappedTableCells(tableRowData) });
    };

    render() {
        const { editable, handleDelete, handleEdit } = this.props;
        const { rowData } = this.state;
        return (
            <StyledTableRow>
                {editable && (
                    <TableCell editable>
                        <StyledTrash onClick={ handleDelete } />
                        <StyledEdit onClick={ handleEdit } />
                    </TableCell>
                )}
                {rowData}
            </StyledTableRow>
        );
    }
}

TableRow.propTypes = {
    /**
     * Whether Table row should have something of Effect on hover, in our case color change
     */
    effect: PropTypes.bool,
    /**
     * Object of keys is expected
     */
    tableRowData: PropTypes.object,
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
     * Function to handle redirect on click, if redirect is set to false, handleRedirect is null
     */
    handleRedirect: PropTypes.any,
};

TableRow.defaultProps = {
    tableRowData: {},
    redirect: false,
    editable: false,
};

export { StyledTableRow, StyledEdit, StyledTrash };
export default TableRow;
