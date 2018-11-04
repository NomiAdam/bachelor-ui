import React from 'react';
import {storiesOf} from '@storybook/react';
import Checkbox from '../../src/lib/atoms/Checkbox';
import {LABEL_POSITION} from '../../src/lib/atoms/Checkbox/constants/position';

storiesOf('Atoms/Checkbox', module)
    .add('Checked', () => (
        <div>
            <Checkbox checked/>
        </div>
    )).add('Unchecked', () => (
    <Checkbox checked={false}/>))
    .add('Label on left', () => (
        <Checkbox label={'Label'} checked={false} labelPosition={LABEL_POSITION.LEFT}/>))
    .add('Label of right', () => (
        <Checkbox label={'Label'} checked={false} labelPosition={LABEL_POSITION.RIGHT}/>
    ));
