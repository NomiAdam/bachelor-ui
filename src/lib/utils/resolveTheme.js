import { propOr } from 'ramda';
import { lightTheme, darkTheme } from '../constants/theme';

const primaryP = propOr({}, 'primary');
const secondaryP = propOr({}, 'secondary');

export const DEFAULT = {
    backgroundColor: lightTheme.transparent,
    backgroundColorHover: lightTheme.transparent,
    backgroundColorAfter: lightTheme.transparent,
    borderRadius: '0',
    color: darkTheme.black,
    colorHover: darkTheme.black,
    border: `1px solid ${ darkTheme.black }`,
};

export const TYPES = {
    BACKGROUND_COLOR: 'backgroundColor',
    BACKGROUND_COLOR_HOVER: 'backgroundColorHover',
    BACKGROUND_COLOR_AFTER: 'backgroundColorAfter',
    BORDER_RADIUS: 'borderRadius',
    COLOR: 'color',
    COLOR_HOVER: 'colorHover',
    BORDER: 'border',
};

export const resolveTheme = type => ({
    theme, secondary, ...other
}) => {
    if (propOr(false, type, other)) {
        return other[ type ];
    } if (secondary && secondaryP(theme)[ type ]) {
        return secondaryP(theme)[ type ];
    }
    if (primaryP(theme)[ type ]) {
        return primaryP(theme)[ type ];
    } return DEFAULT[ type ];
};

export default props => `	
  background-color: ${ resolveTheme(TYPES.BACKGROUND_COLOR)(props) };
	border: ${ resolveTheme(TYPES.BORDER)(props) };
	border-radius: ${ resolveTheme(TYPES.BORDER_RADIUS)(props) };
	color: ${ resolveTheme(TYPES.COLOR)(props) };
`;
