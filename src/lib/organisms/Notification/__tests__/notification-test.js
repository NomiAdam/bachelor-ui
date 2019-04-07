/* eslint-disable no-undef */
import React from 'react';
import Notification, { StyledWrapper, StyledAlert, StyledCheck, StyledInfo, StyledWarning } from '../Notification';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { lightTheme } from '../../../constants/theme';

const mock = jest.fn();

describe('Notification', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<Notification />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Notification />)).toMatchSnapshot();
    });
    it('should not fire action without click', () => {
        shallow(<Notification onClick={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
    it('should have default color', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.find(StyledWrapper)).toHaveStyleRule('background-color', lightTheme.lightBlue);
    });
    it('should have StyledInfo icon as default', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.find(StyledInfo).length).toBe(1);
    });
    it('should have StyledWarning icon', () => {
        const wrapper = shallow(<Notification variant={'warning'}/>);
        expect(wrapper.find(StyledWarning).length).toBe(1);
    });
    it('should have StyledAlert icon when error', () => {
        const wrapper = shallow(<Notification variant={'error'} />);
        expect(wrapper.find(StyledAlert).length).toBe(1);
    });
    it('should have StyledCheck icon when not error', () => {
        const wrapper = shallow(<Notification variant={'success'} />);
        expect(wrapper.find(StyledCheck).length).toBe(1);
    });
});
