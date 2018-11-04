/* eslint-disable no-undef */
import React from 'react';
import Input, {StyledInput} from '../Input';
import {shallow} from 'enzyme';

const mockChange = jest.fn();
const mockFocus = jest.fn();

describe('AutocompleteInput', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(Input).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Input/>)).toMatchSnapshot();
    });
    it('should match the snapshot with value', () => {
        expect(shallow(<Input value={'mock'} />)).toMatchSnapshot();
    });
    it('should be of type StyledInput', () => {
        expect(shallow(<Input/>).type()).toBe(StyledInput);
    });
    it('should not fire handleChange action on render', () => {
        shallow(<Input handleChange={mockChange}/>);
        expect(mockChange).not.toHaveBeenCalled();
    });
    it('should not fire handleFocus action on render', () => {
        shallow(<Input handleFocus={mockFocus}/>);
        expect(mockFocus).not.toHaveBeenCalled();
    });
    it('should fire handleFocus action on focus', () => {
        const wrapper = shallow(<Input handleFocus={mockFocus}/>);
        wrapper.simulate('focus');
        expect(mockFocus).toHaveBeenCalled();
    });
    it('should fire handleChange action on change', () => {
        const wrapper = shallow(<Input handleChange={mockChange}/>);
        wrapper.simulate('change');
        expect(mockChange).toHaveBeenCalled();
    });
});
