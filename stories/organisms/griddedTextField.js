import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../../src/lib/atoms/Grid';
import GriddedTextField from '../../src/lib/organisms/GriddedTextField';

storiesOf('Organisms/GriddedTextField', module)
    .add('GriddedTextField', () => (
        <Grid>
            <GriddedTextField colXS={6} label={'colXS 6'}/>
            <GriddedTextField colXS={6} label={'colXS 6'}/>
        </Grid>
    ));
