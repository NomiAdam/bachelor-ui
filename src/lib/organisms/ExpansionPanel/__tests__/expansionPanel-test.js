/* eslint-disable no-undef */
import React from 'react';
import ExpansionPanel, {StyledExpansionPanelWrapper} from '../ExpansionPanel';
import {shallow} from 'enzyme';

const mockChildren = [
    {
        heading: 'heading',
        body: 'body',
    },
    {
        heading: 'mock',
        body: 'mock',
    }
];

describe('ExpansionPanel', () => {
    it('should be defined', () => {
        expect(ExpansionPanel).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ExpansionPanel/>)).toMatchSnapshot();
    });
    it('should match the snapshot with items', () => {
        expect(shallow(<ExpansionPanel items={mockChildren} />)).toMatchSnapshot();
    });
    it('should be of type StyledExpansionPanelWrapper', () => {
        expect(shallow(<ExpansionPanel/>).type()).toBe(StyledExpansionPanelWrapper);
    });
    it('should have default state', () => {
        expect(shallow(<ExpansionPanel/>).state()).toEqual({
            opened: [],
        });
    });
});
