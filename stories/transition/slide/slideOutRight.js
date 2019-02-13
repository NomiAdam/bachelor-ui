import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button';
import { SlideOutRight } from '../../../src/lib/transition/Slide';

storiesOf('Transition/Slide/SlideOutRight', module)
    .add('SlideOutRight', () => (
        <SlideOutRight>
            <Button onClick={ action('clicked') } label="Button" />
        </SlideOutRight>
    ));
