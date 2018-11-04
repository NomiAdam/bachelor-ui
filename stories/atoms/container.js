import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../src/lib/atoms/Heading';
import Container from '../../src/lib/atoms/Container';

storiesOf('Atoms/Container', module)
    .add('Container', () => (
        <Container>
            <Heading component={'h1'} label={'Basic flex-box container'}/>
        </Container>
    ));
