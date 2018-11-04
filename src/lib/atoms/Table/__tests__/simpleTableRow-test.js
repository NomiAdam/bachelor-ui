/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import SimpleTableRow, { StyledTableRow } from '../SimpleTableRow';

const mockData = ['val1', 'val2'];
const mockLabel = 'mock';

describe('SimpleTableRow', () => {
    it('should be defined', () => {
        expect(shallow(<SimpleTableRow />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SimpleTableRow />)).toMatchSnapshot();
    });
    it('should match the snapshot with mock data', () => {
        expect(shallow(<SimpleTableRow simpleTableRowData={mockData} />)).toMatchSnapshot();
    });
    it('should match the snapshot when labeled', () => {
        expect(shallow(<SimpleTableRow labeled label={mockLabel} />)).toMatchSnapshot();
    });
    it('should be StyledTableRow', () => {
        expect(shallow(<SimpleTableRow />).type()).toBe(StyledTableRow);
    });
});
