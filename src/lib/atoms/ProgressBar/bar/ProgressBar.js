import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { basicTheme, lightTheme } from '../../../constants/theme';

const progressAnimation = keyframes`
  0% { width: 0; }
`;

const StyledProgress = styled.progress`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background-size: auto;
  min-height: 50px;
  width: 100%;
  &::-webkit-progress-value {
    animation: ${progressAnimation} 2s;
    width: 0px;
    background: ${({background}) => background};
  }
  &::-moz-progress-bar {
    background: ${({background}) => background};
  }
`;

const StyledContainer = styled.div`
  position: relative;
  padding: 5px;
  height: 100%;
  width: 100%;
`;

const StyledLabel = styled.h3`
  color: ${lightTheme.white};
  left: 1em;
  line-height: .75;
  position: absolute;
  font-weight: 100;
  top: 5px;
`;

const ProgressBar = ({ label, value, background }) => {
    return (
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledProgress max="100" value={value} background={background} />
        </StyledContainer>
    );
};

ProgressBar.propTypes = {
    /**
     * String value of label, inside progress bar
     */
    label: PropTypes.string,
    /**
     * Whether radio is checked or not
     */
    value: PropTypes.number,
    /**
     * String representation of background color of progress bar
     */
    background: PropTypes.string,
};

ProgressBar.defaultProps = {
    background: basicTheme.orange,
};

export { StyledContainer, StyledProgress };
export default ProgressBar;
