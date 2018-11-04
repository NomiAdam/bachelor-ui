import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../constants/theme';

const StyledNavigationItem = styled.li`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 .5rem;
  color: ${lightTheme.white};
  width: 100%;
  min-height: 50px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  transition: .4s all ease;
  &:after {
	    content: "";
        background: ${lightTheme.whiteBlue};
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        border-radius: 50%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
  }
  &:active {
    &:after {
	        padding: 0;
            margin: 0;
            opacity: 1;
            transition: 0s
    }
  }
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding-top: 5px;
  font-size: .75rem;
  user-select: none;
`;

const BottomNavigationItem = ({icon: Icon, label, handleClick}) => (
    <StyledNavigationItem onClick={handleClick}>
        <Icon/>
        <StyledParagraph>{label}</StyledParagraph>
    </StyledNavigationItem>
);

BottomNavigationItem.propTypes = {
    /**
     * Icon node, to be displayed inside
     */
    icon: PropTypes.any,
    /**
     * String representation of inside label
     */
    label: PropTypes.string,
    /**
     * Function handle to be called upon onClick event
     */
    handleClick: PropTypes.func,
};

export { StyledNavigationItem };
export default BottomNavigationItem;
