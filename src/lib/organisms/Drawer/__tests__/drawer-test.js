/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import Drawer, {StyledDrawer} from '../Drawer';

describe('Drawer', () => {
    it('should be defined', () => {
        expect(Drawer).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Drawer/>)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(
            <Drawer>
                <p>mock</p>
            </Drawer>
        )).toMatchSnapshot();
    });
    it('should be a StyledDrawer', () => {
        expect(shallow(<Drawer/>).type()).toBe(StyledDrawer);
    });
});