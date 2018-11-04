/* eslint-disable no-undef */
import React from 'react';
import LeftSection from '../LeftSection';
import { shallow } from 'enzyme';

describe('LeftSection', () => {
    it('should be defined', () => {
        expect(LeftSection).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<LeftSection />)).toMatchSnapshot();
    });
});
