/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../IconButton';

describe('IconButton', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<IconButton />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<IconButton />)).toMatchSnapshot();
    });
});
