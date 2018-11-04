import React from 'react';
import DialogWindow from '../DialogWindow';
import { shallow } from 'enzyme';

const mockChildren = () => <h1>Mock</h1>;

describe('DialogWindow', () => {
    it('should be defined', () => {
        expect(DialogWindow).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<DialogWindow renderActionChildren={mockChildren} />)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(<DialogWindow renderActionChildren={mockChildren} isOpen>{ mockChildren() }</DialogWindow>)).toMatchSnapshot();
    });
});
