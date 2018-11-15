import React, { PureComponent } from 'react';
import { map, prop, propOr } from 'ramda';
import PropTypes from 'prop-types';
import List from '../../atoms/List/index';
import ActionListItem from './components/index';

const getIdFromProp = prop('id');
const getActiveProp = propOr(false, 'active');
const renderActionListItem = (handleClick, handleIconClick, isAction) => props => (
    <ActionListItem
        { ...props }
        isAction={ isAction }
        key={ getIdFromProp(props) }
        isIconActive={ getActiveProp(props) }
        handleClick={ handleClick(getIdFromProp(props)) }
        handleIconClick={ handleIconClick(getIdFromProp(props), getActiveProp(props)) }
    />
);
const renderActionList = (handleClick, handleIconClick, isAction) => map(
    renderActionListItem(handleClick, handleIconClick, isAction),
);
class ActionList extends PureComponent {
    handleItemClick = index => () => {
        const { handleItemClick } = this.props;
        handleItemClick(index);
    };

    handleIconClick = (index, isActive) => () => {
        const { handleIconClick } = this.props;
        handleIconClick(index, isActive);
    };

    render() {
        const { listItems, isAction } = this.props;
        return (
            <List>
                {renderActionList(
                    this.handleItemClick,
                    this.handleIconClick,
                    isAction,
                )(listItems)}
            </List>
        );
    }
}

ActionList.propTypes = {
    /**
     * Array of objects, format below is expected,
     * [ { id, date, header, subHeader, active }, ... ]
     */
    listItems: PropTypes.array,
    /**
     * Function to be called upon link click, note that function is called with, item ID as param
     */
    handleItemClick: PropTypes.func,
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

ActionList.defaultProps = {
    listItems: [],
    isAction: false,
};

export default ActionList;
