import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { BounceOut } from '../../../src/lib/transition/Bounce';

storiesOf('Transition/Bounce/BounceOut', module)
    .add('BounceOut', () => (
        <BounceOut>
            <Button onClick={ action('clicked') } label="Button" />
        </BounceOut>
    ));
