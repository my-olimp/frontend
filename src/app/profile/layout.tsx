import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Header } from '@/widgets/header';

export default function Layout({ children }) {
    return (
        <>
            <RefreshTokenComponent />
            <Header profile />
            <main style={{ padding: '48px 0' }}>{children}</main>
        </>
    );
}
