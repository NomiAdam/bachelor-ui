import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../../src/lib/atoms/Icon';

storiesOf('Atoms/Icon', module)
    .add('Basic arrowBack Icon', () => (
        <Icon name="arrowBack" />
    ));
