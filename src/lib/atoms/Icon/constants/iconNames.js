import {
    IoAndroidAttach,
    IoIosCogOutline,
    IoIosAlbumsOutline,
    IoIosStar,
    IoIosStarOutline,
    IoAndroidAdd,
    IoIosUndoOutline,
    IoIosPhotosOutline,
    IoIosArrowBack,
    IoAperture,
    IoIosCloseOutline,
    IoAndroidSend,
    IoIosDownloadOutline,
    IoIosTrashOutline,
    IoEye,
    IoEyeDisabled,
    IoIosSearch,
    IoIosArrowDown,
    IoIosArrowRight,
    IoIosSunny,
    IoIosMoon,
    IoClose,
} from 'react-icons/lib/io';
import { keys } from 'ramda';

const IconTypes = {
    cross: IoClose,
    sun: IoIosSunny,
    moon: IoIosMoon,
    cog: IoIosCogOutline,
    starFill: IoIosStar,
    star: IoIosStarOutline,
    documents: IoIosAlbumsOutline,
    attach: IoAndroidAttach,
    reply: IoIosUndoOutline,
    download: IoIosDownloadOutline,
    compose: IoIosPhotosOutline,
    aperture: IoAperture,
    arrowBack: IoIosArrowBack,
    arrowDown: IoIosArrowDown,
    arrowRight: IoIosArrowRight,
    add: IoAndroidAdd,
    close: IoIosCloseOutline,
    send: IoAndroidSend,
    trash: IoIosTrashOutline,
    eyeOff: IoEyeDisabled,
    eye: IoEye,
    search: IoIosSearch,
};

export const iconStringTypes = keys(IconTypes);

export default IconTypes;
