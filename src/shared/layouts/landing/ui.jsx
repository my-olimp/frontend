import styles from './ui.module.scss';

export const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.layout__landing}>{children}</div>
        </>
    );
};
