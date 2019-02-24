import React from 'react';
import PropTypes from 'prop-types';
import { toUpper } from 'ramda';
import { StyledButton } from '../../atoms/Button/Button';
import { Grid, GridCol } from '../Grid/index';

const IconButton = ({
    disabled, label, onClick, color, backgroundColor, large, fullWidth, icon, secondary,
}) => (
    <StyledButton
        secondary={ secondary }
        onClick={ onClick }
        disabled={ disabled }
        color={ color }
        background={ backgroundColor }
        large={ large }
        fullWidth={ fullWidth }
    >
        <Grid>
            <GridCol colXS={ 3 } verticalAlign="center">
                { icon }
            </GridCol>
            <GridCol colXS={ 9 } horizontalAlign="center" verticalAlign="center">
                <span>{toUpper(label)}</span>
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
   * Optional Button label color
   */
    color: PropTypes.string,
    /**
   * Whether button will be large or not
   */
    large: PropTypes.bool,
    /**
   * Optional Background color of button
   */
    backgroundColor: PropTypes.string,
    /**
   * Boolean representing whether we should use full width of container
   */
    fullWidth: PropTypes.bool,
    /**
   * Icon node is expected
   */
    icon: PropTypes.node,
};

IconButton.defaultProps = {
    label: '',
};

export { StyledButton };
export default IconButton;
