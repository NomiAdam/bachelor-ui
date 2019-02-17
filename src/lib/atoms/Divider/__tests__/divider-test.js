/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Divider, { StyledDivider } from '../Divider';

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
