/* eslint-disable no-undef */
import React from 'react';
import Container from '../Container';
import { shallow } from 'enzyme';

describe('Container', () => {
    it('should be defined', () => {
        expect(Container).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Container />)).toMatchSnapshot();
    });
});
