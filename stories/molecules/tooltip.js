import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../../src/lib/molecules/Tooltip/index';
import { Button } from '../../src/lib/atoms/Button/index';
import Spacer from '../../src/lib/molecules/Spacer/index';

storiesOf('Molecules/Tooltip', module)
    .add('Tooltip', () => (
        <div>
            <Spacer height="100px" />
            <Tooltip label="Label">
                <Button label="Button" />
            </Tooltip>
        </div>
    ));
