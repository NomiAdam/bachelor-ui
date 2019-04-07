import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as Provider } from 'styled-components';

class ThemeProvider extends Component {
    shouldComponentUpdate(prevProps) {
        const { theme } = this.props;
        return JSON.stringify(prevProps.theme) !== JSON.stringify(theme);
    }

    render() {
        const { theme, children } = this.props;
        return (
            <Provider theme={ theme }>
                {children}
            </Provider>
        );
    }
}

ThemeProvider.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object,
};

export default ThemeProvider;
