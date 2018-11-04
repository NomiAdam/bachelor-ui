import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/index';
import styled from 'styled-components';
import {lightTheme} from '../../constants/theme';

const StyledStep = styled.li`
  list-style-type: none; 
  float: left; 
  width: ${({stepCount}) => `${ 100 / stepCount}%`}; 
  position: relative; 
  text-align: center;
  font-weight: 600;
  color: ${({isActive}) => isActive ? lightTheme.lightGreen : 'initial' };
  &:before {
    content:counter(step); 
    counter-increment: step; 
    height:30px;
    width:30px; 
    line-height: 30px; 
    border: 2px solid; 
    display: block; 
    text-align: center;
    margin: 0 auto 10px auto; 
    border-radius: 50%; 
    background-color: ${lightTheme.white}; 
    border-color: ${({isActive}) => isActive ? lightTheme.lightGreen : lightTheme.lightGrey };
  }
  &:after {
    content: '';
    position: absolute; 
    width: 100%;
    height: 2px;
    top: 15px; 
    left: -50%; 
    z-index: -1; 
    background-color: ${({isActive}) => isActive ? lightTheme.lightGreen : lightTheme.lightGrey };
 }
 &:first-child:after {
    content: none;
  } 
`;

const Step = ({label, isActive, stepCount, handleClick}) => (
    <StyledStep isActive={isActive} stepCount={stepCount} onClick={handleClick}>
        <Paragraph>
            {label}
        </Paragraph>
    </StyledStep>
);

Step.propTypes = {
    /**
     * Number representing how many step we have
     */
    stepCount: PropTypes.number,
    /**
     * Whether this step is active
     */
    isActive: PropTypes.bool,
    /**
     * String representation of step label
     */
    label: PropTypes.string,
    /**
     * Function handle to handle onClick event
     */
    handleClick: PropTypes.func,
};

export default Step;
