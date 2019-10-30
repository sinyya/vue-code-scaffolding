import CONSTANT_DEFAULT from './constants/constants.default';
import CONSTANT_FIRST from './constants/constants.constant1';
import CONSTANT_SECOND from './constants/constants.constant2';

const constants = {
    CONSTANT_FIRST : Object.freeze(Object.assign(CONSTANT_DEFAULT, CONSTANT_FIRST)),
    CONSTANT_SECOND : Object.freeze(Object.assign(CONSTANT_DEFAULT, CONSTANT_SECOND))
};

export default constants
