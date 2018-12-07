import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../../constants/device';

const GridCol = styled.div`
	background-color: transparent;
	display: flex;
	justify-content: ${ ({ horizontalAlign }) => horizontalAlign };
	align-items: ${ ({ verticalAlign }) => verticalAlign };
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

GridCol.propTypes = {
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
	 * String representation of horizontal alignment in flex box
     */
    horizontalAlign: PropTypes.string,
    /**
   * String representation of horizontal alignment in flex box
   */
    verticalAlign: PropTypes.string,
};

GridCol.defaultProps = {
    horizontalAlign: 'flex-start',
    verticalAlign: 'flex-start',
};

export default GridCol;
