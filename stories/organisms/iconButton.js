import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IoReply } from 'react-icons/lib/io';
import IconButton from '../../src/lib/organisms/IconButton';

storiesOf('Organisms/IconButton', module)
    .add('Icon button', () => (
        <IconButton onClick={ action('clicked') } label="Button" icon={ <IoReply /> } />
    ));
