/* eslint-disable no-undef */
import React from 'react';
import FieldLabel, {StyledSpan} from '../FieldLabel';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { basicTheme } from '../../../constants/theme';

describe('FieldLabel', () => {
    it('should be defined', () => {
        expect(FieldLabel).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<FieldLabel />)).toMatchSnapshot();
    });
    it('should be of type StyledSpan', () => {
        expect(shallow(<FieldLabel />).type()).toBe(StyledSpan);
    });
    it('should have red color when error', () => {
        const wrapper = shallow(<FieldLabel error />);
        expect(wrapper.find(StyledSpan)).toHaveStyleRule('color', basicTheme.red);
    });
});
