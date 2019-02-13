import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button/index';
import { darkTheme } from '../../../src/lib/constants/theme';

storiesOf('constants/Theme/Dark', module)
    .add('Dark', () => (
        <div>
            <Button backgroundColor={ darkTheme.black } color="white" onClick={ action('clicked') } label="black" />

            <Button
                backgroundColor={ darkTheme.darkGrey }
                color="white"
                onClick={ action('clicked') }
                label="darkGrey"
            />

            <Button
                backgroundColor={ darkTheme.darkBlue }
                color="white"
                onClick={ action('clicked') }
                label="darkBlue"
            />

            <Button
                backgroundColor={ darkTheme.darkOrange }
                color="white"
                onClick={ action('clicked') }
                label="darkOrange"
            />

            <Button
                backgroundColor={ darkTheme.darkPurple }
                color="white"
                onClick={ action('clicked') }
                label="darkPurple"
            />
        </div>
    ));
