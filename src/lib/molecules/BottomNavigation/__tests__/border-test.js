import React from 'react';
import Border, { StyledBorder } from '../Border';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mockActive = 'test';
const mockSecondActive = 'invalid';
const mockItems = [
    {
        icon: null,
        label: 'mock',
        id: 'test',
    },
    {
        icon: null,
        label: 'mock',
        id: 'invalid',
    }
];

describe('Border', () => {
    it('should be defined', () => {
        expect(Border).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Border />)).toMatchSnapshot();
    });
    it('should be of type StyledBorder', () => {
        expect(shallow(<Border />).type()).toBe(StyledBorder);
    });
    it('should have left property set to zero 0% when first item is active', () => {
        const wrapper = shallow(<Border items={mockItems} active={mockActive} />);
        expect(wrapper.find(StyledBorder)).toHaveStyleRule('left', '0%');
    });
    it('should have left property set to zero 50% when second item is active', () => {
        const wrapper = shallow(<Border items={mockItems} active={mockSecondActive} />);
        expect(wrapper.find(StyledBorder)).toHaveStyleRule('left', '50%');
    });
    it('should have width set to 50% when there are two items', () => {
        const wrapper = shallow(<Border items={mockItems} active={mockActive} />);
        expect(wrapper.find(StyledBorder)).toHaveStyleRule('width', '50%');
    });
});
