import { OfflinePage } from '@/widgets/OfflinePage';
import { Header } from '@/widgets/header';
import './fonts.scss';

const Fallback = () => {
    return (
        <>
            <Header />
            <OfflinePage />
        </>
    );
}

export default Fallback;