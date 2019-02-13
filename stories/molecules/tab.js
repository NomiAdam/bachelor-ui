import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockTabBar } from '../../mocks/data';
import Tab from '../../src/lib/molecules/Tab';

storiesOf('Molecules/Tab', module)
    .add('Tab', () => (
        <Tab handleClick={ action('Click') } tabOptions={ mockTabBar } />
    ));
