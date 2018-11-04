/* eslint-disable no-undef */
import React from 'react';
import SelectField, {StyledSelectField} from '../SelectField';
import {shallow} from 'enzyme';

const mock = jest.fn();
const mockSuggestions = [{value: 'Value', label: 'Label'}];

describe('SelectField', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(SelectField).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SelectField/>)).toMatchSnapshot();
    });
    it('should match the snapshot with options', () => {
        expect(shallow(<SelectField options={mockSuggestions}/>)).toMatchSnapshot();
    });
    it('should be of type StyledAutocomplete', () => {
        expect(shallow(<SelectField/>).type()).toBe(StyledSelectField);
    });
    it('should have default state', () => {
        expect(shallow(<SelectField/>).state()).toEqual(
            {
                isFocused: false,
                selected: '',
            }
        );
    });
    it('should not fire action on render', () => {
        shallow(<StyledSelectField handleChange={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
});
