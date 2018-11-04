import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Overlay from '../../src/lib/atoms/Overlay';

storiesOf('Atoms/Overlay', module)
    .add('Overlay centered', () => (
        <Overlay isOpen heading={'Heading'} verticalPosition={'center'} handleClose={action('Close')}/>
    ));
