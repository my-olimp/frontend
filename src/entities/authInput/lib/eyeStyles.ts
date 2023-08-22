import eyeOpenIconRed from '../../../../public/auth/eyeOpenRed.svg';
import eyeOpenIcon from '../../../../public/auth/eyeOpen.svg';
import eyeCloseIconRed from '../../../../public/auth/eyeCloseRed.svg';
import eyeCloseIcon from '../../../../public/auth/eyeClose.svg';

export const eyeStyles = (errorMessage: string, eye: boolean, isEyeOpen: boolean) => {
    return {
        label: {
            color: errorMessage ? '#F54135' : '#222',
        },
        input: {
            border: errorMessage ? '1px solid #F54135' : '1px solid #DDDDDD'
        },
        icon: {
            backgroundImage: !isEyeOpen
                ? errorMessage
                    ? `url(${eyeOpenIconRed.src})`
                    : `url(${eyeOpenIcon.src})`
                : errorMessage
                ? `url(${eyeCloseIconRed.src})`
                : `url(${eyeCloseIcon.src})`,
        },
        iconWrap: {
            display: eye ? 'flex' : 'none',
        },
    };
};
