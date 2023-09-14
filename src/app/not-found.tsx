import { NotFound } from '@/widgets/NotFound';
import { Header } from '@/widgets/header';
import './fonts.scss';

export default function Home() {
    return (
        <>
            <Header />
            <NotFound />
        </>
    );
}
