import React from 'react';
import PropTypes from 'prop-types';
import { toUpper } from 'ramda';
import { StyledButton } from './Button';
import { basicTheme } from '../../constants/theme';
import { Grid, GridCol } from '../Grid';

const IconButton = ({
    disabled, label, onClick, color, background, large, fullWidth, icon,
}) => (
    <StyledButton
        onClick={ onClick }
        disabled={ disabled }
        color={ color }
        background={ background }
        large={ large }
        fullWidth={ fullWidth }
    >
        <Grid>
            <GridCol colXS={ 9 } horizontalAlign="center" verticalAlign="center">
                <span>{toUpper(label)}</span>
            </GridCol>
            <GridCol colXS={ 3 } verticalAlign="center">
                { icon }
            </GridCol>
        </Grid>
    </StyledButton>
);

IconButton.propTypes = {
    /**
   * Whether button is disabled or not
   */
    disabled: PropTypes.bool,
    /**
   * onClick event function handler
   */
    onClick: PropTypes.func,
    /**
   * Value, or label, for given button
   */
    label: PropTypes.string,
    /**
   * Button label color, black as default
   */
    color: PropTypes.string,
    /**
   * Whether button will be large or not
   */
    large: PropTypes.bool,
    /**
   * Background color of button, #1eb4ff (kind of light blue) as default
   */
    background: PropTypes.string,
    /**
   * Boolean representing whether we should use full width of container
   */
    fullWidth: PropTypes.bool,
    /**
   * Icon node is expected
   */
    icon: PropTypes.any,
};

IconButton.defaultProps = {
    label: '',
    fullWidth: false,
    background: basicTheme.indigo,
};

export { StyledButton };
export default IconButton;
