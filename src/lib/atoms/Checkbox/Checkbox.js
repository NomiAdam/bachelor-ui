import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../Heading/index';
import {Grid, GridCol} from '../Grid/index';
import {basicTheme, lightTheme} from '../../constants/theme';
import { LABEL_POSITION, equalsLeft, equalsRight } from './constants/position';

const StyledContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${lightTheme.lightBlue};
  transition: .25s all ease;
  &:hover {
    background-color: ${lightTheme.whiteBlue};
  }
  ${StyledInput}:checked ~ & {
    background-color: ${basicTheme.blue};
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${lightTheme.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  ${StyledInput}:checked ~ & {
    &:after {
        display: block;
    }
  }
`;

const renderLabel = (label) => (
    <GridCol colXS={6}>
        <Heading label={label} component={'h4'} />
    </GridCol>
);

const Checkbox = ({label, checked, onChange, labelPosition}) => {
    return (
        <Grid>
            { equalsLeft(labelPosition) && renderLabel(label) }
            <GridCol colXS={6} center>
                <StyledContainer>
                    <StyledInput type="checkbox" checked={checked} onChange={onChange}/>
                    <StyledSpan/>
                </StyledContainer>
            </GridCol>
            { equalsRight(labelPosition) && renderLabel(label) }
        </Grid>
    );
};

Checkbox.propTypes = {
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
        LABEL_POSITION.LEFT, LABEL_POSITION.RIGHT
    ]),
};

Checkbox.defaultProps = {
    labelPosition: LABEL_POSITION.LEFT,
};

export default Checkbox;
