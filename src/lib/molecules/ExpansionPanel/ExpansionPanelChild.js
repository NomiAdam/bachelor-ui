import React from 'react';
import PropTypes from 'prop-types';
import { StyledPaperWrapper } from '../../atoms/Paper/Paper';
import styled from 'styled-components';
import {IoIosArrowDown} from 'react-icons/lib/io';
import { darkTheme } from '../../constants/theme';

const StyledWrapper = styled(StyledPaperWrapper)`
  border-radius: 0;
  user-select: none;
  transition: .25s all ease;
  box-shadow:  .5px .1px 1px .5px ${darkTheme.darkGrey};
  margin: ${({open}) => open ? '20px 0' : '0'};
`;

const StyledHeadingLabel = styled.h3`
  font-weight: 100;
  margin: 0;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${darkTheme.black};
  overflow: hidden;
  padding: 5px 10px;
`;

const StyledBody = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: .1s all ease;
  color: ${darkTheme.black};
  width: 100%;
  padding: ${({ open }) => open ? '10px' : '0'};
  max-height: ${({ open }) => open ? '500px' : '0'};
`;

const StyledIcon = styled(IoIosArrowDown)`
    transition: .25s all ease;
    border: 0 solid transparent;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const ExpansionPanelChild = ({open, handleClick, heading, body}) => (
    <StyledWrapper open={open}>
        <StyledHeading>
            <StyledHeadingLabel>
                {heading}
            </StyledHeadingLabel>
            <StyledIcon open={open} onClick={handleClick} />
        </StyledHeading>
        <StyledBody open={open}>
            {body}
        </StyledBody>
    </StyledWrapper>
);

ExpansionPanelChild.propTypes = {
    /**
     * String representation of heading
     */
    heading: PropTypes.string,
    /**
     * Whether body is open or not
     */
    open: PropTypes.bool,
    /**
     * Function to be called upon open/close icon click
     */
    handleClick: PropTypes.func,
    /**
     * Anything to be in body
     */
    body: PropTypes.any,
};

export { StyledWrapper, StyledIcon, StyledBody };
export default ExpansionPanelChild;
