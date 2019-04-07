/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import NativeSelectField, {StyledLabel} from '../NativeSelectField';
import {Option,Select} from '../../Input/index'

const mockOptions = [
    {value: 'val',text: 'text'},
    {value: 'val2',text: 'text2'}
];

describe('NativeSelectField', () => {
	it('should be defined', () => {
		expect(shallow(<NativeSelectField/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<NativeSelectField/>)).toMatchSnapshot();
	});
	it('should be of type styled label', () => {
		expect(shallow(<NativeSelectField/>).type()).toBe(StyledLabel);
	});
	it('should have only one option when fields prop is empty', () => {
		const wrapper = shallow(<NativeSelectField/>);
		expect(wrapper.find(Option).length).toBe(0);
	});
	it('should have only three options when fields prop is not empty', () => {
		const wrapper = shallow(<NativeSelectField options={mockOptions}/>);
		expect(wrapper.find(Option).length).toBe(2);
	});
	it('it should not fire the mock function without change change', () => {
		const mock = jest.fn();
		shallow(<NativeSelectField onChange={mock}/>);
		expect(mock).not.toHaveBeenCalled();
	});
	it('it should fire the mock function on change', () => {
		const mock = jest.fn();
		const wrapper = shallow(<NativeSelectField onChange={mock}/>);
		wrapper.find(Select).simulate('change');
		expect(mock).toHaveBeenCalled();
	});
});
