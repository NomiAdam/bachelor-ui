import React from 'react';
import { shallow } from 'enzyme';
import FadeOut from '../FadeOut';

describe('FadeOut', () => {
    it('should be defined', () => {
        expect(FadeOut).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<FadeOut/>)).toMatchSnapshot();
    });
});
