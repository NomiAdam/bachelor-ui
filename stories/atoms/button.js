import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { RoundButton } from '../../src/lib/atoms/Button';

storiesOf('Atoms/Button', module)
    .add('Basic button', () => (
        <Button onClick={action('clicked')} label={'Button'} />
    ))
    .add('Round button', () => (
        <RoundButton onClick={action('clicked')} />
    ));
