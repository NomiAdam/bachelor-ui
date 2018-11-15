import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../../constants/device';

const StyledGridCol = styled.div`
	background-color: transparent;
	${ ({ center }) => (center ? `
	display: flex;
	justify-content: center;
	align-items: center;
	` : '') }
	grid-column-end: span ${ props => props.colXS || props.colMD || props.colLG || 12 };
	@media ${ device.mobileS } {
		grid-column-end: span ${ props => props.colXS };
	}
	@media ${ device.mobileM } {
		grid-column-end: span ${ props => props.colXS };
	}
	@media ${ device.mobileL } {
		grid-column-end: span ${ props => props.colXS };
	}
	@media ${ device.tablet } {
		grid-column-end: span ${ props => props.colMD || props.colXS };
	}
	@media ${ device.laptop } {
		grid-column-end: span ${ props => props.colMD || props.colXS };
	}
	@media ${ device.laptopL } {
		grid-column-end: span ${ props => props.colLG || props.colMD || props.colXS };
	}	
	@media ${ device.desktop } {
		grid-column-end: span ${ props => props.colLG || props.colMD || props.colXS };
	}
	@media ${ device.desktopL } {
		grid-column-end: span ${ props => props.colLG || props.colMD || props.colXS };
	}
`;

StyledGridCol.propTypes = {
    /**
	 * Number representing how many column will GridCol span from 0-12 on small devices
	 */
    colXS: PropTypes.number,
    /**
	 * Number representing how many column will GridCol span from 0-12 on medium devices
	 */
    colMD: PropTypes.number,
    /**
	 * Number representing how many column will GridCol span from 0-12 on large devices
	 */
    colLG: PropTypes.number,
    /**
	 * Whether we should center context in GridCol or not
     */
    center: PropTypes.bool,
};

export default StyledGridCol;
