/* eslint-disable no-undef */
import React from 'react';
import NativeDatePicker from '../NativeDatePicker';
import { shallow } from 'enzyme';

const mock = jest.fn();

describe('NativeDatePicker', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<NativeDatePicker />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<NativeDatePicker />)).toMatchSnapshot();
    });
    it('should match the snapshot when labeled', () => {
        expect(shallow(<NativeDatePicker label={'Label'} />)).toMatchSnapshot();
    });
    it('should not fire action without click', () => {
        shallow(<NativeDatePicker onChange={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
});
