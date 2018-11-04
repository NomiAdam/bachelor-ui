/* eslint-disable no-undef */
import React from 'react';
import Autocomplete, {StyledAutocomplete} from '../Autocomplete';
import {shallow} from 'enzyme';

const mock = jest.fn();
const mockSuggestions = [{value: 'Value', label: 'Label'}];

describe('Autocomplete', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(Autocomplete).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Autocomplete/>)).toMatchSnapshot();
    });
    it('should match the snapshot with suggestions', () => {
        expect(shallow(<Autocomplete suggestions={mockSuggestions}/>)).toMatchSnapshot();
    });
    it('should be of type StyledAutocomplete', () => {
        expect(shallow(<Autocomplete/>).type()).toBe(StyledAutocomplete);
    });
    it('should have default state', () => {
        expect(shallow(<Autocomplete />).state()).toEqual(
            {
                isFocused: false,
                value: '',
                selected: '',
                filteredSuggestions: [],
            }
        );
    });
    it('should not fire action on render', () => {
        shallow(<Autocomplete handleChange={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
});
