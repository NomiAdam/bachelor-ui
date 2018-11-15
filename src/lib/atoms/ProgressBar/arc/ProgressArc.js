import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { lightTheme, basicTheme, darkTheme } from '../../../constants/theme';

const dash = value => keyframes`
  to {
    stroke-dashoffset: ${ 198 - (value * 1.98) };
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: ${ ({ height }) => height };
  width: ${ ({ width }) => width };
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  display: block;
`;

const StyledPath = styled.path`
  stroke-width: 20;
  fill: none;
`;

const StyledSecondaryPath = styled(StyledPath)`
  stroke: ${ lightTheme.lightGrey };
`;

const StyledPrimaryPath = styled(StyledPath)`
  stroke: ${ ({ color }) => color };
  stroke-dasharray: 198;
  stroke-dashoffset: 198;
  animation: ${ ({ value }) => dash(value) } 1.5s ease-out forwards;
`;

const StyledParagraph = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: ${ ({ labelColor }) => labelColor }
`;

const ProgressArc = ({
    value, color, width, height, label, labelColor,
}) => (
    <StyledWrapper width={ width } height={ height }>
        <StyledSvg viewBox="5 0 100 100">
            <StyledSecondaryPath d="M30,90 A40,40 0 1,1 80,90" />
            <StyledPrimaryPath d="M30,90 A40,40 0 1,1 80,90" value={ value } color={ color } />
        </StyledSvg>
        <StyledParagraph labelColor={ labelColor }>{ label }</StyledParagraph>
    </StyledWrapper>
);

ProgressArc.propTypes = {
    /**
     * Number representing percentage of filled arc
     */
    value: PropTypes.number,
    /**
     * String definition of arc color
     */
    color: PropTypes.string,
    /**
     * String definition of wrappers width
     */
    width: PropTypes.string,
    /**
     * String definition of wrappers height
     */
    height: PropTypes.string,
    /**
     * String definition of wrappers inner label
     */
    label: PropTypes.string,
    /**
     * Font color of inner label
     */
    labelColor: PropTypes.string,
};

ProgressArc.defaultProps = {
    value: 0,
    color: basicTheme.blue,
    labelColor: darkTheme.black,
    width: '100%',
    height: '100%',
};

export default ProgressArc;
