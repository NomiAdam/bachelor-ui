import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableCell = styled.td`
	max-width: 100%;
	padding: 10px;
	${({editable}) => editable ? 'max-width: 100px' : ''};
	&:hover {
	  cursor: ${({redirect}) => redirect ? 'pointer' : 'inherit' };
	}
`;

class TableCell extends PureComponent {
	render() {
		const { children, colSpan, redirect, onClick, editable } = this.props;
		return(
			<StyledTableCell
				colSpan={colSpan}
				redirect={redirect}
                onClick={onClick}
                editable={editable}
			>
				{ children }
			</StyledTableCell>
		)
	}
}

TableCell.propTypes = {
	/**
	 * Number representation space between Cells
	 */
	colSpan:PropTypes.number,
	/**
	 * Children nodes of TableCell component
	 */
	children: PropTypes.any,
    /**
     * Whether we redirect on click or not
     */
    redirect: PropTypes.bool,
    /**
	 * Function to be called upon TableCell Click
     */
    onClick: PropTypes.func,
    /**
	 * Whether TableCell is used for Edit Icons
     */
    editable: PropTypes.bool,
};

TableCell.defaultProps = {
    redirect: false,
};

export { StyledTableCell };
export default TableCell;
