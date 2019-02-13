import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/index';
import { Grid, GridCol } from '../Grid/index';
import { LABEL_POSITION, equalsLeft, equalsRight } from './constants/position';
import DEFAULT_THEME, { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${ ({ disabled }) => (disabled ? 'not-allowed' : 'pointer') };
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledSpan = styled.span`
  ${ DEFAULT_THEME }
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  transition: .25s all ease;
  &:hover {
    background-color: ${ resolveTheme(TYPES.BACKGROUND_COLOR_HOVER) };
  }
  ${ StyledInput }:checked ~ & {
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 8px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid ${ resolveTheme(TYPES.COLOR) };
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  ${ StyledInput }:checked ~ & {
    &:after {
        display: block;
    }
  }
`;

const renderLabel = label => (
    <GridCol colXS={ 6 }>
        <Heading label={ label } component="h4" />
    </GridCol>
);

const Checkbox = ({
    label, checked, onChange, labelPosition, disabled,
}) => (
    <Grid>
        { equalsLeft(labelPosition) && renderLabel(label) }
        <GridCol colXS={ 6 } center>
            <StyledContainer disabled={ disabled }>
                <StyledInput
                    type="checkbox"
                    checked={ checked }
                    onChange={ disabled ? undefined : onChange }
                    disabled={ disabled }
                />
                <StyledSpan />
            </StyledContainer>
        </GridCol>
        { equalsRight(labelPosition) && renderLabel(label) }
    </Grid>
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
};

Checkbox.defaultProps = {
    labelPosition: LABEL_POSITION.LEFT,
};

export default Checkbox;
