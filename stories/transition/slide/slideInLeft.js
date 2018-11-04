import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from '../../../src/lib/atoms/Button';
import {SlideInLeft} from '../../../src/lib/transition/Slide';

storiesOf('Transition/Slide/SlideInLeft', module)
    .add('SlideInLeft', () => (
        <SlideInLeft>
            <Button onClick={action('clicked')} label={'Button'}/>
        </SlideInLeft>
    ));
