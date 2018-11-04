import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockBottomNavigation } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import BottomNavigation from '../../src/lib/molecules/BottomNavigation';

storiesOf('Molecules/BottomNavigation', module)
    .add('BottomNavigation', () => (
        <BottomNavigation handleClick={action('click')} items={mockBottomNavigation} />
    ));
