/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconTypes, { iconStringTypes } from './constants/iconNames';
import DEFAULT_THEME from '../../utils/resolveTheme';

const Icon = ({
    name, backgroundColor, fontSize, color,
}) => {
    const ValidIcon = IconTypes[ name ];
    const StyledIcon = styled(ValidIcon)`
     font-size: ${ ({ fontSize }) => fontSize };
    ${ DEFAULT_THEME }
`;
    return <StyledIcon backgroundColor={ backgroundColor } fontSize={ fontSize } color={ color } />;
};

Icon.propTypes = {
    /**
   * String constant used to choose right icon
   */
    name: PropTypes.oneOf(iconStringTypes).isRequired,
    /**
   * Optional backgroundColor property
   */
    backgroundColor: PropTypes.string,
    /**
   * Optional fontSize property
   */
    fontSize: PropTypes.string,
    /**
   * Optional color property
   */
    color: PropTypes.string,
};

Icon.defaultProps = {
    fontSize: '1.5em',
};

export default Icon;
