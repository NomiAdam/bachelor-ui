import React from 'react';
import Dialog from '../Dialog';
import { shallow } from 'enzyme';

const mockChildren = () => <h1>Mock</h1>;

describe('Dialog', () => {
    it('should be defined', () => {
        expect(Dialog).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Dialog renderActionChildren={mockChildren} />)).toMatchSnapshot();
    });
    it('should match the snapshot when open', () => {
        expect(shallow(<Dialog renderActionChildren={mockChildren} isOpen />)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(<Dialog renderActionChildren={mockChildren} isOpen>{ mockChildren() }</Dialog>)).toMatchSnapshot();
    });
});
