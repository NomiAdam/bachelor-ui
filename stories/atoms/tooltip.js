import React from 'react';
import {storiesOf} from '@storybook/react';
import Tooltip from '../../src/lib/atoms/Tooltip';
import Button from '../../src/lib/atoms/Button';
import Spacer from '../../src/lib/atoms/Spacer';

storiesOf('Atoms/Tooltip', module)
    .add('Tooltip', () => (
        <div>
            <Spacer height={'100px'}/>
            <Tooltip label={'Label'}>
                <Button label={'Button'}/>
            </Tooltip>
        </div>
    ));
