import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabelWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1em;
    cursor: ${({ isAction }) => isAction ? 'pointer' : 'initial' };
`;

const StyledHeading = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 1em;
`;

const StyledParagraph = styled.p`
    font-size: .7em;
`;

const ActionListLabel = ({ header, subHeader, isAction, handleClick }) => (
    <StyledLabelWrapper isAction={isAction} onClick={handleClick}>
        <StyledHeading>{ header }</StyledHeading>
        <StyledParagraph>{ subHeader }</StyledParagraph>
    </StyledLabelWrapper>
);

ActionListLabel.propTypes = {
    /**
     * String definition of label header
     */
    header: PropTypes.string,
    /**
     * String definition of Label subHeader
     */
    subHeader: PropTypes.string,
    /**
     * Boolean indicating whether we use list for actions,
     * Is case of true pointer css will be set and so on
     */
    isAction: PropTypes.bool,
    /**
     * Function to be called upon ListItem click
     */
    handleClick: PropTypes.func,
};

export { StyledLabelWrapper };
export default ActionListLabel;
