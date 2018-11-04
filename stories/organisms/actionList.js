import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockActionList } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import ActionList from '../../src/lib/organisms/ActionList';

storiesOf('Organisms/ActionList', module)
    .add('ActionList', () => (
        <ActionList handleIconClick={action('Icon click')} handleItemClick={action('Item click')} listItems={mockActionList} />
    ));
