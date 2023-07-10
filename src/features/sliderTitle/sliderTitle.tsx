import { Arrows } from "./../../shared/arrows/arrows"
import { Text } from './../../shared/text/text'
import { FC } from "react"
import styles from './sliderTitle.module.scss'

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