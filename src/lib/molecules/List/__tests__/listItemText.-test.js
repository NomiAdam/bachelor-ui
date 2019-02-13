/* eslint-disable no-undef */
import React from 'react';
import ListItemText, {StyledListItemTextDiv, StyledListItemText} from '../ListItemText';
import {shallow} from 'enzyme';
import 'jest-styled-components';

describe('ListItemText', () => {

	it('should be defined', () => {
		expect(shallow(<ListItemText/>)).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(shallow(<ListItemText/>)).toMatchSnapshot();
	});

	it('should be of correct type', () => {
		expect(shallow(<ListItemText/>).type()).toBe(StyledListItemTextDiv);
	});

	it('should have text centered to left by default', () => {
		const wrapper = shallow(<ListItemText/>);
		expect(wrapper.find(StyledListItemTextDiv)).toHaveStyleRule('text-align', 'left');
	});

	it('should have text aligned by value', () => {
		const test = 'center';
		const wrapper = shallow(<ListItemText align={test}/>);
		expect(wrapper.find(StyledListItemTextDiv)).toHaveStyleRule('text-align', test);
	});

});