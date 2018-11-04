import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import styled from 'styled-components';
import {map,length,equals,o} from 'ramda';
import { darkTheme, lightTheme } from '../../constants/theme';

const StyledSelect = styled.div`
    overflow: hidden;
    display: ${props => props.visible ? 'flex' : 'none' }
    top: -50px;
    position: absolute;
    z-index: 999;
    background-color: ${lightTheme.white};
    width: ${({width}) => width};
    min-height: 0px;
    max-height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid transparent; 
    border-radius: 3px;
    ${props => props.isEmpty ? 'border: none;' : ''}
    font-size: 16px;
  	box-shadow: 5px 5px 15px ${darkTheme.darkGrey};
`;

const doesItHaveOptions = o(equals(0),length);
const Select = ({visible, options, onClick, width, selected}) => {
    const equalsSelected = equals(selected);
    const mapSuggestion = ({value, label}) => (
        <Option value={value} label={label} onClick={onClick} key={value} selected={equalsSelected(value)} />
    );
    const mappedOptions = map(mapSuggestion);
    return (
        <StyledSelect visible={visible} isEmpty={doesItHaveOptions(options)} width={width}>
            {visible && mappedOptions(options)}
        </StyledSelect>
    );
};

Select.propTypes = {
    /**
     * Whether select div is visible or not, is visible when Input is focused
     */
    visible: PropTypes.bool,
    /**
     * Array of possible values [ { value: 'Value', label: 'Label' }, ... ]
     */
    options: PropTypes.array,
    /**
     * Option onMouseDown handler
     */
    onClick: PropTypes.func,
    /**
     * String representation of select width
     */
    width: PropTypes.string,
    /**
     * String definition of currently selected item
     */
    selected: PropTypes.string,
};

Select.defaultProps = {
    options: [],
};

export { StyledSelect };
export default Select;
