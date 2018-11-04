import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from '../../../src/lib/atoms/Button/index';
import {basicTheme} from '../../../src/lib/constants/theme';

storiesOf('constants/Theme/Basic', module)
    .add('Basic', () => (
        <div>
            <Button background={basicTheme.blue} onClick={action('clicked')} label={'blue'}/>

            <Button background={basicTheme.red} onClick={action('clicked')} label={'red'}/>

            <Button background={basicTheme.green} onClick={action('clicked')} label={'green'}/>

            <Button background={basicTheme.purple} onClick={action('clicked')} label={'purple'}/>

            <Button background={basicTheme.orange} onClick={action('clicked')} label={'orange'}/>

            <Button background={basicTheme.grey} onClick={action('clicked')} label={'grey'}/>
        </div>
    ));
