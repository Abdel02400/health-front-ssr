import { useEffect, type ReactElement, type PropsWithChildren } from 'react';
import { useLocation } from 'react-router';
import { useScroll } from '@client-hooks/useScroll';

function ScrollToTop({ children }: PropsWithChildren): ReactElement {
    const { pathname } = useLocation();
    const { scrollToTop } = useScroll();

    useEffect(() => {
        scrollToTop();
    }, [pathname, scrollToTop]);

    return <>{children}</>;
}

export default ScrollToTop;
