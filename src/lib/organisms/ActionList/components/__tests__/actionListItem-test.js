/* eslint-disable no-undef */
import React from 'react';
import ActionListItem, { StyledListItem } from '../ActionListItem';
import {shallow} from 'enzyme';

describe('ActionListItem', () => {
    it('should be defined', () => {
        expect(ActionListItem).toBeDefined();
    });
    it('should be match the snapshot', () => {
        expect(shallow(<ActionListItem/>)).toMatchSnapshot();
    });
    it('should be of type StyledListItem', () => {
        expect(shallow(<ActionListItem/>).type()).toBe(StyledListItem);
    })
});
