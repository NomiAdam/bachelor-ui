import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from '../../src/lib/atoms/Divider';

storiesOf('Atoms/Divider', module)
    .add('Divider', () => (
        <Divider color={'Black'} />
    ));
