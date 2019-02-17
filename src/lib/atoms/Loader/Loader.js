import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { basicTheme, lightTheme } from '../../constants/theme';

const loadAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  font-size: 10px;
  margin: 0;
  text-indent: -9999em;
  width: ${ ({ width }) => width };
  height: ${ ({ height }) => height };
  border-radius: 50%;
  background: ${ ({ backgroundColor }) => backgroundColor };
  background: linear-gradient(to right, ${ ({ backgroundColor }) => backgroundColor } 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: ${ loadAnimation } 1.4s infinite linear;
  animation: ${ loadAnimation } 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
&:before {
  width: 50%;
  height: 50%;
  background: ${ ({ backgroundColor }) => backgroundColor };
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
&:after {
  background: ${ ({ color }) => color };
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
`;

const Loader = ({
    color, backgroundColor, width, height, secondary,
}) => (
    <StyledLoader
        color={ color }
        backgroundColor={ backgroundColor }
        width={ width }
        height={ height }
        secondary={ secondary }
    />
);

Loader.propTypes = {
    /**
     * String definition of loader color
     */
    color: PropTypes.string,
    /**
     * String definition of loader background color
     */
    backgroundColor: PropTypes.string,
    /**
     * String definition of loader height
     */
    height: PropTypes.string,
    /**
     * String definition of loader width
     */
    width: PropTypes.string,
};

Loader.defaultProps = {
    width: '11em',
    height: '11em',
    color: lightTheme.white,
    backgroundColor: basicTheme.grey,
};

export { StyledLoader };
export default Loader;
