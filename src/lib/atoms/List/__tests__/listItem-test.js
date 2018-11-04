/* eslint-disable no-undef */
import React from 'react';
import ListItem from '../ListItem';
import { shallow } from 'enzyme';

describe('ListItem', () => {

	it('should be defined', () => {
		expect(shallow(<ListItem />)).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(shallow(<ListItem />)).toMatchSnapshot();
	});

});