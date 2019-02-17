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
  padding: ${ ({ padding }) => padding };
  overflow-x: hidden;
  overflow-y: auto;
`;

StyledContainer.propTypes = {
    /**
   * String definition of width css property
   */
    width: PropTypes.string,
    /**
   * String definition of height css property
   */
    height: PropTypes.string,
    /**
   * String definition of justify-content css property
   */
    justifyContent: PropTypes.string,
    /**
   * String definition of align-items css property
   */
    alignItems: PropTypes.string,
    /**
   * String definition of flex-direction css property
   */
    flexDirection: PropTypes.string,
    /**
   * String definition of padding css property
   */
    padding: PropTypes.string,
};

StyledContainer.defaultProps = {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '0',
};

export default StyledContainer;
