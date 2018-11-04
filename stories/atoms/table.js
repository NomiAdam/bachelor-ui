import React from 'react';
import {storiesOf} from '@storybook/react';
import { mockTableRowData } from '../../mocks/data';
import { action } from '@storybook/addon-actions';
import Table, { TableRow } from '../../src/lib/atoms/Table';

storiesOf('Atoms/Table', module)
    .add('Table', () => (
        <Table>
            <TableRow tableRowData={mockTableRowData} />
            <TableRow tableRowData={mockTableRowData} />
        </Table>
    ))
    .add('Table with edit', () => (
        <Table>
            <TableRow tableRowData={mockTableRowData} editable handleDelete={action('delete')} handleEdit={action('edit')}  />
            <TableRow tableRowData={mockTableRowData} editable handleDelete={action('delete')} handleEdit={action('edit')}  />
        </Table>
    )).add('Table with redirect', () => (
    <Table>
        <TableRow tableRowData={mockTableRowData} redirect handleRedirect={action('redirect')}  />
        <TableRow tableRowData={mockTableRowData} redirect handleRedirect={action('redirect')}  />
    </Table>
));
