import { Arrows } from '@/shared/Landing/arrows/ui'
import { Text } from '@/shared/Landing/text/ui'
import { FC } from "react"
import styles from './ui.module.scss'

interface props {
  handleClick: (type: 'left'|'right') => void
}

export const SliderTitle:FC<props> = ({handleClick}) => {
  return (
    <div className={styles.wrap}>
      <Text/>
      <Arrows handleClick={handleClick}/>
    </div>
  )
}