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
                checked={completed}
                icon={<RadioButtonUncheckedIcon fontSize="large" sx={{ color: 'black' }} />}
                checkedIcon={<CheckCircleIcon fontSize="large" />}
                onClick={() => {
                    setCompleted(!completed);
                    plan.completed = !plan.completed;
                }}
            />
            <h1
                className={styles.text}
                style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {plan.title}
            </h1>
        </div>
    );
};
