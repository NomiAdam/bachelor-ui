import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDivider = styled.hr`
	border-top: .5px ${({ type }) => type} ${({ color }) => color};
`;

const Divider = ({ type, color }) => <StyledDivider type={type} color={color}/>;

Divider.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
};

Divider.defaultProps = {
    type: 'dashed',
    color: '#bbbbbb',
};

export { StyledDivider };
export default Divider;
