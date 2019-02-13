import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    map, length, equals, o,
} from 'ramda';
import Option from './Option';
import { darkTheme, lightTheme } from '../../constants/theme';
import DEFAULT_THEME from '../../utils/resolveTheme';

const StyledSelect = styled.div`
    ${ DEFAULT_THEME }
    overflow: hidden;
    display: ${ props => (props.visible ? 'flex' : 'none') }
    top: -50px;
    position: absolute;
    z-index: 999;
    width: ${ ({ width }) => width };
    min-height: 0px;
    max-height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${ ({ isEmpty }) => (isEmpty ? 'border: none;' : '') }
    font-size: 16px;
  	box-shadow: 5px 5px 15px ${ darkTheme.darkGrey };
`;

const doesItHaveOptions = o(equals(0), length);
const Select = ({
    visible, options, onClick, width, selected, backgroundColor,
}) => {
    const equalsSelected = equals(selected);
    const mapSuggestion = ({ value, label }) => (
        <Option value={ value } label={ label } onClick={ onClick } key={ value } selected={ equalsSelected(value) } />
    );
    const mappedOptions = map(mapSuggestion);
    return (
        <StyledSelect
            backgroundColor={ backgroundColor }
            visible={ visible }
            isEmpty={ doesItHaveOptions(options) }
            width={ width }
        >
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
    /**
   * Optional String color definition
   */
    backgroundColor: PropTypes.string,
};

Select.defaultProps = {
    options: [],
    backgroundColor: lightTheme.white,
};

export { StyledSelect };
export default Select;
