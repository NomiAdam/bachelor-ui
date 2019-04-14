/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconTypes, { iconStringTypes } from './constants/iconNames';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';

const Icon = ({
    name, fontSize, color, clickable, onClick, padding, secondary, open,
}) => {
    const ValidIcon = IconTypes[ name ];
    if (!ValidIcon) {
        return null;
    }
    const StyledIcon = styled(ValidIcon)`
     font-size: ${ ({ fontSize }) => fontSize };
     cursor: ${ ({ clickable }) => (clickable ? 'pointer' : 'initial') };
     border: 1px solid transparent;
     transition: .25s all ease;
     transform: ${ ({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)') };
     color: ${ resolveTheme(TYPES.COLOR) }
     ${ ({ padding }) => (padding ? `padding: ${ padding };` : '') }
`;
    return (
        <StyledIcon
            onClick={ onClick }
            secondary={ secondary }
            clickable={ clickable }
            fontSize={ fontSize }
            color={ color }
            padding={ padding }
            open={ open }
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
    clickable: PropTypes.bool,
    /**
   * onClick handler
   */
    onClick: PropTypes.func,
    /**
   * Open bool property
   */
    open: PropTypes.bool,
    /**
   * Whether Icon should use secondary color or not
   */
    secondary: PropTypes.bool,
    /**
   * Whether Icon should use primary color or not
   */
    primary: PropTypes.bool,
};

Icon.defaultProps = {
    fontSize: '2em',
};

export default Icon;
