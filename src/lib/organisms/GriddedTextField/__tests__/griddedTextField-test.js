/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import {GridCol} from '../../../atoms/Grid/index';
import GriddedTextField from '../GriddedTextField';
import TextField from '../../../molecules/TextField/index';

describe('GridCol', () => {
	it('should be defined', () => {
		expect(shallow(<GriddedTextField/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<GriddedTextField/>)).toMatchSnapshot();
	});
	it('should be a GridCol', () => {
		expect(shallow(<GriddedTextField/>).type()).toBe(GridCol);
	});
	it('should have the right colXS property', () => {
		expect(shallow(<GriddedTextField colXS={6}/>).props().colXS).toBe(6);
	});
	it('should have the right colMD property', () => {
		expect(shallow(<GriddedTextField colMD={6}/>).props().colMD).toBe(6);
	});
	it('should have the right colLG property', () => {
		expect(shallow(<GriddedTextField colLG={6}/>).props().colLG).toBe(6);
	});
	it('should have the matching gridCol property', () => {
		const wrapper = shallow(<GriddedTextField colXS={12}/>);
		expect(wrapper.find(GridCol).props().colXS).toBe(12);
	});
	it('should have the right styling of gridCol component', () => {
		const wrapper = shallow(<GriddedTextField colXS={3}/>);
		expect(wrapper.find(GridCol)).toHaveStyleRule('grid-column-end', 'span 3');
	});
	it('should have the matching gridCol property', () => {
		const wrapper = shallow(<GriddedTextField />);
		expect(wrapper.find(TextField)).toBeDefined();
	});
});
