import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from '../../src/lib/molecules/Paper/index';

storiesOf('Molecules/Paper', module)
    .add('Paper', () => (
        <Paper width="200px" height="200px">
            <h1>Children</h1>
        </Paper>
    ));
