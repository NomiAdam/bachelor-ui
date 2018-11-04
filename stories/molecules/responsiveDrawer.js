import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchField from '../../src/lib/molecules/SearchField';
import ResponsiveDrawer, { ResponsiveDrawer as Drawer } from '../../src/lib/molecules/ResponsiveDrawer/ResponsiveDrawer';

const drawerItems = (
    <ul>
        <li><a href="/">Link</a></li>
        <li><a href="/">AnotherLink</a></li>
    </ul>
);

storiesOf('Molecules/ResponsiveDrawer', module)
    .add('ResponsiveDrawer', () => (
        <Drawer handleClick={action('Click')} logo={'Logo'} navigation={drawerItems} />
    ))
    .add('ResponsiveDrawer mobileVersion', () => (
        <ResponsiveDrawer handleSwipeChange={action('SwipeChange')} logo={'Logo'} navigation={drawerItems} mobileVersion />
    ))
    .add('ResponsiveDrawer mobileVersion with Node', () => (
        <ResponsiveDrawer handleSwipeChange={action('SwipeChange')} logo={<SearchField placeholder={'SearchField'} />} navigation={drawerItems} mobileVersion />
    ));
