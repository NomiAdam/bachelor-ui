import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from '../../src/lib/atoms/Icon';

storiesOf('Atoms/Icon', module)
    .add('Basic arrowBack Icon', () => (
        <Icon onClick={ action('clicked') } clickable name="arrowBack" />
    ));
