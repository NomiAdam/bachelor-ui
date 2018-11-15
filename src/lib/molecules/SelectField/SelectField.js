/* eslint-disable default-case */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    path,
    o,
    prop,
    head,
    propOr,
    propEq,
    when,
    findIndex,
    dec,
    add,
    nth,
} from 'ramda';
import { isNilOrEmptyString, isNotNil } from 'ramda-extension';
import { FaCaretDown } from 'react-icons/lib/fa';
import Input from './Input';
import Select from './Select';

const getInputValue = path(['target', 'value']);

const getFirstOptionsValue = o(propOr('', 'value'), head);
const getCurrentIndex = value => findIndex(propEq('value', value));
const getNextValue = when(isNotNil, prop('value'));

const StyledSelectField = styled.div`
  display: inline-block;
  width: ${ ({ width }) => width };
  position: relative;
  z-index: 9;
`;

const StyledCaretDown = styled(FaCaretDown)`
    position: absolute;
    top: 25%;
    right: 0;
    margin: 0 5px;
    font-size: 1.2rem;
    z-index: -999;
`;

class SelectField extends Component {
    state = {
        isFocused: false,
        selected: '',
    };

    componentDidMount() {
        const { value, options } = this.props;
        if (isNilOrEmptyString(value)) {
            this.setState({ selected: getFirstOptionsValue(options) });
        } else {
            this.setState({ selected: value });
        }
    }

    handleKeyPress = (e) => {
        const { selected } = this.state;
        const { options } = this.props;
        const index = getCurrentIndex(selected)(options);
        switch (e.key) {
        case 'ArrowUp': {
            const getValueOfNext = nth(dec(index, 1), options);
            this.setState({ selected: getNextValue(getValueOfNext) || selected });
        }
            break;
        case 'ArrowDown': {
            const getValueOfNext = nth(add(index, 1), options);
            this.setState({ selected: getNextValue(getValueOfNext) || selected });
        }
            break;
        case 'Enter':
            this.fireChange(selected);
            break;
        }
    };

    handleFocus = () => {
        this.setState({ isFocused: true });
    };

    handleBlur = () => {
        this.setState({ isFocused: false });
    };

    handleChange = (e) => {
        this.fireChange(getInputValue(e));
    };

    handleClick = value => () => {
        this.fireChange(value);
    };

    fireChange = (value) => {
        const { handleChange, disabled } = this.props;
        if (!disabled) {
            handleChange(value);
        }
    };

    render() {
        const {
            value, placeholder, options, width, disabled,
        } = this.props;
        const { isFocused, selected } = this.state;
        return (
            <StyledSelectField onBlur={ this.handleBlur } width={ width } onKeyDown={ this.handleKeyPress }>
                <Input
                    value={ value }
                    handleFocus={ this.handleFocus }
                    handleChange={ this.handleChange }
                    placeholder={ placeholder }
                    disabled={ disabled }
                />
                <Select
                    width={ width }
                    visible={ !disabled && isFocused }
                    options={ options }
                    selected={ selected }
                    onClick={ this.handleClick }
                />
                <StyledCaretDown />
            </StyledSelectField>
        );
    }
}

SelectField.propTypes = {
    /**
     * Array of possible values [ { value: 'Value', label: 'Label' }, ... ]
     */
    options: PropTypes.array,
    /**
     * Current value of Input component
     */
    value: PropTypes.any,
    /**
     * Function to handle Change on Input or Select
     */
    handleChange: PropTypes.func,
    /**
     * String definition of placeholder
     */
    placeholder: PropTypes.string,
    /**
     * String representation of preferred width of element
     */
    width: PropTypes.string,
    /**
     * Whether selectField is disabled or not
     */
    disabled: PropTypes.bool,
};

SelectField.defaultProps = {
    value: '',
    options: [],
    placeholder: '',
    width: '100%',
};

export { StyledSelectField };
export default SelectField;
