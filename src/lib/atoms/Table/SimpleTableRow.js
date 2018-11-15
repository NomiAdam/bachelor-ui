import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map, addIndex } from 'ramda';
import TableCell from './TableCell';

const mapIndexed = addIndex(map);

const StyledTableRow = styled.tr`
	background-color: transparent;
	td:first-child {
	  float: left;
	}
`;

const mapTableCells = (value, index) => <TableCell key={ index }>{value}</TableCell>;
const mappedTableCells = mapIndexed(mapTableCells);
class SimpleTableRow extends PureComponent {
    state = {
        rowData: [],
    };

    componentDidMount() {
        this.handleTableCellsMap();
    }

    componentDidUpdate(prevProps) {
        const { simpleTableRowData } = this.props;
        if (JSON.stringify(simpleTableRowData) !== JSON.stringify(prevProps.simpleTableRowData)) {
            this.handleTableCellsMap();
        }
    }

    handleTableCellsMap() {
        const { simpleTableRowData } = this.props;
        this.setState({ rowData: mappedTableCells(simpleTableRowData) });
    }

    render() {
        const { labeled, label } = this.props;
        const { rowData } = this.state;
        return (
            <StyledTableRow>
                {labeled && <TableCell>{label}</TableCell>}
                {rowData}
            </StyledTableRow>
        );
    }
}

SimpleTableRow.propTypes = {
    /**
     * Array of values is expected, value can be string, number or another Component
     */
    simpleTableRowData: PropTypes.array,
    /**
     * Boolean value, when true extra TabelCell is added to the row
     */
    labeled: PropTypes.bool,
    /**
     * Can be any value, be it string, number or Component, is displayed only when Row is labeled
     */
    label: PropTypes.any,
};

SimpleTableRow.defaultProps = {
    simpleTableRowData: [],
    labeled: false,
};

export { StyledTableRow };
export default SimpleTableRow;
