import React from 'react';
import { shallow } from 'enzyme';
import FadeIn from '../FadeIn';

describe('FadeIn', () => {
    it('should be defined', () => {
        expect(FadeIn).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<FadeIn/>)).toMatchSnapshot();
    });
});
