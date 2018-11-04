import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { basicTheme } from '../../../constants/theme';

const StyledRoleWrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  z-index: 4;
  left: 0;
  height: ${({ start, end }) => (end - start) * 48 }px;
  top: ${({ start }) => start * 48 }px;
  background-color: ${({ background }) => background};
  transition: all .5s ease;
  ${({ isActive }) => isActive ? `
    box-shadow: 5px 0 5px 3px ${basicTheme.grey};
    outline: 0 solid transparent;
  ` : ''}
`;

class Role extends PureComponent {
    render() {
        const { end, start, label, handleClick, isActive, background } = this.props;
        return (
            <StyledRoleWrapper
                isActive={isActive}
                start={start}
                end={end}
                onClick={handleClick}
                background={background}
            >
                { label }
            </StyledRoleWrapper>
        );
    }
}

Role.defaultProps = {
    /**
     * Boolean representing if current role is active or not
     */
    isActive: PropTypes.bool,
    /**
     * Number representing how many PXs are we from top
     */
    start: PropTypes.number,
    /**
     * Number representing how many PXs our height spans
     */
    end: PropTypes.number,
    /**
     * String representation of label text
     */
    label: PropTypes.string,
    /**
     * Function handler to handle onClick event
     */
    handleClick: PropTypes.func,
};

Role.defaultProps = {
    start: 0,
    tiles: 0,
};

Role.propTypes = {
    /**
     * Number definition of tile span
     */
    tiles: PropTypes.number,
    /**
     * Number representation of start index
     */
    start: PropTypes.number,
    /**
     * String representation of label
     */
    label: PropTypes.string,
    /**
     * String definition of Role background color
     */
    background: PropTypes.string,
};

Role.defaultProps = {
    background: basicTheme.orange,
};

export default Role;
