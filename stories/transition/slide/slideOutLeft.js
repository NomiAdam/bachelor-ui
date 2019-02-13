import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { SlideOutLeft } from '../../../src/lib/transition/Slide';

storiesOf('Transition/Slide/SlideOutLeft', module)
    .add('SlideOutLeft', () => (
        <SlideOutLeft>
            <Button onClick={ action('clicked') } label="Button" />
        </SlideOutLeft>
    ));
