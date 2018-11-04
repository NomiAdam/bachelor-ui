/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import CheckTable from '../CheckTable';
import Paper from '../../../atoms/Paper/index';

const mockChange = jest.fn();

const mockDayHour = [
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
];

const mockBody = {
    kurt1: {
        label: 'Kurt 1',
        value: [],
    },
    kurt2: {
        label: 'Kurt 2',
        value: [],
    }
};

describe('CheckTable', () => {
    it('should be defined', () => {
        expect(CheckTable).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<CheckTable />)).toMatchSnapshot();
    });
    it('should match the snapshot with data', () => {
        expect(shallow(<CheckTable timeSheet={mockDayHour} selected={mockBody} />)).toMatchSnapshot();
    });
    it('should be a of type Paper', () => {
        expect(shallow(<CheckTable />).type()).toBe(Paper);
    });
    it('should not trigger action during render', () => {
        shallow(<CheckTable handleChange={mockChange} />);
        expect(mockChange).not.toHaveBeenCalled();
    });
});
