import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockSuggestions } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import Autocomplete from '../../src/lib/organisms/Autocomplete';

storiesOf('Organisms/Autocomplete', module)
    .add('Autocomplete', () => (
        <Autocomplete handleChange={action('Change')} suggestions={mockSuggestions} placeholder={'Placeholder'} />
    ));
