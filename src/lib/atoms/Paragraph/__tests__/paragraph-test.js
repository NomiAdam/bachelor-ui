/* eslint-disable no-undef */
import React from 'react';
import Paragraph from '../Paragraph';
import { shallow } from 'enzyme';

describe('Paragraph', () => {
    it('should be defined', () => {
        expect(shallow(<Paragraph />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Paragraph />)).toMatchSnapshot();
    });
});
