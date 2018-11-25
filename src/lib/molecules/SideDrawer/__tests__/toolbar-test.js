import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../Toolbar';

describe('Toolbar', () => {
    it('should be defined', () => {
        expect(Toolbar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Toolbar />)).toMatchSnapshot();
    });
});
