import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridCol } from '../../../atoms/Grid/index';
import styled from 'styled-components';
import ActionDate from './ActionDate';
import ActionIcon from './ActionIcon';
import ActionListLabel from './ActionListLabel';
import { darkTheme, lightTheme } from '../../../constants/theme';

const StyledListItem = styled.li`
    overflow: hidden;
    width: 100%;
    min-height: 100px;
    background-color: ${lightTheme.white};
    box-shadow: .1px .1px .1px ${darkTheme.darkGrey};
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${lightTheme.whiteBlue};
    }
`;

const ActionListItem = ({ dateTime, header, subHeader, isIconActive, handleClick, handleIconClick, isAction }) => (
<StyledListItem>
    <Grid>
        <GridCol colXS={3} colMD={2}>
            <ActionDate dateTime={dateTime}/>
        </GridCol>
        <GridCol colXS={8} colMD={9}>
            <ActionListLabel isAction={isAction} header={header} subHeader={subHeader} handleClick={handleClick}/>
        </GridCol>
        <GridCol colXS={1} colMD={1}>
            <ActionIcon isIconActive={isIconActive} handleIconClick={handleIconClick}/>
        </GridCol>
    </Grid>
</StyledListItem>
);

ActionListItem.propTypes = {
    /**
     * String definition of JS native date object
     */
    dateTime: PropTypes.string,
    /**
     * String definition of label header
     */
    header: PropTypes.string,
    /**
     * String definition of Label subHeader
     */
    subHeader: PropTypes.string,
    /**
     * Boolean indicating whether icon is active on not
     */
    isIconActive: PropTypes.bool,
    /**
     * Function to be called upon ListItem click
     */
    handleClick: PropTypes.func,
    /**
     * Function to be called upon icon click,
     */
    handleIconClick: PropTypes.func,
    /**
     * Boolean indicating whether we use list for actions,
     * Is case of true pointer css will be set and so on
     */
    isAction: PropTypes.bool,
};

export { StyledListItem };
export default ActionListItem;
