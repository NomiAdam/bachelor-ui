import React from 'react';
import Border, { StyledBorder } from '../Border';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Border', () => {
    it('should be defined', () => {
        expect(Border).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Border />)).toMatchSnapshot();
    });
    it('should be of type StyledBorder', () => {
        expect(shallow(<Border />).type()).toBe(StyledBorder);
    });
});
