import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '../../src/lib/molecules/Notification';

storiesOf('Molecules/Notification', module)
    .add('Success Notification', () => (
        <Notification open onClose={action('Close')} message={'Message'} variant={'success'} />
    ))
    .add('Error Notification', () => (
        <Notification open onClose={action('Close')} message={'Message'} variant={'error'} />
    ))
    .add('Warning Notification', () => (
        <Notification open onClose={action('Close')} message={'Message'} variant={'warning'} />
    ))
    .add('Info Notification', () => (
        <Notification open onClose={action('Close')} message={'Message'} variant={'info'} />
    ));
