import React from 'react';
import PropTypes from 'prop-types';
import {Grid, GridCol} from '../../../atoms/Grid/index';
import styled from 'styled-components';
import {map, length} from 'ramda';
import {lightTheme, basicTheme} from '../../../constants/theme'

const StyledTreeHeading = styled(GridCol)`
  border-bottom: 1px solid ${lightTheme.lightGrey};
  color: ${basicTheme.grey};
`;

const renderTableHeadingCell = (length) => ({label, id}) => (
    <GridCol key={id} colXS={Math.floor(10 / length)}>
        {label}
    </GridCol>
);
const renderTableHeading = (length) => map(renderTableHeadingCell(length));

const TreeHeading = ({headingData}) => (
    <StyledTreeHeading colXS={12}>
        <Grid padding={'20px'} gridGap={'0'}>
            <GridCol colXS={2}></GridCol>
            {renderTableHeading(length(headingData))(headingData)}
        </Grid>
    </StyledTreeHeading>
);

TreeHeading.propTypes = {
    /**
     * Array of possible tableHeadings, is expected array of
     * [{ label: 'label', colSpan: 2, id: 'name' }, ... ]
     */
    headingData: PropTypes.array,
};

TreeHeading.defaultProps = {
    headingData: [],
};

export default TreeHeading;
