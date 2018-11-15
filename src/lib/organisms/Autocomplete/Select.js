import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    map, length, equals, o,
} from 'ramda';
import Option from './Option';
import { lightTheme } from '../../constants/theme';

const StyledSelect = styled.div`
    display: ${ props => (props.visible ? 'block' : 'none') }
    position: absolute;
    z-index: 999;
    background-color: ${ lightTheme.white };
    width: 100%;
    min-height: 0px;
    max-height: 500px;
    border: 1px solid ${ lightTheme.lightGrey }; 
    border-top: none;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    ${ props => (props.isEmpty ? 'border: none;' : '') }
    font-weight: 300;
    font-size: 16px;
    overflow-y: auto;
`;

const doesItHaveOptions = o(equals(0), length);
const Select = ({
    visible, suggestions, onClick, selected,
}) => {
    const equalsSelected = equals(selected);
    const mapSuggestion = ({ value }) => (
        <Option value={ value } onClick={ onClick } key={ value } selected={ equalsSelected(value) } />
    );
    const mappedOptions = map(mapSuggestion);
    return (
        <StyledSelect visible={ visible } isEmpty={ doesItHaveOptions(suggestions) }>
            {visible && mappedOptions(suggestions)}
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
    suggestions: PropTypes.array,
    /**
     * Option onMouseDown handler
     */
    onClick: PropTypes.func,
    /**
     * String definition of selected suggestion value
     */
    selected: PropTypes.string,
};

Select.defaultProps = {
    suggestions: [],
};

export { StyledSelect };
export default Select;
