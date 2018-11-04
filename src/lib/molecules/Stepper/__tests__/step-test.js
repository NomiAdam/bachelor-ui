import React from 'react';
import Step from '../Step';
import { shallow } from 'enzyme';

describe('Step', () => {
    it('should be defined', () => {
        expect(Step).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Step />)).toMatchSnapshot();
    });
    it('should match the snapshot when active', () => {
        expect(shallow(<Step isActive />)).toMatchSnapshot();
    });
});
