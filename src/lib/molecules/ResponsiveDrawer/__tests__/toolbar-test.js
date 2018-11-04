import React from 'react';
import Toolbar, { StyledToolbar } from '../Toolbar';
import { shallow } from 'enzyme';

describe('Toolbar', () => {
    it('should be defined', () => {
        expect(Toolbar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Toolbar />)).toMatchSnapshot();
    });
    it('should be of type StyledToolbar', () => {
        expect(shallow(<Toolbar/>).type()).toBe(StyledToolbar);
    });
});
