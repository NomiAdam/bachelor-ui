import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { BounceIn } from '../../../src/lib/transition/Bounce';

storiesOf('Transition/Bounce/BounceIn', module)
    .add('BounceIn', () => (
        <BounceIn>
            <Button onClick={ action('clicked') } label="Button" />
        </BounceIn>
    ));
