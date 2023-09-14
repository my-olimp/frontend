import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{ padding: '48px 0' }}>{children}</main>
            <Footer />
        </>
    );
}
