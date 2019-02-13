import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { equals, map } from 'ramda';
import TabCell from './TabCell';
import Border from './Border';
import { lightTheme } from '../../constants/theme';
import { maxTablet } from '../../constants/device';
import DEFAULT_THEME from '../../utils/resolveTheme';

const StyledTabBarWrapper = styled.div`
    ${ DEFAULT_THEME }
    border: none;
    overflow: hidden;
    box-shadow:  0 2px 5px ${ lightTheme.lightGrey };
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: ${ ({ align }) => align };
    @media ${ maxTablet } {
      flex-direction: column;
    }
`;

const TabBar = ({
    handleClick, activeTab, tabOptions, align, border, backgroundColor, borderBorderColor,
}) => {
    const mapTabCell = label => (
        <TabCell
            key={ label }
            label={ label }
            handleClick={ handleClick }
            active={ equals(label, activeTab) }
        />
    );
    const mappedTabCells = map(mapTabCell);
    return (
        <StyledTabBarWrapper align={ align } backgroundColor={ backgroundColor } border={ border }>
            {mappedTabCells(tabOptions)}
            <Border items={ tabOptions } active={ activeTab } color={ borderBorderColor } />
        </StyledTabBarWrapper>
    );
};

TabBar.propTypes = {
    /**
     * onClick action handler, (label) => (e) => {}
     */
    handleClick: PropTypes.func.isRequired,
    /**
     * Array of strings, representing every tab cell, [ 'stringOne', 'stringTwo' ]
     * Note that every string must be unique
     */
    tabOptions: PropTypes.array,
    /**
     * String representation of currently active tab, label of tab is expected
     */
    activeTab: PropTypes.string,
    /**
     * String representation of TabCells align, style according to FlexBox justify-content properties
     */
    align: PropTypes.string,
    /**
     * String definition of border setting
     */
    border: PropTypes.string,
    /**
   * String definition of border Border color
   */
    borderBorderColor: PropTypes.string,
    /**
   * String definition of custom backgroundColor
   */
    backgroundColor: PropTypes.string,
};

TabBar.defaultProps = {
    tabOptions: [],
    align: 'flex-start',
};

export { StyledTabBarWrapper };
export default TabBar;
