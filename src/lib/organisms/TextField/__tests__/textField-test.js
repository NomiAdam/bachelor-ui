/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TextField, {StyledTextField,TextFieldWrapper} from '../TextField';
import Input, { TextAreaInput } from '../../../atoms/Input/index';

describe('TextField', () => {
	it('should be defined', () => {
		expect(TextField).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<TextField/>)).toMatchSnapshot();
	});
	it('should be of type styled div', () => {
		expect(shallow(<TextField/>).type()).toBe(TextFieldWrapper);
	});
    it('should have StyledTextField when multiLine is true', () => {
        const wrapper = shallow(<TextField />);
        expect(wrapper.find(StyledTextField).length).toBe(1);
    });
	it('should have TextArea when multiLine is true', () => {
		const wrapper = shallow(<TextField multiLine={true}/>);
		expect(wrapper.find(TextAreaInput).length).toBe(1);
	});
	it('should have Input when multiLine is true', () => {
		const wrapper = shallow(<TextField multiLine={false}/>);
		expect(wrapper.find(Input).length).toBe(1);
	});
});
