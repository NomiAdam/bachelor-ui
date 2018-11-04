import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../TableRow';
import {TableCell} from '../../../../atoms/Table/index';
import {StyledTableRow} from '../../../../atoms/Table/SimpleTableRow';

const mockSelected = [0, 1];

const mockDayHours = [
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
];

const mockLabel = 'label';

describe('CheckTableRow', () => {
    it('should be defined', () => {
        expect(shallow(<TableRow label={mockLabel}/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TableRow label={mockLabel}/>)).toMatchSnapshot();
    });
    it('should match the snapshot with values', () => {
        expect(shallow(<TableRow dayHours={mockDayHours} label={mockLabel}
                                 selected={mockSelected}/>)).toMatchSnapshot();
    });
    it('should be of type StyledTableRow', () => {
        expect(shallow(<TableRow label={mockLabel}/>).type()).toBe(StyledTableRow);
    });
    it('should have render when props are not the same TableCell with length of mockDayHours + 1 as label', () => {
        const wrapper = shallow(<TableRow label={mockLabel} dayHours={mockDayHours}/>);
        wrapper.setProps({ selected: mockSelected });
        expect(wrapper.find(TableCell).length).toBe(mockDayHours.length + 1);
    });
});
