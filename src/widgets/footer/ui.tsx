import styles from "./ui.module.scss";
import { FooterItemsInfo } from "@/shared/footerItems/ItemsInfo/ui";
import { FooterContacts } from "@/shared/footerContacts/ui";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerItems}>
          <FooterItemsInfo />
          <FooterContacts/>
        </div>
      </footer>
    </>
  );
};
