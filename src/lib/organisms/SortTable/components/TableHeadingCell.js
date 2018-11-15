import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/lib/io';

const Icon = styled.div`
    padding: 0 10px;
    visibility: ${ ({ shouldDisplay }) => (shouldDisplay ? 'visible' : 'hidden') };
`;

const StyledArrowDown = Icon.withComponent(IoIosArrowDown);
const StyledArrowUp = Icon.withComponent(IoIosArrowUp);

const StyledHeadingTableCell = styled.th`
    max-width: 100%;
	padding: 20px;
	text-align: left;
	${ ({ editable }) => (editable ? 'max-width: 100px' : '') };
`;

const TableHeadingCell = ({
    label, onRequestSort, order, beingSorted, editable,
}) => (
    <StyledHeadingTableCell onClick={ onRequestSort } editable={ editable }>
        {label}
        {order === 'asc'
            ? <StyledArrowDown shouldDisplay={ beingSorted } />
            : <StyledArrowUp shouldDisplay={ beingSorted } />
        }
    </StyledHeadingTableCell>
);

TableHeadingCell.propTypes = {
    /**
     * Number representation space between Cells
     */
    colSpan: PropTypes.number,
    /**
     * Function handler when requesting sort by given ID (key)
     */
    onRequestSort: PropTypes.func,
    /**
     * String representation by which we are sorting, either ascending or descending
     */
    order: PropTypes.string,
    /**
     * String value of cell
     */
    label: PropTypes.string,
    /**
     * Whether we are sorting by this Cell ID (key)
     */
    beingSorted: PropTypes.bool,
    /**
     * Whether cell is editable or not
     */
    editable: PropTypes.bool,
};

TableHeadingCell.defaultProps = {
    label: '',
    beingSorted: false,
};

export { StyledHeadingTableCell };
export default TableHeadingCell;
