import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TYPES, resolveTheme } from '../../utils/resolveTheme';

const StyledParagraph = styled.p`
    font-size: ${ ({ size }) => size || 'inherit' };
    color: ${ resolveTheme(TYPES.COLOR) };
    ${ ({ bold }) => (bold ? 'font-weight: bold;' : '') }
`;

const Paragraph = ({
    color, size, children, bold,
}) => (
    <StyledParagraph color={ color } size={ size } bold={ bold }>
        {children}
    </StyledParagraph>
);

Paragraph.propTypes = {
    /**
     * Optional String representation of text color
     */
    color: PropTypes.string,
    /**
     * String representation of font size
     */
    size: PropTypes.string,
    /**
   * Whether element should have bold font weight property
   */
    bold: PropTypes.bool,
};

export { StyledParagraph };
export default Paragraph;
