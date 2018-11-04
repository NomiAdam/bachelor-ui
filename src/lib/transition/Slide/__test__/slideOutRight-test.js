import React from 'react';
import { shallow } from 'enzyme';
import SlideOutRight from '../SlideOutRight';

describe('SlideOutRight', () => {
    it('should be defined', () => {
        expect(SlideOutRight).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SlideOutRight/>)).toMatchSnapshot();
    });
});
