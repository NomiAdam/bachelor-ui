import React from 'react';
import PropTypes from 'prop-types';
import {GridCol} from '../../atoms/Grid/index';
import TextField from '../../molecules/TextField/index';

const GriddedTextField = ({colXS, colMD, colLG, ...other}) => {
	return (
		<GridCol colXS={colXS} colMD={colMD} colLG={colLG}>
			<TextField {...other}/>
		</GridCol>
	);
};


GriddedTextField.propTypes = {
	/**
	 * How many GridCols we want, on scale 0-12 on small devices
	 */
	colXS: PropTypes.number,
	/**
	 * How many GridCols we want, on scale 0-12 on medium devices
	 */
	colMD: PropTypes.number,
	/**
	 * How many GridCols we want, on scale 0-12 on large devices
	 */
	colLG: PropTypes.number
};

export default GriddedTextField;
