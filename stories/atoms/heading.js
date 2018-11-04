import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../src/lib/atoms/Heading';

storiesOf('Atoms/Heading', module)
    .add('H2 Heading', () => (
        <Heading label={'H2 component'} />
    ))
    .add('H3 Heading', () => (
        <Heading label={'H3 component'} component={'h3'} />
    ));
