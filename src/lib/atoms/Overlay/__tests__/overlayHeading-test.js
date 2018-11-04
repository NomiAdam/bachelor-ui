/* eslint-disable no-undef */
import React from 'react';
import OverlayHeading, {StyledWrapper} from '../OverlayHeading';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('OverlayHeading', () => {
    it('should be defined', () => {
        expect(OverlayHeading).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<OverlayHeading />)).toMatchSnapshot();
    });
    it('should be of type StyledOverlayHeadingWrapper', () => {
        expect(shallow(<OverlayHeading/>).type()).toBe(StyledWrapper);
    });
});
