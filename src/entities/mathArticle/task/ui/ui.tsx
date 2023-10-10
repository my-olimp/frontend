import { FC } from 'react';
import styles from './ui.module.scss';

interface PropsTaskArticle {
    numberTask: number, 
    taskName: string, 
    taskFrom?: string, 
    solution: string,
    answer: string
}

export const TaskArticle: FC<PropsTaskArticle> = ({ numberTask, taskName, taskFrom, solution, answer }) => {

    return (
        <div className={`${styles.example__task} ${styles.task}`}>
            <h5 className={styles.task__name}>Задача {numberTask}.<span>{taskFrom}</span> {taskName}.</h5>
            <p className={styles.task__solutionName}>Решение:</p>
            <div className={styles.task__solution}>
                {solution}
            </div>
            <div className={styles.task__answer}>
                Ответ: {answer}.
            </div>
        </div>
    )
}