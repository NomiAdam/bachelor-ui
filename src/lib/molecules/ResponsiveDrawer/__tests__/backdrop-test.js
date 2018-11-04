import React from 'react';
import Backdrop, { StyledBackdrop } from '../Backdrop';
import { shallow } from 'enzyme';

describe('Backdrop', () => {
    it('should be defined', () => {
        expect(Backdrop).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Backdrop />)).toMatchSnapshot();
    });
    it('should be of type div', () => {
        expect(shallow(<Backdrop/>).type()).toBe(StyledBackdrop);
    })
});
