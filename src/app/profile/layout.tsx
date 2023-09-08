import { RefreshTokenComponent } from '@/shared/RefreshTokenComponent';
import { Header } from '@/widgets/header';

export default function Layout({ children }) {
    return (
        <>
            <RefreshTokenComponent />
            <Header profile />
            <main
                style={{
                    padding: '20px 0 0 84px',
                    backgroundColor: '#F3F7FF',
                    width: '100vw',
                    minHeight: '100vh',
                }}>
                {children}
            </main>
        </>
    );
}
