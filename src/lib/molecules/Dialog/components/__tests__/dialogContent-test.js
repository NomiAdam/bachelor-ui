import React from 'react';
import DialogContent from '../DialogContent';
import { shallow } from 'enzyme';

const mockChildren = () => <h1>Mock</h1>;

describe('DialogContent', () => {
    it('should be defined', () => {
        expect(DialogContent).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<DialogContent />)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(<DialogContent>{ mockChildren() }</DialogContent>)).toMatchSnapshot();
    });
});
