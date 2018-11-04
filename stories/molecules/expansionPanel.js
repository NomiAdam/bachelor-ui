import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockExpansionPanel } from '../../mocks/data';
import ExpansionPanel from '../../src/lib/molecules/ExpansionPanel';

storiesOf('Molecules/ExpansionPanel', module)
    .add('ExpansionPanel', () => (
        <ExpansionPanel items={mockExpansionPanel} />
    ))
    .add('ExpansionPanel with openSingle', () => (
        <ExpansionPanel items={mockExpansionPanel} openSingle />
    ));
