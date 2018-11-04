import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockNativeSelect } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import NativeSelectField from '../../src/lib/molecules/NativeSelectField';

storiesOf('Molecules/NativeSelectField', module)
    .add('NativeSelectField', () => (
        <NativeSelectField onChange={action('Change')} onBlur={action('Blur')} options={mockNativeSelect} />
    ));
