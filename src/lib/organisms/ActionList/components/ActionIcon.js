import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosStar, IoIosStarOutline } from 'react-icons/lib/io';
import { darkTheme, lightTheme } from '../../../constants/theme';

const StyledIconWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const StyledOutline = styled(IoIosStarOutline)`
  color: ${darkTheme.black};
  font-size: 1.7em;
`;

const StyledStar = styled(IoIosStar)`
  color: ${lightTheme.lightBlue};
  font-size: 1.7em;
`;

const ActionIcon = ({ isIconActive, handleIconClick }) => (
    <StyledIconWrapper onClick={handleIconClick}>
        { isIconActive ? <StyledStar/> : <StyledOutline/> }
    </StyledIconWrapper>
);

ActionIcon.propTypes = {
    /**
     * Boolean indicating whether icon is active on not
     */
    isIconActive: PropTypes.bool,
    /**
     * Function to be called upon icon click,
     */
    handleIconClick: PropTypes.func,
};

export { StyledIconWrapper, StyledStar, StyledOutline };
export default ActionIcon;
