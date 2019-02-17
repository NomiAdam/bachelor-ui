/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconTypes, { iconStringTypes } from './constants/iconNames';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const Icon = ({
    name, fontSize, color, clickable, onClick, padding, secondary,
}) => {
    const ValidIcon = IconTypes[ name ];
    const StyledIcon = styled(ValidIcon)`
     font-size: ${ ({ fontSize }) => fontSize };
     cursor: ${ ({ clickable }) => (clickable ? 'pointer' : 'initial') };
     border: 1px solid transparent;
     background-color: transparent;
     color: ${ resolveTheme(TYPES.COLOR) }
     ${ ({ padding }) => (padding ? `padding: ${ padding };` : '') }
`;
    return (
        <StyledIcon
            secondary={ secondary }
            onClick={ onClick }
            clickable={ clickable }
            fontSize={ fontSize }
            color={ color }
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
