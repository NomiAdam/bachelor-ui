/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableHeading from '../TableHeading';
import TableHeadingCell from '../TableHeadingCell';

const mockRequestSort = jest.fn();
const headings = [
    {
        label: 'key',
        id: 'key'
    },
    {
        label: 'another',
        id: 'another'
    },
    {
        label: 'label',
        id: 'id'
    }
];

describe('TableHeading', () => {
	it('should be defined', () => {
		expect(shallow(<TableHeading/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<TableHeading/>)).toMatchSnapshot();
	});
    it('should match the snapshot when editable', () => {
        expect(shallow(<TableHeading editable/>)).toMatchSnapshot();
    });
	it('should match the snapshot', () => {
		expect(shallow(<TableHeading headingData={headings}/>)).toMatchSnapshot();
	});
    it('should be of type thead', () => {
        expect(shallow(<TableHeading/>).type()).toBe('thead');
    });
    it('should be of type thead', () => {
        expect(shallow(<TableHeading/>).type()).toBe('thead');
    });
    it('should contain TableHeadingCell when editable', () => {
        const wrapper = shallow(<TableHeading editable/>);
        expect(wrapper.find(TableHeadingCell).length).toBe(1);
    });
    it('should contain exact number of TableCells when props has changed', () => {
        const wrapper = shallow(<TableHeading headingData={[]} onRequestSort={ mockRequestSort } />);
        wrapper.setProps({ headingData: headings });
        expect(wrapper.find(TableHeadingCell).length).toBe(headings.length);
    });
});
