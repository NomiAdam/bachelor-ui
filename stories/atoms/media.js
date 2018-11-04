import React from 'react';
import { storiesOf } from '@storybook/react';
import Media from '../../src/lib/atoms/Media';

storiesOf('Atoms/Media', module)
    .add('Media', () => (
        <Media src={'https://www.w3schools.com/w3images/fjords.jpg'} height={'200px'} width={'200px'} />
    ));
