/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableHeading from '../TableHeading';

const mockDayHours = [
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
];

describe('CheckTableHeading', () => {
    it('should be defined', () => {
        expect(shallow(<TableHeading/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TableHeading/>)).toMatchSnapshot();
    });
    it('should match the snapshot with values', () => {
        expect(shallow(<TableHeading dayHours={mockDayHours} />)).toMatchSnapshot();
    });
    it('should be of type thead', () => {
        expect(shallow(<TableHeading/>).type()).toBe('thead');
    });
});
