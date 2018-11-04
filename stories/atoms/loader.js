import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../../src/lib/atoms/Loader';

storiesOf('Atoms/Loader', module)
    .add('Loader', () => (
        <Loader />
    ));
