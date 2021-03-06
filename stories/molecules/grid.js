import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../src/lib/atoms/Heading/index';
import { Grid, GridCol, GridTile } from '../../src/lib/molecules/Grid/index';

storiesOf('Molecules/Grid', module)
    .add('Grid', () => (
        <Grid>
            <GridCol colXS={ 6 }>
                <Heading label="Grid colXS 6" />
            </GridCol>
            <GridCol colXS={ 6 }>
                <Heading label="Grid colXS 6" />
            </GridCol>
        </Grid>
    ))
    .add('GridTile', () => (
        <Grid padding={ 0 }>
            <GridTile colXS={ 6 } width="50px">
                <Heading label="Grid colXS 6" />
            </GridTile>
            <GridTile colXS={ 6 } width="50px">
                <Heading label="Grid colXS 6" />
            </GridTile>
        </Grid>
    ));
