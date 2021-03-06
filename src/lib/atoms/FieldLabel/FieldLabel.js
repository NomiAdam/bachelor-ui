import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledSpan = styled.span`
    font-size: .7rem;
    color: ${ ({ error }) => (error ? basicTheme.red : resolveTheme(TYPES.COLOR)) };
    display: inline-block;
    ${ ({ hasText }) => (hasText ? '' : 'height: 0px;') }
`;

const FieldLabel = ({ label, error, secondary }) => (
    <StyledSpan error={ error } hasText={ label.length > 0 } secondary={ secondary }>
        {label}
    </StyledSpan>
);

FieldLabel.propTypes = {
    /**
     * String representation of label text
     */
    label: PropTypes.string,
    /**
     * Whether we are displaying error label or not
     */
    error: PropTypes.bool,
};

FieldLabel.defaultProps = {
    label: '',
};

export { StyledSpan };
export default FieldLabel;
