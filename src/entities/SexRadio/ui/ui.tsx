import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';
import { Radio } from '@mui/material';
 
interface props {
  sex: 'male' | 'female';
  setSex: Dispatch<SetStateAction<'male' | 'female'>>
}
 
export const SexRadio: FC<props> = ({sex, setSex}) => {
   return (
       <div className={styles.sexWrap}>
           <h2>Пол: </h2>
           <div className={styles.sex} onChange={() => setSex('male')}>
               <h3>Мужской</h3>
               <Radio checked={sex === 'male'} value="male" name="radio-buttons" />
           </div>
           <div className={styles.sex} onChange={() => setSex('female')}>
               <h3>Женский</h3>
               <Radio checked={sex === 'female'} value="female" name="radio-buttons" />
           </div>
       </div>
   );
}