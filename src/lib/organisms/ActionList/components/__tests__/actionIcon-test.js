/* eslint-disable no-undef */
import React from 'react';
import ActionIcon, { StyledIconWrapper } from '../ActionIcon';
import {shallow} from 'enzyme';

describe('ActionIcon', () => {
    it('should be defined', () => {
        expect(ActionIcon).toBeDefined();
    });
    it('should be match the snapshot', () => {
        expect(shallow(<ActionIcon/>)).toMatchSnapshot();
    });
    it('should be match the snapshot when isIconActive', () => {
        expect(shallow(<ActionIcon isIconActive/>)).toMatchSnapshot();
    });
    it('should be of type StyledDateWrapper', () => {
        expect(shallow(<ActionIcon/>).type()).toBe(StyledIconWrapper);
    })
});
