import { keyMirror } from 'ramda-extension';
import { equals } from 'ramda';

export const LABEL_POSITION = keyMirror({
    LEFT: null,
    RIGHT: null,
});

export const equalsLeft = equals(LABEL_POSITION.LEFT);
export const equalsRight = equals(LABEL_POSITION.RIGHT);
