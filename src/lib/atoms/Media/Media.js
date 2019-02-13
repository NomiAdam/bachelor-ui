import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  video, audio, picture, iframe, img {
    width: ${ ({ width }) => width };
    height: ${ ({ height }) => height };
  }
  border: 1px solid transparent;
  border-radius: ${ ({ round }) => (round ? '50%' : '0') };
`;

const Media = ({
    component, label, src, image, width, height, round, className, ...others
}) => (
    <StyledMediaWrapper className={ className } width={ width } height={ height } round={ round }>
        {
            createElement(component, { ...others, src: src || image, alt: label })
        }
    </StyledMediaWrapper>
);

Media.propTypes = {
    /**
     * String representation of desired element
     */
    component: PropTypes.string,
    /**
     * String representation of media, note that its supplements alt tag
     */
    label: PropTypes.string,
    /**
     * String representation of media elements width
     */
    width: PropTypes.string,
    /**
     * String representation of media elements height
     */
    height: PropTypes.string,
    /**
     * String representation of source for media element, note that its the same as src
     */
    src: PropTypes.string,
    /**
     * String representation of source for media element, note that its the same as src
     */
    image: PropTypes.string,
    /**
   * Whether image should be round or not
   */
    round: PropTypes.bool,
    /**
   * className for wrapping component
   */
    className: PropTypes.string,
};

Media.defaultProps = {
    component: 'img',
    label: 'alternative',
    width: '100%',
};

export default Media;
