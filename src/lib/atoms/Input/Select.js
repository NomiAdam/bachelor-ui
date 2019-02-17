// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { basicTheme } from '../../constants/theme';

export const StyledSelect = styled.select`
	height: 30px;
  	min-width: 50px;
  	padding: .25em;
  	border: 0 solid transparent;
  	border-radius: 3px;
  	border-bottom: ${ ({ withBorder }) => (withBorder ? `2px solid ${ basicTheme.blue }` : '0px') };
  	overflow-y: scroll;
  	font-weight: bold;
  	letter-spacing: .15em;
  	${ ({ error }) => (error ? `
	    border: 1px solid ${ basicTheme.red };
	    border-top-left-radius: 5px;
        border-top-right-radius: 5px;
	` : '') }
  	&:focus {
  		outline: none;
  	}
  	box-shadow: 1px 2px 10px -2px ${ basicTheme.grey };
`;

export default StyledSelect;
