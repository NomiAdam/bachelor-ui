import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { SlideInRight } from '../../../src/lib/transition/Slide';

storiesOf('Transition/Slide/SlideInRight', module)
    .add('SlideInRight', () => (
        <SlideInRight>
            <Button onClick={ action('clicked') } label="Button" />
        </SlideInRight>
    ));
