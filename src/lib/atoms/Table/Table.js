import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: ${({rowSpacing}) => rowSpacing ? 'separate' : 'collapse'};
	padding-right: ${({rowSpacing}) => rowSpacing ? '5px' : '0'};
	border-spacing: ${({rowSpacing}) => rowSpacing ? '0 5px' : '0'};
	font-size: .85em;
`;

class Table extends PureComponent {
    render() {
        const {children, rowSpacing} = this.props;
        return (
            <StyledTable rowSpacing={rowSpacing}>
                {children}
            </StyledTable>
        )
    }
}

Table.propTypes = {
    /**
     * Children nodes of Table, Table body is expected
     */
    children: PropTypes.any,
    /**
     * Whether we should have space between rows or not
     */
    rowSpacing: PropTypes.bool,
};

Table.defaultProps = {
    rowSpacing: false,
};

export default Table;
