/* eslint-disable no-undef */
import React from 'react';
import {shallow,mount} from 'enzyme';
import 'jest-styled-components';
import GridCol from '../GridCol';

describe('GridCol', () => {
	it('should be defined', () => {
		expect(shallow(<GridCol/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<GridCol/>)).toMatchSnapshot();
	});
	it('should have the right styling', () => {
		expect(shallow(<GridCol colXS={6}/>)).toHaveStyleRule('grid-column-end', 'span 6');
	});
	it('should have the right styling', () => {
		expect(shallow(<GridCol colMD={4}/>)).toHaveStyleRule('grid-column-end', 'span 4');
	});
	it('should have the right styling', () => {
		expect(shallow(<GridCol colLG={2}/>)).toHaveStyleRule('grid-column-end', 'span 2');
	});
	it('should span the whole grid when no prop is defined', () => {
		expect(shallow(<GridCol/>)).toHaveStyleRule('grid-column-end', 'span 12');
	});
});
