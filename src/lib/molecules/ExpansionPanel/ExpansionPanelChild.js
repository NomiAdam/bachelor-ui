import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledPaperWrapper } from '../../organisms/Paper/Paper';
import { basicTheme } from '../../constants/theme';
import { resolveTheme, TYPES } from '../../utils/resolveTheme';
import Icon from '../../atoms/Icon';

const StyledWrapper = styled(StyledPaperWrapper)`
  border-radius: 0;
  user-select: none;
  transition: .25s all ease;
  box-shadow:  .5px .1px 1px .5px ${ basicTheme.grey };
  margin: ${ ({ open }) => (open ? '20px 0' : '0') };
`;

const StyledHeadingLabel = styled.h3`
  font-weight: 100;
  margin: 0;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${ resolveTheme(TYPES.COLOR) };
  overflow: hidden;
  padding: 5px 10px;
`;

const StyledBody = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: .1s all ease;
  color: ${ resolveTheme(TYPES.COLOR) };
  width: 100%;
  padding: ${ ({ open }) => (open ? '10px' : '0') };
  max-height: ${ ({ open }) => (open ? '500px' : '0') };
`;

const ExpansionPanelChild = ({
    open, handleClick, heading, body, secondary,
}) => (
    <StyledWrapper open={ open } secondary={ secondary }>
        <StyledHeading secondary={ secondary }>
            <StyledHeadingLabel secondary={ secondary }>
                {heading}
            </StyledHeadingLabel>
            <Icon name="arrowDown" clickable open={ open } onClick={ handleClick } />
        </StyledHeading>
        <StyledBody open={ open } secondary={ secondary }>
            {body}
        </StyledBody>
    </StyledWrapper>
);

ExpansionPanelChild.propTypes = {
    /**
     * String representation of heading
     */
    heading: PropTypes.string,
    /**
     * Whether body is open or not
     */
    open: PropTypes.bool,
    /**
     * Function to be called upon open/close icon click
     */
    handleClick: PropTypes.func,
    /**
     * Anything to be in body
     */
    body: PropTypes.any,
};

export { StyledWrapper, StyledBody };
export default ExpansionPanelChild;
