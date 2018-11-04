/* eslint-disable no-undef */
import React from 'react';
import Loader, {StyledLoader} from '../Loader';
import { shallow } from 'enzyme';

describe('Loader', () => {
    it('should be defined', () => {
        expect(shallow(<Loader />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Loader />)).toMatchSnapshot();
    });
    it('should be of type StyledLoader', () => {
        expect(shallow(<Loader/>).type()).toBe(StyledLoader);
    });
});
