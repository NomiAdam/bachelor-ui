/* eslint-disable no-undef */
import React from 'react';
import Button, {StyledButton} from '../Button';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mock = jest.fn();

describe('Button', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should be defined', () => {
		expect(shallow(<Button />)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Button />)).toMatchSnapshot();
	});
	it('should not fire action without click', () => {
		shallow(<Button onClick={mock}/>);
		expect(mock).not.toHaveBeenCalled();
	});
	it('should fire the action on click', () => {
		const wrapper = shallow(<Button onClick={mock}/>);
		wrapper.simulate('click');
		expect(mock).toHaveBeenCalled();
	});
	it('should have white color on default', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find(StyledButton)).toHaveStyleRule('color', 'white');
	});
	it('should have defined color', () => {
		const mockColor = 'white';
		const wrapper = shallow(<Button color={mockColor}/>);
		expect(wrapper.find(StyledButton)).toHaveStyleRule('color', mockColor);
	});
	it('should have 35px height when not large', () => {
		const wrapper = shallow(<Button/>);
		expect(wrapper.find(StyledButton)).toHaveStyleRule('height','35px');
	});
	it('should have 50px height when large', () => {
		const wrapper = shallow(<Button large/>);
		expect(wrapper.find(StyledButton)).toHaveStyleRule('height','50px');
	});
});
