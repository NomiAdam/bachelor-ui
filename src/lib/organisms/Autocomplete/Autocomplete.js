import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    path,
    contains,
    filter,
    o,
    prop,
    toLower,
    head,
    propOr,
    propEq,
    when,
    findIndex,
    dec,
    add,
    nth,
} from 'ramda';
import {isNilOrEmptyString, isNotNil} from 'ramda-extension';
import Input from './Input';
import Select from './Select';

const getInputValue = path(['target', 'value']);

const getFirstSuggestionValue = o(propOr('', 'value'), head);
const getCurrentIndex = (value) => findIndex(propEq('value', value));
const getNextValue = when(isNotNil, prop('value'));

const StyledAutocomplete = styled.div`
    width: 100%;
    position: relative;
`;

class Autocomplete extends Component {
    state = {
        value: this.props.value,
        isFocused: false,
        selected: '',
        filteredSuggestions: this.props.suggestions,
    };

    componentDidMount() {
        const {value, suggestions} = this.props;
        if (isNilOrEmptyString(value)) {
            this.setState({selected: getFirstSuggestionValue(suggestions)})
        } else {
            this.handleStateChange(value);
            this.setState({selected: value})
        }
    };

    handleFocus = () => {
        this.setState({isFocused: true});
    };

    handleBlur = () => {
        this.setState({isFocused: false});
    };

    handleValueChange = (e) => this.handleStateChange(getInputValue(e));

    handleSelect = (value) => () => {
        this.handleStateChange(value);
        const {handleChange} = this.props;
        handleChange(value);
        this.handleBlur();
    };

    handleStateChange = (value) => {
        const {suggestions} = this.props;

        const matchString = contains(toLower(value));
        const validatedMatchingValue = o(toLower, prop('value'));
        const matchFilter = o(matchString, validatedMatchingValue);
        const validatedSuggestions = filter(matchFilter);

        this.setState({
            value,
            filteredSuggestions: validatedSuggestions(suggestions)
        });
    };

    handleKeyPress = (e) => {
        const {selected} = this.state;
        const {suggestions} = this.props;
        const index = getCurrentIndex(selected)(suggestions);
        switch (e.key) {
            case 'ArrowUp': {
                const getValueOfNext = nth(dec(index, 1), suggestions);
                this.setState({selected: getNextValue(getValueOfNext) || selected});
            }
                break;
            case 'ArrowDown': {
                const getValueOfNext = nth(add(index, 1), suggestions);
                this.setState({selected: getNextValue(getValueOfNext) || selected});
            }
                break;
            case 'Enter':
                this.handleSelect(selected)(e);
                break;
        }
    };

    render() {
        const {placeholder} = this.props;
        const {isFocused, value, selected, filteredSuggestions} = this.state;
        return (
            <StyledAutocomplete onBlur={this.handleBlur} onKeyDown={this.handleKeyPress}>
                <Input
                    value={value}
                    handleFocus={this.handleFocus}
                    handleChange={this.handleValueChange}
                    handleEnter={this.handleEnter}
                    placeholder={placeholder}
                />
                <Select
                    visible={isFocused}
                    suggestions={filteredSuggestions}
                    onClick={this.handleSelect}
                    selected={selected}
                    handleKeyPress={this.handleKeyPress}
                />
            </StyledAutocomplete>
        );

    }
}

Autocomplete.propTypes = {
    /**
     * Array of possible values [ { value: 'Value', label: 'Label' }, ... ]
     */
    suggestions: PropTypes.array,
    /**
     * Current value of Input component
     */
    value: PropTypes.string,
    /**
     * Function to handle Change on Input or Select
     */
    handleChange: PropTypes.func,
    /**
     * String definition of placeholder
     */
    placeholder: PropTypes.string,
};

Autocomplete.defaultProps = {
    value: '',
    suggestions: [],
    placeholder: '',
};

export {StyledAutocomplete};
export default Autocomplete;
