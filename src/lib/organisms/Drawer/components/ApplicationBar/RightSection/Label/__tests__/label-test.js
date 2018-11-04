/* eslint-disable no-undef */
import React from 'react';
import Label from '../Label';
import { shallow } from 'enzyme';

describe('Label', () => {
    it('should be defined', () => {
        expect(Label).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Label />)).toMatchSnapshot();
    });
});
