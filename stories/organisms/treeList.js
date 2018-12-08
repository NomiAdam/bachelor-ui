import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mockTreeTableBody } from '../../mocks/data';
import TreeList from '../../src/lib/organisms/TreeList';

const Node = ({ id, value, date }) => <p>{`${ id }-${ value }-${ date }`}</p>;

storiesOf('Organisms/TreeList', module)
    .add('TreeList', () => (
        <div style={ { height: '600px', width: '600px' } }>
            <TreeList
                displayProps={ ['id', 'value', 'date'] }
                handleRedirect={ action('click') }
                redirect
                treeData={ mockTreeTableBody }
                dataProp="data"
                node={ Node }
            />
        </div>
    ));
