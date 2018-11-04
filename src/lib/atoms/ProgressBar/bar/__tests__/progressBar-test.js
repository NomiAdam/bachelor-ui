/* eslint-disable no-undef */
import React from 'react';
import ProgressBar, {StyledContainer, StyledProgress} from '../ProgressBar';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import { basicTheme } from '../../../../constants/theme';

describe('ProgressBar', () => {
    it('should be defined', () => {
        expect(ProgressBar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ProgressBar/>)).toMatchSnapshot();
    });
    it('should be of type StyledContainer', () => {
        expect(shallow(<ProgressBar/>).type()).toBe(StyledContainer);
    });
    it('should have default background color of #ff9e2c for chrome', () => {
        const wrapper = shallow(<ProgressBar />);
        expect(wrapper.find(StyledProgress)).toHaveStyleRule('background', basicTheme.orange, {
            modifier: '::-webkit-progress-value',
        });
    });
    it('should have default background color of #ff9e2c for mozilla', () => {
        const wrapper = shallow(<ProgressBar />);
        expect(wrapper.find(StyledProgress)).toHaveStyleRule('background', basicTheme.orange, {
            modifier: '::-moz-progress-bar',
        });
    });
    it('should have background defined as prop for chrome', () => {
        const wrapper = shallow(<ProgressBar background={'red'} />);
        expect(wrapper.find(StyledProgress)).toHaveStyleRule('background', 'red', {
            modifier: '::-webkit-progress-value',
        });
    });
    it('should have background defined as prop for mozilla', () => {
        const wrapper = shallow(<ProgressBar background={'blue'}/>);
        expect(wrapper.find(StyledProgress)).toHaveStyleRule('background', 'blue', {
            modifier: '::-moz-progress-bar',
        });
    });
});
