import React from 'react';
import { shallow } from 'enzyme';
import BounceOut from '../BounceOut';

describe('BounceOut', () => {
    it('should be defined', () => {
        expect(BounceOut).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<BounceOut/>)).toMatchSnapshot();
    });
});
