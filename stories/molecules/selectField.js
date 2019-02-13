import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockNativeSelect } from '../../mocks/data';
import Spacer from '../../src/lib/atoms/Spacer';
import SelectField from '../../src/lib/molecules/SelectField';

storiesOf('Molecules/SelectField', module)
    .add('SelectField', () => (
        <div>
            <Spacer width="50px" />
            <SelectField
                handleChange={ action('Change') }
                onBlur={ action('Blur') }
                options={ mockNativeSelect }
                value="Jezevec"
            />
        </div>
    ));
