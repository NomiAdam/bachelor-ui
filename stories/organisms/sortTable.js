import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockTableBody, mockHeading } from '../../mocks/data';
import SortTable from '../../src/lib/organisms/SortTable';

storiesOf('Organisms/SortTable', module)
    .add('SortTable', () => (
        <SortTable handleChange={ action('Change') } headingData={ mockHeading } bodyData={ mockTableBody } />
    )).add('SortTable editable', () => (
        <SortTable editable headingData={ mockHeading } bodyData={ mockTableBody } />
    )).add('SortTable without pagination', () => (
        <SortTable pagination={ false } headingData={ mockHeading } bodyData={ mockTableBody } />
    ));
