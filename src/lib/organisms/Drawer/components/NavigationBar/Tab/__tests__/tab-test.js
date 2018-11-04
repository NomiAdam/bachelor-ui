/* eslint-disable no-undef */
import React from 'react';
import Tab from '../Tab';
import { shallow } from 'enzyme';

describe('Tab', () => {
    it('should be defined', () => {
        expect(Tab).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Tab />)).toMatchSnapshot();
    });
});
