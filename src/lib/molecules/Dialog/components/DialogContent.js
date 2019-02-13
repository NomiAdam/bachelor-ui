import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../../organisms/Container/index';

const StyledContainer = styled(Container)`
  overflow: visible;
`;

const DialogContent = ({ children }) => (
    <StyledContainer alignItems="initial" justifyContent="initial">
        { children }
    </StyledContainer>
);

DialogContent.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.any,
};

export default DialogContent;
