import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar, ProgressArc } from '../../src/lib/atoms/ProgressBar';

storiesOf('Atoms/ProgressBar', module)
    .add('ProgressBar', () => (
        <ProgressBar label={'Label'} value={50}/>
    )).add('ProgressArc', () => (
    <ProgressArc label={'Label'} value={25} width={'200px'} height={'200px'}/>
));
