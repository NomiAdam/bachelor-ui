import React from 'react';
import { storiesOf } from '@storybook/react';
import List, { ListItem } from '../../src/lib/atoms/List';

storiesOf('Atoms/List', module)
    .add('List', () => (
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
        </List>
    ));
