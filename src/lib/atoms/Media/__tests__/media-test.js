/* eslint-disable no-undef */
import React from 'react';
import Media from '../Media';
import { shallow } from 'enzyme';

describe('Media', () => {
    it('should be defined', () => {
        expect(Media).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Media />)).toMatchSnapshot();
    });
    it('should match the snapshot with different component', () => {
        expect(shallow(<Media component={'video'} />)).toMatchSnapshot();
    });
});
