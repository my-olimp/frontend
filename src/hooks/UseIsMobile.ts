import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = (size: number): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth <= size);
        const updateSize = (): void => {
            setIsMobile(window.innerWidth <= size);
        };
        window.addEventListener('resize', debounce(updateSize, 250));
        // updateSize();
        return (): void => window.removeEventListener('resize', updateSize);
    }, []);

    return isMobile;
};

export default useIsMobile;