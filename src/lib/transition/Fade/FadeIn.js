// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = styled(BaseAnimation)`
  animation-name: ${ FadeInAnimation };
`;

export default FadeIn;
