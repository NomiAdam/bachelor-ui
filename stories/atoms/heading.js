import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../src/lib/atoms/Heading';

storiesOf('Atoms/Heading', module)
    .add('Heading', () => (
        <div>
            <Heading label="H1 component" component="h1" />
            <Heading label="H2 component" />
            <Heading label="H3 component with underline" underline width="100px" component="h3" />
        </div>
    ));
