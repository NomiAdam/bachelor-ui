/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import SearchField, { SearchFieldWrapper } from '../SearchField';

describe('SearchField', () => {
    it('should be defined', () => {
        expect(SearchField).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SearchField />)).toMatchSnapshot();
    });
    it('should be of type styled div', () => {
        expect(shallow(<SearchField/>).type()).toBe(SearchFieldWrapper);
    });
});
