import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../../src/lib/organisms/Checkbox/index';
import { LABEL_POSITION } from '../../src/lib/organisms/Checkbox/constants/position';

storiesOf('Molecules/Checkbox', module)
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
