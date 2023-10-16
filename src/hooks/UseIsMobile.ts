import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = (size: number): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const updateSize = (): void => {
            setIsMobile(document.documentElement.clientWidth < size);
        };
        window.addEventListener('resize', debounce(updateSize, 500));
        // updateSize();
        return (): void => window.removeEventListener('resize', updateSize);
    }, []);

    return isMobile;
};

export default useIsMobile;