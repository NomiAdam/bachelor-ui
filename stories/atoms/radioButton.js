import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from '../../src/lib/atoms/RadioButton/index';

storiesOf('Atoms/RadioButton', module)
    .add('RadioButton checked', () => (
        <RadioButton label="Label" handleChange={ action('Change') } handleClick={ action('Click') } checked />
    ))
    .add('RadioButton unchecked', () => (
        <RadioButton label="Label" handleChange={ action('Change') } handleClick={ action('Click') } />
    ))
    .add('RadioButton disabled', () => (
        <RadioButton label="Label" disabled handleChange={ action('Change') } handleClick={ action('Click') } />
    ));
