/* eslint-disable no-undef */
import React from 'react';
import RightSection from '../RightSection';
import { shallow } from 'enzyme';

describe('RightSection', () => {
    it('should be defined', () => {
        expect(RightSection).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<RightSection />)).toMatchSnapshot();
    });
});
