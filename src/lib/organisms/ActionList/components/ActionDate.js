import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightTheme } from '../../../constants/theme';

const StyledDateWrapper = styled.div`
  min-height: 100px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledDateHeading = styled.h4`
    color: ${ lightTheme.lightBlue };
    padding: 0;
    margin: 0;
    font-size: .8em;
`;

const StyledDateParagraph = styled.p`
    color: ${ lightTheme.lightBlue };
    font-size: .8em;
`;

const ActionDate = ({ dateTime }) => {
    const date = new Date(dateTime);
    return (
        <StyledDateWrapper>
            <StyledDateHeading>{`${ date.getDate() }-${ date.getMonth() + 1 }`}</StyledDateHeading>
            <StyledDateParagraph>{`${ date.getFullYear() }`}</StyledDateParagraph>
        </StyledDateWrapper>
    );
};

ActionDate.propTypes = {
    /**
     * String definition of JS native date object
     */
    dateTime: PropTypes.string,
};

export { StyledDateWrapper };
export default ActionDate;
