import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IoReply } from 'react-icons/lib/io';
import { RoundButton, Button, IconButton } from '../../src/lib/atoms/Button';

storiesOf('Atoms/Button', module)
    .add('Basic button', () => (
        <Button onClick={ action('clicked') } label="Button" />
    ))
    .add('Icon button', () => (
        <IconButton onClick={ action('clicked') } label="Button" icon={ <IoReply /> } />
    ))
    .add('Round button', () => (
        <RoundButton onClick={ action('clicked') } />
    ));
