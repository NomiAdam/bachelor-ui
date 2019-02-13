import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchField from '../../src/lib/molecules/SearchField';

storiesOf('Molecules/SearchField', module)
    .add('SearchField', () => (
        <SearchField handleClear={ action('Clear') } onChange={ action('Change') } placeholder="Placeholder" />
    ));
