import React from 'react';
import DialogActions from '../DialogActions';
import { shallow } from 'enzyme';

const mockChildren = () => <h1>Mock</h1>;

describe('DialogActions', () => {
    it('should be defined', () => {
        expect(DialogActions).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<DialogActions />)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(<DialogActions>{ mockChildren() }</DialogActions>)).toMatchSnapshot();
    });
});
