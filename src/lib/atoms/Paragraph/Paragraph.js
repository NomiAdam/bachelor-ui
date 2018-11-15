import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../../constants/theme';

const StyledParagraph = styled.p`
    font-size: ${ ({ size }) => size || 'inherit' };
    color: ${ ({ color }) => color || darkTheme.black };
`;

const Paragraph = ({ color, size, children }) => (
    <StyledParagraph color={ color } size={ size }>
        {children}
    </StyledParagraph>
);

Paragraph.propTypes = {
    /**
     * String representation of text color
     */
    color: PropTypes.string,
    /**
     * String representation of font size
     */
    size: PropTypes.string,
};

export { StyledParagraph };
export default Paragraph;
