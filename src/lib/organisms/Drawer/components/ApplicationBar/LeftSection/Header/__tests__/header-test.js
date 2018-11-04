/* eslint-disable no-undef */
import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header', () => {
    it('should be defined', () => {
        expect(Header).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Header />)).toMatchSnapshot();
    });
});
