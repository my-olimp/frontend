'use client'
import React, { FC, useState } from 'react'
import styles from './ui.module.scss'
import { match } from 'ts-pattern'
import { FirstAdditionalDataForm } from '@/features/FirstAdditionalDataForm'
import { FourAdditionalDataForm } from '@/features/FourAdditionalDataForm'

interface props {}

export const AdditionalDataForm: FC<props> = ({}) => {
  const [progress, setProgress] = useState<number>(4)
  
  return (<div className={styles.screen}>
    {match(progress).with(1, () => (<>
      <FirstAdditionalDataForm progress={progress}
                               setProgress={setProgress}/>
    </>)).with(2, () => (<>
      <h1>;dw;dw</h1>
    </>)).with(3, () => (<>
      <h1>;dw;dw</h1>
    </>)).with(4, () => (<>
      <FourAdditionalDataForm progress={progress}
                              setProgress={setProgress}/>
    </>)).run()}
  </div>)
}
