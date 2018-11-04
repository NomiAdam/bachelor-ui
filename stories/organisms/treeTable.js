import React from 'react';
import {storiesOf} from '@storybook/react';
import {mockHeading} from '../../mocks/data';
import {action} from '@storybook/addon-actions';
import TreeTable from '../../src/lib/organisms/TreeTable';
import { mockTreeTableBody } from '../../mocks/data';

storiesOf('Organisms/TreeTable', module)
    .add('TreeTable', () => (
        <TreeTable
            displayProps={['id']}
            headingData={mockHeading}
            handleRedirect={action('click')}
            redirect
            treeData={mockTreeTableBody}
            dataProp={'data'}
        />
    ));
