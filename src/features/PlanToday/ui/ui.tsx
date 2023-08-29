'use client';
import React, { FC, useState } from 'react';
import styles from './ui.module.scss';
import { IPlan } from '@/widgets/PlansToday';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface props {
    plan: IPlan;
}
export const PlanToday: FC<props> = ({ plan }) => {
    const [completed, setCompleted] = useState<boolean>(plan.completed);

    return (
        <div className={styles.wrap}>
            <Checkbox
                className={styles.checkBox}
                checked={completed}
                icon={
                    <RadioButtonUncheckedIcon
                        fontSize="large"
                        sx={{ color: 'black' }}
                        className={styles.unchecked}
                    />
                }
                checkedIcon={<CheckCircleIcon fontSize="large" className={styles.checked} />}
                onClick={() => {
                    setCompleted(!completed);
                    plan.completed = !plan.completed;
                }}
            />
            <h1
                className={styles.text}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    color: completed ? 'rgba(158, 158, 158, 0.80)' : 'black',
                }}>
                {plan.title}
            </h1>
        </div>
    );
};
