import { FC, PropsWithChildren } from "react"
import styles from './sideBarElements.module.scss'

export const SideBarElement:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  )
}