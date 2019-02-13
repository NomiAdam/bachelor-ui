/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import RadioButton, { StyledSpan } from '../RadioButton';
import 'jest-styled-components';

describe('RadioButton', () => {
    it('should be defined', () => {
        expect(shallow(<RadioButton />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<RadioButton />)).toMatchSnapshot();
    });
    it('should match the snapshot when checked', () => {
        expect(shallow(<RadioButton checked />)).toMatchSnapshot();
    });
    it('should match the snapshot with label', () => {
        expect(shallow(<RadioButton label="Mock" />)).toMatchSnapshot();
    });
    it('should have display block when checked', () => {
        const wrapper = shallow(<RadioButton checked />);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('display', 'block', {
            modifier: ':after',
        });
    });
    it('should have display none when not checked', () => {
        const wrapper = shallow(<RadioButton />);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('display', 'none', {
            modifier: ':after',
        });
    });
});
