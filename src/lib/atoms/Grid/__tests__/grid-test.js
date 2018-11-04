/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import Grid from '../Grid';

describe('Grid', () => {
	it('should be defined', () => {
		expect(shallow(<Grid/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Grid/>)).toMatchSnapshot();
	});
	it('should be grid', () => {
		expect(shallow(<Grid/>)).toHaveStyleRule('display', 'grid');
	});
	it('should be grid with 12 columns, each 1fr', () => {
		expect(shallow(<Grid/>)).toHaveStyleRule('grid-template-columns', 'repeat(12,1fr)');
	});
});
