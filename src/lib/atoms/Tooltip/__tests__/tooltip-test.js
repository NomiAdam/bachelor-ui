/* eslint-disable no-undef */
import React from 'react';
import Tooltip, {StyledTooltip} from '../Tooltip';
import {shallow} from 'enzyme';
import 'jest-styled-components';

describe('Tooltip', () => {
    it('should be defined', () => {
        expect(Tooltip).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Tooltip/>)).toMatchSnapshot();
    });
    it('should be of type StyledTooltip', () => {
        expect(shallow(<Tooltip />).type()).toBe(StyledTooltip);
    });
});
