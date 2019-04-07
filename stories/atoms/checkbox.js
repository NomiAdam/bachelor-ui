import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../../src/lib/atoms/Checkbox/index';
import { LABEL_POSITION } from '../../src/lib/atoms/Checkbox/constants/position';

storiesOf('Atoms/Checkbox', module)
    .add('Checked', () => (
        <Checkbox checked />
    )).add('Unchecked', () => (
        <Checkbox checked={ false } />))
    .add('Disabled', () => (
        <Checkbox checked={ false } disabled />))
    .add('Label on left', () => (
        <Checkbox label="Label" checked={ false } labelPosition={ LABEL_POSITION.LEFT } />))
    .add('Label of right', () => (
        <Checkbox label="Label" checked={ false } labelPosition={ LABEL_POSITION.RIGHT } />
    ));
