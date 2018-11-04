import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../../src/lib/molecules/Dialog';
import Button from '../../src/lib/atoms/Button';

const renderDialogAction = () => (
    <Button label={'Button'}/>
);

const mockHeading = <h1>Hoola</h1>;

const mockComponents = () => (
    <div>
        <h1>Content heading</h1>
        <p>Content</p>
    </div>
);

storiesOf('Molecules/Dialog', module)
    .add('Dialog', () => (
        <Dialog isOpen={true} heading={mockHeading} renderActionChildren={renderDialogAction} >
            { mockComponents() }
        </Dialog>
    ));
