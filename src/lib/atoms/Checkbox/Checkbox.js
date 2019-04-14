import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import { noop } from 'ramda-extension';
import Heading from '../Heading/index';
import Container from '../../molecules/Container/index';
import { LABEL_POSITION, equalsLeft, equalsRight } from './constants/position';
import flexConstants from '../../constants/flex';
import { darkTheme } from '../../constants/theme';

const StyledContainer = styled.label`
  padding: 0 15px;
  cursor: ${ ({ disabled }) => (disabled ? 'not-allowed' : 'pointer') };
`;

const StyledInput = styled.input`
  zoom: 1;
  transform: scale(2);
  border-radius: 0;
`;

const renderLabel = label => <Heading label={ label } component="h4" color={ darkTheme.black } />;

const getTargetValue = path(['target', 'checked']);
const Checkbox = ({
    label, checked, onChange, labelPosition, disabled, secondary, hideLabel,
}) => (
    <Container
        width="initial"
        height="100%"
        justifyContent={ hideLabel ? flexConstants.POSITION_CENTER : flexConstants.POSITION_SPACER }
        secondary={ secondary }
        overflow="hidden"
    >
        {!hideLabel && equalsLeft(labelPosition) && renderLabel(label)}
        <StyledContainer
            disabled={ disabled }
            secondary={ secondary }
        >
            <StyledInput
                secondary={ secondary }
                type="checkbox"
                checked={ checked }
                onChange={ disabled ? noop : event => onChange(event, getTargetValue(event)) }
                disabled={ disabled }
            />
        </StyledContainer>
        {!hideLabel && equalsRight(labelPosition) && renderLabel(label)}
    </Container>
);

Checkbox.propTypes = {
    /**
   * Whether is disabled or not
   */
    disabled: PropTypes.bool,
    /**
   * String value of label, label will reside on left side of checkbox
   */
    label: PropTypes.string,
    /**
   * Whether checkbox is checked or not
   */
    checked: PropTypes.bool,
    /**
   * Function handler of onChange event
   */
    onChange: PropTypes.func,
    /**
   * String representation of labels position
   */
    labelPosition: PropTypes.oneOf([
        LABEL_POSITION.LEFT, LABEL_POSITION.RIGHT,
    ]),
    /**
   * Whether to hide label or not
   */
    hideLabel: PropTypes.bool,
};

Checkbox.defaultProps = {
    labelPosition: LABEL_POSITION.LEFT,
};

export default Checkbox;
