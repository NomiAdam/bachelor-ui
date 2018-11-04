import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NativeDatepicker from '../../src/lib/atoms/NativeDatepicker';

storiesOf('Atoms/NativeDatepicker', module)
    .add('NativeDatepicker', () => (
        <NativeDatepicker label={'Label'} onChange={action('Change')}/>
    ));
