import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../../constants/theme';

const StyledParagraph = styled.p`
    font-size: ${ ({ size }) => size || 'inherit' };
    color: ${ ({ color }) => color || darkTheme.black };
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
     * String representation of text color
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
