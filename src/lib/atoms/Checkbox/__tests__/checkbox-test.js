/* eslint-disable no-undef */
import React from 'react';
import Checkbox from '../Checkbox';
import { shallow } from 'enzyme';

describe('Checkbox', () => {
    it('should be defined', () => {
        expect(shallow(<Checkbox />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Checkbox />)).toMatchSnapshot();
    });
    it('should match the snapshot when checked', () => {
        expect(shallow(<Checkbox checked />)).toMatchSnapshot();
    });
    it('should match the snapshot with label', () => {
        expect(shallow(<Checkbox label={'Mock'} />)).toMatchSnapshot();
    });
});
