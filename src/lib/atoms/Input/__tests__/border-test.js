/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Border from '../Border';
import 'jest-styled-components';
import { basicTheme, lightTheme } from '../../../constants/theme';

describe('Border', () => {
	it('should be defined', () => {
		expect(shallow(<Border/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Border/>)).toMatchSnapshot();
	});
	it('should have blue color, when no background is defined', () => {
		expect(shallow(<Border/>)).toHaveStyleRule('background', lightTheme.lightBlue);
	});
    it('should have red background when error', () => {
        expect(shallow(<Border error/>)).toHaveStyleRule('background', basicTheme.red);
    });
	it('should have matching background', () => {
		const background = 'pink';
		expect(shallow(<Border background={background}/>)).toHaveStyleRule('background', background);
	});
});
