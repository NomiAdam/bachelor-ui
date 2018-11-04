/* eslint-disable no-undef */
import React from 'react';
import List from '../../../atoms/List/index';
import ActionList from '../ActionList';
import {shallow} from 'enzyme';

describe('ActionList', () => {
    it('should be defined', () => {
        expect(ActionList).toBeDefined();
    });
    it('should be match the snapshot', () => {
        expect(shallow(<ActionList/>)).toMatchSnapshot();
    });
    it('should be of type List', () => {
        expect(shallow(<ActionList/>).type()).toBe(List);
    })
});
