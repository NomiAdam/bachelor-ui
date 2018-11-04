import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from '../../../src/lib/atoms/Button/index';
import {lightTheme, darkTheme} from '../../../src/lib/constants/theme';

storiesOf('constants/Theme/Light', module)
    .add('Light', () => (
        <div>
            <Button background={lightTheme.white} onClick={action('clicked')} label={'white'} color={darkTheme.black}/>

            <Button background={lightTheme.whiteBlue} onClick={action('clicked')} label={'whiteBlue'} color={darkTheme.black} />

            <Button background={lightTheme.lightGrey} onClick={action('clicked')} label={'lightGrey'} color={darkTheme.black} />

            <Button background={lightTheme.lightGreen} onClick={action('clicked')} label={'lightGreen'}/>

            <Button background={lightTheme.lightOrange} onClick={action('clicked')} label={'lightOrange'}/>

            <Button background={lightTheme.lightBlue} onClick={action('clicked')} label={'lightBlue'}/>

            <Button background={lightTheme.lightPurple} onClick={action('clicked')} label={'lightPurple'}/>
        </div>
    ));
