import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../src/lib/atoms/Button/index';
import { basicTheme } from '../../../src/lib/constants/theme';

storiesOf('constants/Theme/Basic', module)
    .add('Basic', () => (
        <div>
            <Button backgroundColor={ basicTheme.blue } onClick={ action('clicked') } label="blue" />

            <Button backgroundColor={ basicTheme.red } onClick={ action('clicked') } label="red" />

            <Button backgroundColor={ basicTheme.green } onClick={ action('clicked') } label="green" />

            <Button backgroundColor={ basicTheme.purple } onClick={ action('clicked') } label="purple" />

            <Button backgroundColor={ basicTheme.orange } onClick={ action('clicked') } label="orange" />

            <Button backgroundColor={ basicTheme.grey } onClick={ action('clicked') } label="grey" />
        </div>
    ));
