/* eslint-disable no-undef */
import React from 'react';
import NavigationBar from '../NavigationBar';
import { shallow } from 'enzyme';

describe('NavigationBar', () => {
    it('should be defined', () => {
        expect(NavigationBar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<NavigationBar />)).toMatchSnapshot();
    });
});
