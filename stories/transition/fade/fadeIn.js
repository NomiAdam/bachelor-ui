import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { FadeIn } from '../../../src/lib/transition/Fade';

storiesOf('Transition/Fade/FadeIn', module)
    .add('FadeIn', () => (
        <FadeIn>
            <Button onClick={ action('clicked') } label="Button" />
        </FadeIn>
    ));
