import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../../src/lib/molecules/Dialog';
import { Button } from '../../src/lib/atoms/Button';

const mockHeading = <h1>Hoola</h1>;

const mockComponents = () => (
    <div>
        <h1>Content heading</h1>
        <p>Content</p>
    </div>
);

storiesOf('Molecules/Dialog', module)
    .add('Dialog', () => (
        <Dialog
            isOpen
            heading={ mockHeading }
            backgroundColor="pink"
            actionChildren={ <Button label="Button" /> }
        >
            { mockComponents() }
        </Dialog>
    ));
