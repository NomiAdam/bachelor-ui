/* eslint-disable no-undef */
import React from 'react';
import Divider, { StyledDivider } from '../Divider';
import { shallow } from 'enzyme';

describe('Checkbox', () => {
    it('should be defined', () => {
        expect(Divider).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Divider />)).toMatchSnapshot();
    });
    it('should match be of type StyledDivider', () => {
        expect(shallow(<Divider />).type()).toBe(StyledDivider);
    });
});
