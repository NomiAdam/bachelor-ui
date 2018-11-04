/* eslint-disable no-undef */
import React from 'react';
import RoundButton, {StyledButton} from '../RoundButton';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { basicTheme } from '../../../constants/theme';

const mock = jest.fn();

describe('RoundButton', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(shallow(<RoundButton />)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<RoundButton />)).toMatchSnapshot();
    });
    it('should match the snapshot with icon', () => {
        expect(shallow(<RoundButton icon={<p>Mock</p>} />)).toMatchSnapshot();
    });
    it('should not fire action without click', () => {
        shallow(<RoundButton onClick={mock}/>);
        expect(mock).not.toHaveBeenCalled();
    });
    it('should fire the action on click', () => {
        const wrapper = shallow(<RoundButton onClick={mock}/>);
        wrapper.simulate('click');
        expect(mock).toHaveBeenCalled();
    });
    it('should have default color by default', () => {
        const wrapper = shallow(<RoundButton />);
        expect(wrapper.find(StyledButton)).toHaveStyleRule('background-color', basicTheme.green);
    });
    it('should have red color when primary', () => {
        const wrapper = shallow(<RoundButton color={'red'}/>);
        expect(wrapper.find(StyledButton)).toHaveStyleRule('background-color', 'red');
    });
    it('should match the snapshot with icon', () => {
        expect(shallow(<RoundButton icon={<p>+</p>}/>)).toMatchSnapshot();
    });
});
