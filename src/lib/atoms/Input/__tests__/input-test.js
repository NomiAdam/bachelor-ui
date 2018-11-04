/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Input from '../Input';

const mock = jest.fn();

describe('Input', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should be defined', () => {
		expect(shallow(<Input/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Input/>)).toMatchSnapshot();
	});
	it('should not trigger on change', () => {
		shallow(<Input onChange={mock}/>);
		expect(mock).not.toHaveBeenCalled();
	});
	it('should trigger onChange event on change', () => {
		const wrapper = shallow(<Input onChange={mock}/>);
		wrapper.simulate('change');
		expect(mock).toHaveBeenCalled();
	});
});