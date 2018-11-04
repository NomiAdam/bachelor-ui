import React from 'react';
import { shallow } from 'enzyme';
import SlideInLeft from '../SlideInLeft';

describe('SlideInLeft', () => {
    it('should be defined', () => {
        expect(SlideInLeft).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SlideInLeft/>)).toMatchSnapshot();
    });
});
