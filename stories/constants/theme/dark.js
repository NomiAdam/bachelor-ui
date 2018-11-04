import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from '../../../src/lib/atoms/Button/index';
import {darkTheme} from '../../../src/lib/constants/theme';

storiesOf('constants/Theme/Dark', module)
    .add('Dark', () => (
        <div>
            <Button background={darkTheme.black} onClick={action('clicked')} label={'black'}/>

            <Button background={darkTheme.darkGrey} onClick={action('clicked')} label={'darkGrey'}/>

            <Button background={darkTheme.darkBlue} onClick={action('clicked')} label={'darkBlue'}/>

            <Button background={darkTheme.darkOrange} onClick={action('clicked')} label={'darkOrange'}/>

            <Button background={darkTheme.darkPurple} onClick={action('clicked')} label={'darkPurple'}/>
        </div>
    ));
