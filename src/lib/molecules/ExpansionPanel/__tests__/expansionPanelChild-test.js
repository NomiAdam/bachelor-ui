/* eslint-disable no-undef */
import React from 'react';
import ExpansionPanelChild, { StyledWrapper, StyledIcon, StyledBody } from '../ExpansionPanelChild';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mock = jest.fn();

describe('ExpansionPanelChild', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(ExpansionPanelChild).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ExpansionPanelChild />)).toMatchSnapshot();
    });
    it('should be of type StyledWrapper', () => {
        expect(shallow(<ExpansionPanelChild/>).type()).toBe(StyledWrapper);
    });
    it('should not fire action without click', () => {
        shallow(<ExpansionPanelChild handleClick={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
    it('should fire the action on click', () => {
        const wrapper = shallow(<ExpansionPanelChild handleClick={mock}/>);
        wrapper.find(StyledIcon).simulate('click');
        expect(mock).toHaveBeenCalled();
    });
    describe('StyledBody', () => {
        it('should have 0 padding on StyledBody by default', () => {
            const wrapper = shallow(<ExpansionPanelChild />);
            expect(wrapper.find(StyledBody)).toHaveStyleRule('padding', '0');
        });
        it('should have 10px padding on StyledBody when open', () => {
            const wrapper = shallow(<ExpansionPanelChild open />);
            expect(wrapper.find(StyledBody)).toHaveStyleRule('padding', '10px');
        });
        it('should have 0 max-height on StyledBody by default', () => {
            const wrapper = shallow(<ExpansionPanelChild />);
            expect(wrapper.find(StyledBody)).toHaveStyleRule('max-height', '0');
        });
        it('should have 500px max-height on StyledBody when open', () => {
            const wrapper = shallow(<ExpansionPanelChild open />);
            expect(wrapper.find(StyledBody)).toHaveStyleRule('max-height', '500px');
        });
    });
});
