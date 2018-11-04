import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme, basicTheme } from '../../../constants/theme';

const StyledTableCell = styled.td`
    margin: 10px 0;
	background-color: ${({checked, disabled}) => disabled ? basicTheme.grey : checked ? lightTheme.lightBlue : 'transparent'};
`;

class CheckCell extends PureComponent {
    render() {
        const { checked } = this.props;
        return(
            <StyledTableCell checked={checked} />
        )
    }
}

CheckCell.propTypes = {
    /**
     * Boolean whether cell is checked or not
     */
    checked: PropTypes.bool,
    /**
     * Boolean whether cell is disabled or not
     */
    disabled: PropTypes.bool,
};

CheckCell.defaultProps = {
    checked: false,
};

export { StyledTableCell };
export default CheckCell;
