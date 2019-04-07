import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockExpansionPanel } from '../../mocks/data';
import ExpansionPanel from '../../src/lib/organisms/ExpansionPanel/index';

storiesOf('Organisms/ExpansionPanel', module)
    .add('ExpansionPanel', () => (
        <ExpansionPanel items={ mockExpansionPanel } />
    ))
    .add('ExpansionPanel with openSingle', () => (
        <ExpansionPanel items={ mockExpansionPanel } openSingle />
    ));
