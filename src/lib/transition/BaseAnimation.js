import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseAnimation = styled.div`
  animation-duration: ${props => props.duration};
  animation-timing-function: ${props => props.timingFunction};
  animation-delay: ${props => props.delay};
  animation-iteration-count: ${props => props.iterationCount};
  animation-direction: ${props => props.direction};
  animation-fill-mode: ${props => props.fillMode};
  animation-play-state:  ${props => props.playState};
  display: ${props => props.display};
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
    display: 'block'
};

export default BaseAnimation;