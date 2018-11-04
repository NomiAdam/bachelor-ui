/* eslint-disable no-undef */
import React from 'react';
import Overlay, {StyledWrapper} from '../Overlay';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Overlay', () => {
    it('should be defined', () => {
        expect(Overlay).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<Overlay />)).toMatchSnapshot();
    });
    it('should be of type StyledOverlayWrapper', () => {
        expect(shallow(<Overlay/>).type()).toBe(StyledWrapper);
    });
    it('should have display `none` when isOpen is set to false', () => {
        const wrapper = shallow(<Overlay />);
        expect(wrapper.find(StyledWrapper)).toHaveStyleRule('display', 'none');
    });
    it('should have display `flex` when isOpen is set to false', () => {
        const wrapper = shallow(<Overlay isOpen />);
        expect(wrapper.find(StyledWrapper)).toHaveStyleRule('display', 'flex');
    });
});
