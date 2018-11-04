/* eslint-disable no-undef */
import React from 'react';
import RadioButton, {StyledSpan} from '../RadioButton';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import { lightTheme } from '../../../constants/theme';

describe('RadioButton', () => {
    it('should be defined', () => {
        expect(shallow(<RadioButton/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<RadioButton/>)).toMatchSnapshot();
    });
    it('should match the snapshot when checked', () => {
        expect(shallow(<RadioButton checked/>)).toMatchSnapshot();
    });
    it('should match the snapshot with label', () => {
        expect(shallow(<RadioButton label={'Mock'}/>)).toMatchSnapshot();
    });
    it('should have display block when checked', () => {
        const wrapper = shallow(<RadioButton checked/>);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('display', 'block', {
            modifier: ':after',
        });
    });
    it('should have display none when not checked', () => {
        const wrapper = shallow(<RadioButton/>);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('display', 'none', {
            modifier: ':after',
        });
    });
    it('should have #1eb4ff background-color when checked', () => {
        const wrapper = shallow(<RadioButton checked/>);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('background-color', lightTheme.lightBlue);
    });
    it('should have #eee background-color when not checked', () => {
        const wrapper = shallow(<RadioButton/>);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('background-color', lightTheme.whiteBlue);
    });
});
