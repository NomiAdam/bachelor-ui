import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockNativeSelect } from '../../mocks/data';
import NativeSelectField from '../../src/lib/atoms/NativeSelectField/index';

storiesOf('Atoms/NativeSelectField', module)
    .add('NativeSelectField', () => (
        <NativeSelectField onChange={ action('Change') } onBlur={ action('Blur') } options={ mockNativeSelect } />
    ));
