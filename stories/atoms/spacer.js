import React from 'react';
import {storiesOf} from '@storybook/react';
import Spacer from '../../src/lib/atoms/Spacer';

storiesOf('Atoms/Spacer', module)
    .add('Spacer', () => (
        <div>
            <h2>0px</h2>
            <Spacer width={'50px'}/>
            <h2>51px</h2>
        </div>
    ));
