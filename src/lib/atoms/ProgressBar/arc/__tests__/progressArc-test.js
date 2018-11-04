/* eslint-disable no-undef */
import React from 'react';
import ProgressArc from '../ProgressArc';
import {shallow} from 'enzyme';

describe('ProgressArc', () => {
    it('should be defined', () => {
        expect(ProgressArc).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ProgressArc/>)).toMatchSnapshot();
    });
});