import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGridWrapper = styled.div`
  width: 100%;
  padding: ${ ({ padding }) => padding };
	display: grid;
	grid-gap: ${ ({ gridGap }) => gridGap };
	background-color: transparent;
	grid-template-columns: repeat(12, 1fr);
	justify-content: space-evenly;
`;

StyledGridWrapper.propTypes = {
    /**
     * String definition of grid-gap
     */
    gridGap: PropTypes.string,
    /**
     * String definition of css padding property
     */
    padding: PropTypes.string,
};

StyledGridWrapper.defaultProps = {
    gridGap: '0',
    padding: '0',
};

export default StyledGridWrapper;
