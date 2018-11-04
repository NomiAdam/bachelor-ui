/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableBody from '../TableBody';
import {TableRow} from '../../../../atoms/Table/index';

const bodyData = [
    {
        key: 'Adam, Cell-1',
        another: 2,
        fuck: 'Row-1, Cell-3',
    },
    {
        key: 'Lukáš, Cell-1',
        another: 1,
    },
    {
        key: 'Anna, Cell-1',
        another: 6,
    },
    {
        key: 'Zikmund, Cell-1',
        another: 3,
    },
    {
        key: 'David, Cell-1',
        another: 8,
    },
    {
        key: 'Běta, Cell-1',
        another: 1,
    },
    {
        key: 'Karlos, Cell-1',
        another: 9,
    },
];

const mockPage = 1;
const mockRowsPerPage = 5;

const mockEdit = jest.fn();
const mockDelete = jest.fn();
const mockRedirect = jest.fn();

const renderTableBody = (
    <TableBody
        page={mockPage}
        rowsPerPage={mockRowsPerPage}
        order={'asc'}
        orderBy={'key'}
        handleEdit={mockEdit}
        handleDelete={mockDelete}
        handleRedirect={mockRedirect}
    />
);
const renderTableBodyEditable = (
    <TableBody
        page={mockPage}
        rowsPerPage={mockRowsPerPage}
        order={'asc'}
        orderBy={'key'}
        handleEdit={mockEdit}
        handleDelete={mockDelete}
        columnData={bodyData}
        handleRedirect={mockRedirect}
        editable
    />
);

describe('TableBody', () => {
    it('should be defined', () => {
        expect(TableBody).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(renderTableBody)).toMatchSnapshot();
    });
    it('should match the snapshot when editable', () => {
        expect(shallow(renderTableBodyEditable)).toMatchSnapshot();
    });
    it('should be of type tbody', () => {
        expect(shallow(renderTableBody).type()).toBe('tbody');
    });
    it('should have the same number of TableRows as are mockRowsPerPage', () => {
        const wrapper = shallow(renderTableBody);
        wrapper.setProps({ columnData: bodyData });
        expect(wrapper.find(TableRow).length).toBe(mockRowsPerPage);
    });
});
