// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledOption = styled.option`
 	position: absolute;
	padding: 20px 2%;
    width: 96%;
    display: block;
    margin: 0px;
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    transition: .5s all ease;
    &:hover {
    	background-color: ${ lightTheme.whiteBlue };
    };
`;

export default StyledOption;
