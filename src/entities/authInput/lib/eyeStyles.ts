import eyeOpenIconRed from '../../../../public/auth/eyeOpenRed.svg';
import eyeOpenIcon from '../../../../public/auth/eyeOpen.svg';
import eyeCloseIconRed from '../../../../public/auth/eyeCloseRed.svg';
import eyeCloseIcon from '../../../../public/auth/eyeClose.svg';

export const eyeStyles = (errorMessage: string, eye: boolean, isEyeOpen: boolean) => {
    return {
        label: {
            color: errorMessage !== 'notError' ? '#F54135' : '#222',
        },
        input: {
            borderLeft: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderTop: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderBottom: errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
            borderRight: eye
                ? 'none'
                : `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`,
            borderTopRightRadius: eye ? '0' : '8px',
            borderBottomRightRadius: eye ? '0' : '8px',
        },
        icon: {
            backgroundImage: !isEyeOpen
                ? errorMessage !== 'notError'
                    ? `url(${eyeOpenIconRed.src})`
                    : `url(${eyeOpenIcon.src})`
                : errorMessage !== 'notError'
                ? `url(${eyeCloseIconRed.src})`
                : `url(${eyeCloseIcon.src})`,
        },
        iconWrap: {
            display: eye ? 'flex' : 'none',
            borderRight: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
            borderTop: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
            borderBottom: eye
                ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`
                : 'none',
        },
    };
};
