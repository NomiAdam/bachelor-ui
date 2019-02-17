/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

const mockName = 'add';
const anotherMockName = 'cog';

describe('Icon', () => {
    it('should be defined', () => {
        expect(Icon).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Icon name={ mockName } />)).toMatchSnapshot();
    });
    it('should match the snapshot when name is different', () => {
        expect(shallow(<Icon name={ anotherMockName } />)).toMatchSnapshot();
    });
});
