/* eslint-disable no-undef */
import React from 'react';
import ApplicationBar from '../ApplicationBar';
import { shallow } from 'enzyme';

describe('ApplicationBar', () => {
    it('should be defined', () => {
        expect(ApplicationBar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ApplicationBar />)).toMatchSnapshot();
    });
});
