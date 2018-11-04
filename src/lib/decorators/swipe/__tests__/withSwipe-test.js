/* eslint-disable no-undef */
import React from 'react';
import withSwipe from '../withSwipe';
import { shallow } from 'enzyme';

const mockComponent = <div/>;

const Swipe = withSwipe(mockComponent);

describe('withSwipe', () => {
    it('should be defined', () => {
        expect(withSwipe).toBeDefined();
    });
    it('should be defined with component', () => {
        expect(Swipe).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Swipe />)).toMatchSnapshot();
    });
    it('should have default state defined', () => {
        expect(shallow(<Swipe />).state()).toEqual({
            left: 0,
            originalOffset: 0,
            velocity: 0,
            timeOfLastDragEvent: 0,
            touchStartX: 0,
            prevTouchX: 0,
            beingTouched: false,
            isOpen: false,
            touchStartY: 0,
        });
    });
});
