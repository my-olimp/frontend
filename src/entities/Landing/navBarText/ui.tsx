import { FC, PropsWithChildren } from "react"
import styles from './ui.module.scss'

export const NavBarText:FC<PropsWithChildren> = ({children}) => {
  return (
    <h4 className={styles.textButton}>
      {children}
    </h4>
  )
}