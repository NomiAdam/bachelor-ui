import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchField from '../../src/lib/organisms/SearchField/index';

storiesOf('Organisms/SearchField', module)
    .add('SearchField', () => (
        <SearchField
            handleClear={ action('Clear') }
            value="asdasdasdasdasdas"
            onChange={ action('Change') }
            placeholder="Placeholder"
        />
    ));
