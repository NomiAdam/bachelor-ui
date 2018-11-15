import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    inc, dec, lt, gte, and,
} from 'ramda';
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaAngleRight,
} from 'react-icons/lib/fa';
import styled from 'styled-components';
import { basicRowCount } from './constants/index';
import SelectField from '../../../molecules/SelectField/index';
import { darkTheme, basicTheme } from '../../../constants/theme';
import { Grid, GridCol } from '../../../atoms/Grid/index';

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    font-size: .9em;
    color: ${ darkTheme.black };
    margin: 0 10px;
`;

const Icon = styled.div`
    padding: 0 10px;
    font-size: 2.8rem;
    transition: all 1s ease;
    cursor: ${ ({ disabled }) => (disabled ? 'not-allowed' : 'pointer') };
    color: ${ ({ disabled }) => (disabled ? basicTheme.grey : darkTheme.black) };
`;

const StyledSpan = styled.span`
  padding: 0 20px;
`;

const StyledFaAngleDoubleLeft = Icon.withComponent(FaAngleDoubleLeft);
const StyledFaAngleDoubleRight = Icon.withComponent(FaAngleDoubleRight);
const StyledAngleLeft = Icon.withComponent(FaAngleLeft);
const StyledAngleRight = Icon.withComponent(FaAngleRight);

const greaterThanZero = lt(0);

class TablePagination extends PureComponent {
    componentDidUpdate() {
        const {
            totalRows, rowsPerPage, currentPage, handleChangePage,
        } = this.props;
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        if (currentPage > totalPages) {
            handleChangePage(totalPages);
        }
        if (totalPages > 0 && currentPage < 1) {
            handleChangePage(1);
        }
        if (totalPages === 0) {
            handleChangePage(0);
        }
    }

    render() {
        const {
            totalRows, currentPage, handleChangeRowsPerPage, handleChangePage, rowsPerPage,
        } = this.props;

        const totalPages = Math.ceil(totalRows / rowsPerPage);

        const handleChange = value => () => {
            const lessOrEqualToTotal = gte(totalPages);
            const validPageValue = and(greaterThanZero(value), lessOrEqualToTotal(value));
            if (validPageValue) handleChangePage(value);
        };
        const isFirst = currentPage === 1;
        const isLast = currentPage === totalPages;
        return (
            <StyledDiv>
                <Grid padding="10px">
                    <GridCol center colXS={ 6 } colMD={ 4 }>
                        <StyledSpan>Rows per page:</StyledSpan>
                    </GridCol>
                    <GridCol center colXS={ 6 } colMD={ 2 }>
                        <SelectField
                            width="80px"
                            options={ basicRowCount }
                            handleChange={ handleChangeRowsPerPage }
                            value={ rowsPerPage }
                        />
                    </GridCol>
                    <GridCol center colXS={ 12 } colMD={ 2 }>
                        <StyledSpan>
                            {currentPage}
                            {' '}
of
                            {' '}
                            {totalPages}
                        </StyledSpan>
                    </GridCol>
                    <GridCol center colXS={ 12 } colMD={ 4 }>
                        <StyledFaAngleDoubleLeft onClick={ handleChange(1) } disabled={ isFirst } />
                        <StyledAngleLeft onClick={ handleChange(dec(currentPage)) } disabled={ isFirst } />
                        <StyledAngleRight onClick={ handleChange(inc(currentPage)) } disabled={ isLast } />
                        <StyledFaAngleDoubleRight onClick={ handleChange(totalPages) } disabled={ isLast } />
                    </GridCol>
                </Grid>
            </StyledDiv>
        );
    }
}

TablePagination.propTypes = {
    /**
     * Number representing total number of table rows
     */
    totalRows: PropTypes.number,
    /**
     * Number of page we are currently at
     */
    currentPage: PropTypes.number,
    /**
     * Number of total available pages
     */
    totalPages: PropTypes.number,
    /**
     * Function to handle numberOfRows per page change
     */
    handleChangeRowsPerPage: PropTypes.func,
    /**
     * Function to handle page change, expecting (value) => (e) => {}
     */
    handleChangePage: PropTypes.func,
    /**
     * Number of rows per page
     */
    rowsPerPage: PropTypes.number,
};

export { StyledDiv };
export default TablePagination;
