import React from 'react';
import { shallow } from 'enzyme';
import SlideInRight from '../SlideInRight';

describe('SlideInRight', () => {
    it('should be defined', () => {
        expect(SlideInRight).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SlideInRight/>)).toMatchSnapshot();
    });
});
