import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from '../../src/lib/organisms/TextField/index';

storiesOf('Organisms/TextField', module)
    .add('TextField', () => (
        <TextField onChange={ action('Change') } label="Label" />
    ))
    .add('TextField number', () => (
        <TextField onChange={ action('Change') } type="number" label="Label" />
    ))
    .add('TextField multiline', () => (
        <TextField onChange={ action('Change') } multiLine rows={ 20 } label="Label" />
    ))
    .add('TextField with icon', () => (
        <TextField onChange={ action('Change') } label="Label" displayIcon />
    ))
    .add('TextField with icon error', () => (
        <TextField onChange={ action('Change') } label="Label" displayIcon error />
    ));
