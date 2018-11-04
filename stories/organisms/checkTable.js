import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockTimeSheet, mockTableChecked } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import CheckTable from '../../src/lib/organisms/CheckTable';

storiesOf('Organisms/CheckTable', module)
    .add('CheckTable', () => (
        <CheckTable handleChange={action('Change')} timeSheet={mockTimeSheet} selected={mockTableChecked} />
    )).add('CheckTable with Checkbox', () => (
    <CheckTable handleChange={action('Change')} timeSheet={mockTimeSheet} selected={mockTableChecked} isCheckbox />
));
