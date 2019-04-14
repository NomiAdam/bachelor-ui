/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'ramda';

const BaseAnimation = styled.div`
  width: 100%;
  height: 100%;
  animation-duration: ${ prop('duration') };
  animation-timing-function: ${ prop('timingFunction') };
  animation-delay: ${ prop('delay') };
  animation-iteration-count: ${ prop('iterationCount') };
  animation-direction: ${ prop('direction') };
  animation-fill-mode: ${ prop('fillMode') };
  animation-play-state:  ${ prop('playState') };
  display: ${ prop('display') };
`;

BaseAnimation.propTypes = {
    /**
     * duration animation CSS property
     */
    duration: PropTypes.string,
    /**
     * timingFunction animation CSS property
     */
    timingFunction: PropTypes.string,
    /**
     * delay animation CSS property
     */
    delay: PropTypes.string,
    /**
     * iterationCount animation CSS property
     */
    iterationCount: PropTypes.string,
    /**
     * direction animation CSS property
     */
    direction: PropTypes.string,
    /**
     * fillMode animation CSS property
     */
    fillMode: PropTypes.string,
    /**
     * playState animation CSS property
     */
    playState: PropTypes.string,
    /**
     * Display CSS property
     */
    display: PropTypes.string,
};

BaseAnimation.defaultProps = {
    duration: '1s',
    timingFunction: 'ease',
    delay: '0s',
    iterationCount: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running',
    display: 'block',
};

export default BaseAnimation;
