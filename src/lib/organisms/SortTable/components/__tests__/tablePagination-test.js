/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TablePagination, { StyledDiv } from '../TablePagination';

const mock = jest.fn();

describe('TablePagination', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<TablePagination/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TablePagination/>)).toMatchSnapshot();
    });
    it('should be of type StyledDiv', () => {
        expect(shallow(<TablePagination/>).type()).toBe(StyledDiv);
    });
    it('should not trigger any mock', () => {
        shallow(<TablePagination
            handleChangeRowsPerPage={mock}
            handleChangePage={mock}
        />);
        expect(mock).not.toHaveBeenCalled();
    });
});
