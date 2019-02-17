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
    IoCloseCircled,
    IoAndroidSend,
    IoIosDownloadOutline,
    IoIosTrashOutline,
    IoEye,
    IoEyeDisabled,
} from 'react-icons/lib/io';
import { keys } from 'ramda';

const IconTypes = {
    cog: IoIosCogOutline,
    statFill: IoIosStar,
    star: IoIosStarOutline,
    documents: IoIosAlbumsOutline,
    attach: IoAndroidAttach,
    reply: IoIosUndoOutline,
    download: IoIosDownloadOutline,
    compose: IoIosPhotosOutline,
    aperture: IoAperture,
    arrowBack: IoIosArrowBack,
    add: IoAndroidAdd,
    close: IoCloseCircled,
    send: IoAndroidSend,
    trash: IoIosTrashOutline,
    eyeOff: IoEyeDisabled,
    eye: IoEye,
};

export const iconStringTypes = keys(IconTypes);

export default IconTypes;
