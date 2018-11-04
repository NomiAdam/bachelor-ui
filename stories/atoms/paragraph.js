import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from '../../src/lib/atoms/Paragraph';

storiesOf('Atoms/Paragraph', module)
    .add('Paragraph', () => (
        <Paragraph color={'red'} size={'2em'}>
            Text
        </Paragraph>
    ));
