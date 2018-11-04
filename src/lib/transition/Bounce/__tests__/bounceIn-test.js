import React from 'react';
import { shallow } from 'enzyme';
import BounceIn from '../BounceIn';

describe('BounceIn', () => {
    it('should be defined', () => {
        expect(BounceIn).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<BounceIn/>)).toMatchSnapshot();
    });
});
