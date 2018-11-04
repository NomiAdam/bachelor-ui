import React from 'react';
import Stepper from '../Stepper';
import { shallow } from 'enzyme';

describe('Stepper', () => {
    it('should be defined', () => {
        expect(Stepper).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Stepper />)).toMatchSnapshot();
    });
});
