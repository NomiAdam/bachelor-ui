/* eslint-disable no-undef */
import React from 'react';
import ActionListLabel, { StyledLabelWrapper } from '../ActionListLabel';
import {shallow} from 'enzyme';
import 'jest-styled-components';

describe('ActionListLabel', () => {
    it('should be defined', () => {
        expect(ActionListLabel).toBeDefined();
    });
    it('should be match the snapshot', () => {
        expect(shallow(<ActionListLabel/>)).toMatchSnapshot();
    });
    it('should be of type StyledLabelWrapper', () => {
        expect(shallow(<ActionListLabel/>).type()).toBe(StyledLabelWrapper);
    });
    it('should be of type StyledLabelWrapper', () => {
        expect(shallow(<ActionListLabel/>).type()).toBe(StyledLabelWrapper);
    });
    it('should have initial cursor css when isAction is false', () => {
        const wrapper = shallow(<ActionListLabel/>);
        expect(wrapper.find(StyledLabelWrapper)).toHaveStyleRule('cursor','initial');
    });
    it('should have pointer cursor css when isAction is true', () => {
        const wrapper = shallow(<ActionListLabel isAction/>);
        expect(wrapper.find(StyledLabelWrapper)).toHaveStyleRule('cursor','pointer');
    });
});
