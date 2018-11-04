import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldLabel from '../../src/lib/atoms/FieldLabel';

storiesOf('Atoms/FieldLabel', module)
    .add('FieldLabel', () => (
        <FieldLabel label={'Label'} />
    ))
    .add('Error FieldLabel', () => (
        <FieldLabel label={'Label'} error />
    ));
