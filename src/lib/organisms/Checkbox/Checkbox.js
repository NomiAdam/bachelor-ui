import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { path } from 'ramda';
import Heading from '../../atoms/Heading/index';
import Container from '../Container';
import { LABEL_POSITION, equalsLeft, equalsRight } from './constants/position';
import DEFAULT_THEME, { resolveTheme, TYPES } from '../../utils/resolveTheme';

const StyledContainer = styled.label`
  display: block;
  position: relative;
  margin: ${ ({ isOnLeft }) => (isOnLeft ? '0 0 27px 15px' : '0 35px 27px 0') };
  font-size: 22px;
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
    left: 6px;
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

const renderLabel = label => <Heading label={ label } component="h4" />;

const getTargetValue = path(['target', 'checked']);
const Checkbox = ({
    label, checked, onChange, labelPosition, disabled,
}) => (
    <Container width="100%" height="100%" justifyContent="flex-start">
        { equalsLeft(labelPosition) && renderLabel(label) }
        <StyledContainer disabled={ disabled } isOnLeft={ equalsLeft(labelPosition) }>
            <StyledInput
                type="checkbox"
                checked={ checked }
                onChange={ disabled ? undefined : e => onChange(e, getTargetValue(e)) }
                disabled={ disabled }
            />
            <StyledSpan />
        </StyledContainer>
        { equalsRight(labelPosition) && renderLabel(label) }
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
};

Checkbox.defaultProps = {
    labelPosition: LABEL_POSITION.LEFT,
};

export default Checkbox;
