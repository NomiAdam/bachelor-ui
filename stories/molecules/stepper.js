import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Stepper from '../../src/lib/molecules/Stepper';
import { stepperSteps } from '../../mocks/data';

storiesOf('Molecules/Stepper', module)
    .add('Stepper', () => (
        <Stepper handleClick={action('Click')} items={stepperSteps} step={2} />
    ));
