/* eslint-disable no-undef */
import React from 'react';
import Select, {StyledSelect} from '../Select';
import Option from '../Option';
import {shallow} from 'enzyme';
import 'jest-styled-components';

const mockClick = jest.fn();
const mockSuggestions = [{value: 'Value', label: 'Label'}];

describe('AutocompleteSelect', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(Select).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Select />)).toMatchSnapshot();
    });
    it('should match the snapshot with suggestions', () => {
        expect(shallow(<Select visible={true} suggestions={mockSuggestions} onClick={mockClick}/>)).toMatchSnapshot();
    });
    it('should be of type StyledSelect', () => {
        expect(shallow(<Select />).type()).toBe(StyledSelect);
    });
    it('should have matching length when visible of Option components', () => {
        const wrapper = shallow(<Select visible={true} suggestions={mockSuggestions} onClick={mockClick} />);
        expect( wrapper.find(Option).length).toBe(mockSuggestions.length);
    });
    it('should have length of zero when not visible', () => {
        const wrapper = shallow(<Select visible={false} suggestions={mockSuggestions} />);
        expect( wrapper.find(Option).length).toBe(0);
    });
    it('should not fire onClick action on render', () => {
        shallow(<Select onClick={mockClick}/>);
        expect(mockClick).not.toHaveBeenCalled();
    });
    it('should have border set to none when suggestions are empty Array', () => {
        expect(shallow(<Select suggestions={[]} />)).toHaveStyleRule('border','none');
    });
});

