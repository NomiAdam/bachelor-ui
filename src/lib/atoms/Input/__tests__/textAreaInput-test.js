/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TextAreaInput from '../TextAreaInput';
import 'jest-styled-components';

const mock = jest.fn();

describe('TextAreaInput', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should be defined', () => {
		expect(shallow(<TextAreaInput/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<TextAreaInput/>)).toMatchSnapshot();
	});
	it('should not trigger on change', () => {
		shallow(<TextAreaInput onChange={mock}/>);
		expect(mock).not.toHaveBeenCalled();
	});
	it('should trigger onChange event on change', () => {
		const wrapper = shallow(<TextAreaInput onChange={mock}/>);
		wrapper.simulate('change');
		expect(mock).toHaveBeenCalled();
	});
});
