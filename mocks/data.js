import { IoIosArrowUp, IoEdit, IoHome } from 'react-icons/lib/io';

export const mockTableRowData = {
    id: 'id',
    cell: 'Cell 1',
    anotherCell: 'Cell 2',
    yetAnotherCell: 'Cell 3',
};

export const mockTreeTableBody = {
    first: {
        depth: 1,
        data: {
            id: 1,
            value: 'one',
            date: '2018-01-01',
        },
        children: {
            fourth: {
                depth: 2,
                data: {
                    id: 4,
                    value: 'fourth',
                    date: '2018-01-01',
                },
                children: {
                    first: {
                        depth: 3,
                        data: {
                            id: 5,
                            value: 'fifth',
                            date: '2018-01-01',
                        },
                        children: {
                            fourth: {
                                depth: 4,
                                data: {
                                    id: 6,
                                    value: 'sixth',
                                    date: '2018-01-01',
                                },
                                children: {},
                            },
                        },
                    },
                },
            },
        },
    },
    second: {
        depth: 1,
        data: {
            id: 2,
            value: 'two',
            date: '2018-01-01',
        },
        children: {},
    },
    third: {
        depth: 1,
        data: {
            id: 3,
            value: 'three',
            date: '2018-01-01',
        },
        children: {},
    },
    fourth: {
        depth: 1,
        data: {
            id: 4,
            value: 'one',
            date: '2018-01-01',
        },
        children: {
            fourth: {
                depth: 2,
                data: {
                    id: 4,
                    value: 'fourth',
                    date: '2018-01-01',
                },
                children: {
                    first: {
                        depth: 3,
                        data: {
                            id: 5,
                            value: 'fifth',
                            date: '2018-01-01',
                        },
                        children: {
                            fourth: {
                                depth: 4,
                                data: {
                                    id: 6,
                                    value: 'sixth',
                                    date: '2018-01-01',
                                },
                                children: {},
                            },
                        },
                    },
                },
            },
        },
    },
    fifth: {
        depth: 1,
        data: {
            id: 5,
            value: 'two',
            date: '2018-01-01',
        },
        children: {},
    },
    sixth: {
        depth: 1,
        data: {
            id: 6,
            value: 'three',
            date: '2018-01-01',
        },
        children: {},
    },
    seventh: {
        depth: 1,
        data: {
            id: 7,
            value: 'one',
            date: '2018-01-01',
        },
        children: {
            fourth: {
                depth: 2,
                data: {
                    id: 4,
                    value: 'fourth',
                    date: '2018-01-01',
                },
                children: {
                    first: {
                        depth: 3,
                        data: {
                            id: 5,
                            value: 'fifth',
                            date: '2018-01-01',
                        },
                        children: {
                            fourth: {
                                depth: 4,
                                data: {
                                    id: 6,
                                    value: 'sixth',
                                    date: '2018-01-01',
                                },
                                children: {},
                            },
                        },
                    },
                },
            },
        },
    },
    eighth: {
        depth: 1,
        data: {
            id: 8,
            value: 'two',
            date: '2018-01-01',
        },
        children: {},
    },
    ninth: {
        depth: 1,
        data: {
            id: 9,
            value: 'three',
            date: '2018-01-01',
        },
        children: {},
    },
    tenth: {
        depth: 1,
        data: {
            id: 10,
            value: 'one',
            date: '2018-01-01',
        },
        children: {
            fourth: {
                depth: 2,
                data: {
                    id: 4,
                    value: 'fourth',
                    date: '2018-01-01',
                },
                children: {
                    first: {
                        depth: 3,
                        data: {
                            id: 5,
                            value: 'fifth',
                            date: '2018-01-01',
                        },
                        children: {
                            fourth: {
                                depth: 4,
                                data: {
                                    id: 6,
                                    value: 'sixth',
                                    date: '2018-01-01',
                                },
                                children: {},
                            },
                        },
                    },
                },
            },
        },
    },
    elevnth: {
        depth: 1,
        data: {
            id: 11,
            value: 'two',
            date: '2018-01-01',
        },
        children: {},
    },
    tvelweth: {
        depth: 1,
        data: {
            id: 12,
            value: 'three',
            date: '2018-01-01',
        },
        children: {},
    },
};

export const stepperSteps = ['Step 1', 'Step 2', 'Step 3'];

export const mockSuggestions = [
    {
        value: 'value',
        label: 'Value',
    },
    {
        value: 'mock',
        label: 'Mock',
    },
    {
        value: 'test',
        label: 'Test',
    },
];

export const mockActionList = [
    {
        id: 1,
        date: '2018-03-03',
        header: 'Heading',
        subHeader: 'SubHeading',
        active: false,
    },
    {
        id: 2,
        date: '2018-01-01',
        header: 'Hola',
        subHeader: 'Hola',
        active: true,
    },
    {
        id: 3,
        date: '2018-04-04',
        header: 'Mock',
        subHeader: 'Mcok',
        active: false,
    },
    {
        id: 4,
        date: '2018-06-06',
        header: 'Meh',
        subHeader: 'Meh',
        active: false,
    },
];

export const mockBottomNavigation = [
    {
        icon: IoEdit,
        label: 'Edit',
        id: 'edit',
    },
    {
        icon: IoIosArrowUp,
        label: 'Arrow',
        id: 'arrow',
    },
    {
        icon: IoHome,
        label: 'Home',
        id: 'home',
    },
];

export const mockExpansionPanel = [
    {
        heading: 'One',
        body: 'One body',
    },
    {
        heading: 'Two',
        body: 'Two body',
    },
    {
        heading: 'Three',
        body: 'Three body',
    },
];

export const mockHeading = [
    {
        id: 'test',
        label: 'label',
    },
    {
        id: 'another',
        label: 'another',
    },
];

export const mockNativeSelect = [
    {
        value: 'jezevec',
        label: 'Jezevec',
    },
    {
        value: 'stika',
        label: 'Štika',
    },
    {
        value: 'jester',
        label: 'Ještěr',
    },
];

export const mockTabBar = ['TabOne', 'TabTwo', 'TabThree', 'TabFour', 'TabFive'];

export const mockTableBody = [
    {
        id: 1,
        key: 'dataOne',
        another: 'moreDataOne',
    },
    {
        id: 2,
        key: 'dataTwo',
        another: 'moreDataTwo',
    },
    {
        id: 3,
        key: 'dataThree',
        another: 'moreDataThree',
    },
    {
        id: 1,
        key: 'dataOne',
        another: 'moreDataOne',
    },
    {
        id: 2,
        key: 'dataTwo',
        another: 'moreDataTwo',
    },
    {
        id: 3,
        key: 'dataThree',
        another: 'moreDataThree',
    },
    {
        id: 1,
        key: 'dataOne',
        another: 'moreDataOne',
    },
    {
        id: 2,
        key: 'dataTwo',
        another: 'moreDataTwo',
    },
    {
        id: 3,
        key: 'dataThree',
        another: 'moreDataThree',
    },
    {
        id: 1,
        key: 'dataOne',
        another: 'moreDataOne',
    },
    {
        id: 2,
        key: 'dataTwo',
        another: 'moreDataTwo',
    },
    {
        id: 3,
        key: 'dataThree',
        another: 'moreDataThree',
    },
];

export const mockTimeSheet = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
];

export const mockTableChecked = {
    test: { label: 'Label', value: [1, 2, 4] },
    anotherTest: { label: 'Test', value: [0, 1, 3] },
};
