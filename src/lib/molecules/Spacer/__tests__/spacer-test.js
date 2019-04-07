/* eslint-disable no-undef */
import React from 'react';
import Spacer, {StyledSpacerWrapper} from '../Spacer';
import { shallow } from 'enzyme';

describe('Spacer', () => {
    it('should be defined', () => {
        expect(shallow(<Spacer />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Spacer />)).toMatchSnapshot();
    });
    it('should be of type StyledSpacerWrapper', () => {
        expect(shallow(<Spacer/>).type()).toBe(StyledSpacerWrapper);
    });
});
