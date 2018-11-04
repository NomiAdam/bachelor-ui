/* eslint-disable no-undef */
import React from 'react';
import Paper, {StyledPaperWrapper} from '../Paper';
import { shallow } from 'enzyme';

describe('Paper', () => {
	it('should be defined', () => {
		expect(shallow(<Paper />)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Paper />)).toMatchSnapshot();
	});
	it('should be of type StyledPaperWrapper', () => {
		expect(shallow(<Paper/>).type()).toBe(StyledPaperWrapper);
	});
});
