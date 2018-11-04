/* eslint-disable no-undef */
import React from 'react';
import Option, {StyledOption} from '../Option';
import {shallow} from 'enzyme';

const mockClick = jest.fn();
const mockValue = 'value';

describe('AutocompleteOption', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(Option).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Option onClick={mockClick}/>)).toMatchSnapshot();
    });
    it('should match the snapshot with value', () => {
        expect(shallow(<Option value={'value'} onClick={mockClick}/>)).toMatchSnapshot();
    });
    it('should be of type StyledOption', () => {
        expect(shallow(<Option onClick={mockClick}/>).type()).toBe(StyledOption);
    });
    it('should not fire handleChange action with value render', () => {
        shallow(<Option value={mockValue} onClick={mockClick}/>);
        expect(mockClick).toHaveBeenCalledWith(mockValue);
    });
});
