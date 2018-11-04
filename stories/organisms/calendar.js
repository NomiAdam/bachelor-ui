import React from 'react';
import { storiesOf } from '@storybook/react';
import Calendar from '../../src/lib/organisms/Calendar';

storiesOf('Organisms/Calendar', module)
    .add('Calendar', () => (
        <Calendar />
    ));
