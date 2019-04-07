import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TYPES, resolveTheme } from '../../utils/resolveTheme';

const StyledParagraph = styled.p`
    font-size: ${ ({ size }) => size || 'inherit' };
    margin: ${ ({ margin }) => margin };
    color: ${ resolveTheme(TYPES.COLOR) };
    ${ ({ bold }) => (bold ? 'font-weight: bold;' : '') }
`;

const Paragraph = ({
    color, size, children, bold, secondary, margin,
}) => (
    <StyledParagraph margin={ margin } color={ color } size={ size } bold={ bold } secondary={ secondary }>
        {children}
    </StyledParagraph>
);

Paragraph.propTypes = {
    /**
     * Optional String representation of text color
     */
    color: PropTypes.string,
    /**
   * Children node
   */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * String representation of font size
     */
    size: PropTypes.string,
    /**
   * Whether element should have bold font weight property
   */
    bold: PropTypes.bool,
    /**
   * String definition of margin css property
   */
    margin: PropTypes.string,
    /**
   * Whether to use secondary theme
   */
    secondary: PropTypes.bool,
};

Paragraph.defaultProps = {
    margin: '0',
};

export { StyledParagraph };
export default Paragraph;
