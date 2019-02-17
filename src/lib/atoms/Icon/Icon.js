/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconTypes, { iconStringTypes } from './constants/iconNames';
import { lightTheme } from '../../constants/theme';
import DEFAULT_THEME from '../../utils/resolveTheme';

const Icon = ({
    name, backgroundColor, fontSize, color, clickable, onClick, padding, secondary,
}) => {
    const ValidIcon = IconTypes[ name ];
    const StyledIcon = styled(ValidIcon)`
     font-size: ${ ({ fontSize }) => fontSize };
     cursor: ${ ({ clickable }) => (clickable ? 'pointer' : 'initial') };
     ${ ({ padding }) => (padding ? `padding: ${ padding };` : '') }
     ${ DEFAULT_THEME }
`;
    return (
        <StyledIcon
            secondary={ secondary }
            onClick={ onClick }
            clickable={ clickable }
            backgroundColor={ backgroundColor }
            fontSize={ fontSize }
            color={ color }
            border={ `1px solid ${ lightTheme.transparent }` }
            padding={ padding }
        />
    );
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
    /**
   * Optional padding css property
   */
    padding: PropTypes.string,
    /**
   * Optional definition of whether Icon will be clickable
   */
    clickable: PropTypes.string,
    /**
   * onClick handler
   */
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    fontSize: '1.5em',
};

export default Icon;
