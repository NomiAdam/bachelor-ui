import React from 'react';
import { shallow } from 'enzyme';
import SlideOutLeft from '../SlideOutLeft';

describe('SlideOutLeft', () => {
    it('should be defined', () => {
        expect(SlideOutLeft).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SlideOutLeft/>)).toMatchSnapshot();
    });
});
