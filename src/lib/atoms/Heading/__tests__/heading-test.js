/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../Heading';

const mockLabel = 'label';

describe('Heading', () => {
    it('should be defined', () => {
        expect(Heading).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Heading />)).toMatchSnapshot();
    });
    it('should be of type h2 by default', () => {
        expect(shallow(<Heading />).type()).toBe('h2');
    });
    it('should be of type defined', () => {
        expect(shallow(<Heading component="h5" />).type()).toBe('h5');
    });
    it('should have matching label value inside heading', () => {
        expect(shallow(<Heading label={ mockLabel } />).find('h2').text()).toBe(mockLabel);
    });
});
