import { shallow } from 'enzyme/build';
import React from 'react';
import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<ThemeProvider />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ThemeProvider />)).toMatchSnapshot();
    });
});
