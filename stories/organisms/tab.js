import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockTabBar } from '../../mocks/data';
import Tab from '../../src/lib/organisms/Tab/index';

storiesOf('Organisms/Tab', module)
    .add('Tab', () => (
        <Tab handleClick={ action('Click') } tabOptions={ mockTabBar } />
    ));
