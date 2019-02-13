import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../src/lib/atoms/Heading/index';
import Container from '../../src/lib/organisms/Container/index';

storiesOf('Organisms/Container', module)
    .add('Container', () => (
        <Container>
            <Heading component="h1" label="Basic flex-box container" />
        </Container>
    ));
