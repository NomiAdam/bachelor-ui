// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: ${ ({ width }) => width };
  height: ${ ({ height }) => height };
  justify-content: ${ ({ justifyContent }) => justifyContent };
  align-items: ${ ({ alignItems }) => alignItems };
  flex-direction: ${ ({ flexDirection }) => flexDirection };
`;

StyledContainer.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
};

StyledContainer.defaultProps = {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};

export default StyledContainer;
