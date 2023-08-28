import styles from './ui.module.scss';
import { FooterItemsInfo } from '@/shared/Landing/footerItems/ui';
import { FooterContacts } from '@/shared/Landing/footerContacts/ui';

export const LandingFooter = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerItems}>
                    <FooterItemsInfo />
                    <FooterContacts />
                </div>
            </footer>
        </>
    );
};
