/* eslint-disable no-undef */
import React from 'react';
import ActionDate, { StyledDateWrapper } from '../ActionDate';
import {shallow} from 'enzyme';

describe('ActionDate', () => {
    it('should be defined', () => {
        expect(ActionDate).toBeDefined();
    });
    it('should be match the snapshot', () => {
        expect(shallow(<ActionDate/>)).toMatchSnapshot();
    });
    it('should be of type StyledDateWrapper', () => {
        expect(shallow(<ActionDate/>).type()).toBe(StyledDateWrapper);
    })
});
