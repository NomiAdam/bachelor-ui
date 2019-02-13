import React from 'react';
import { storiesOf } from '@storybook/react';
import List, { ListItem } from '../../src/lib/molecules/List/index';

storiesOf('Molecules/List', module)
    .add('List', () => (
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
        </List>
    ));
