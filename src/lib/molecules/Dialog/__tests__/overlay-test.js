import React from 'react';
import Overlay from '../Overlay';
import { shallow } from 'enzyme';

const mockChildren = () => <h1>Mock</h1>;

describe('DialogOverlay', () => {
    it('should be defined', () => {
        expect(Overlay).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Overlay />)).toMatchSnapshot();
    });
    it('should match the snapshot with children', () => {
        expect(shallow(<Overlay>{ mockChildren() }</Overlay>)).toMatchSnapshot();
    });
});
