import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from '../../src/lib/organisms/Paper/index';

storiesOf('Organisms/Paper', module)
    .add('Paper', () => (
        <Paper width="200px" height="200px">
            <h1>Children</h1>
        </Paper>
    ));
