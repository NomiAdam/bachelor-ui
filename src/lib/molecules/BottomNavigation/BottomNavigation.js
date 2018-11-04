import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BottomNavigationItem from './BottomNavigationItem';
import Border from './Border';
import { map, head, propOr, o } from 'ramda';
import { lightTheme } from '../../constants/theme';

const StyledBottomNavigation = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 100px;
  min-height: 50px;
  background-color: ${({background}) => background};
`;

const renderItem = (handleClick) => ({icon, label, id}) => (
    <BottomNavigationItem
        key={id}
        label={label}
        icon={icon}
        handleClick={handleClick(id)}
    />
);
const renderNavigationItems = (handleClick) => map(renderItem(handleClick));
const getFirstOrEmpty = o(propOr('', 'id'), head);

class BottomNavigation extends PureComponent {
    state = {
        activeItem: getFirstOrEmpty(this.props.items),
    };

    componentDidUpdate(prevProps) {
        const { active } = this.props;
        if (active !== prevProps.active) this.setState({activeItem: active})
    }

    handleClick = (id) => () => {
        const { handleClick } = this.props;
        handleClick(id);
        this.setState({ activeItem: id })
    };

    render() {
        const { activeItem } = this.state;
        const {items, background, borderColor} = this.props;
        return (
            <StyledBottomNavigation background={background}>
                <Border
                    color={borderColor}
                    items={items}
                    active={activeItem}
                />
                {renderNavigationItems(this.handleClick)(items)}
            </StyledBottomNavigation>
        )
    }
}

BottomNavigation.propTypes = {
    /**
     * Array of objects is expected, { id: 'String', icon: 'IconNode', label: 'String' }
     */
    items: PropTypes.array,
    /**
     * String representation of background color
     */
    background: PropTypes.string,
    /**
     * String definition of active currently active item
     */
    active: PropTypes.string,
    /**
     * String definition of background color
     */
    borderColor: PropTypes.string,
    /**
     * Function handler to be called upon item click
     */
    handleClick: PropTypes.func.isRequired,
};

BottomNavigation.defaultProps = {
    items: [],
    background: lightTheme.lightBlue,
};

export {StyledBottomNavigation};
export default BottomNavigation;
