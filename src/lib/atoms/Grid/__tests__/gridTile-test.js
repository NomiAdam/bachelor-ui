/* eslint-disable no-undef */
import React from 'react';
import GridTile from '../GridTile';
import GridCol from '../GridCol';
import { shallow } from 'enzyme';

describe('Checkbox', () => {
    it('should be defined', () => {
        expect(GridTile).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<GridTile />)).toMatchSnapshot();
    });
    it('should match be of type GridCol', () => {
        expect(shallow(<GridTile />).type()).toBe(GridCol);
    });
});
