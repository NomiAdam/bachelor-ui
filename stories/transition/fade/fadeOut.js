import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { FadeOut } from '../../../src/lib/transition/Fade';

storiesOf('Transition/Fade/FadeOut', module)
    .add('FadeOut', () => (
        <FadeOut>
            <Button onClick={ action('clicked') } label="Button" />
        </FadeOut>
    ));
