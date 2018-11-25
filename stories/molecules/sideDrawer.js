import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideDrawer from '../../src/lib/molecules/SideDrawer';

storiesOf('Molecules/SideDrawer', module)
    .add('SideDrawer', () => (
        <SideDrawer handleSwipeChange={ action('SwipeChange') }>
            <div>
                <p>TEstwwTEstwwwwwTEstwwwwwTEstwwwwwTEstwwwwwTEstwwwwwTEstwwwwwwww</p>
            </div>
            <div>
                <p>TEst</p>
            </div>
            <div>
                <p>TEst</p>
            </div>
        </SideDrawer>
    ));
