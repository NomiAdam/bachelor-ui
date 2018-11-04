import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Input from '../../src/lib/atoms/Input';

storiesOf('Atoms/Input', module)
    .add('Input', () => (
        <Input onChange={action('Change')} />
    ))
    .add('Input with icon', () => (
        <Input displayIcon onChange={action('Change')} />
    ))
    .add('Error Input with icon', () => (
        <Input displayIcon error onChange={action('Change')} />
    ));
