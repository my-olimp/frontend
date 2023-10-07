import { FC, useState } from 'react';
import styles from './ui.module.scss';

interface PropsTaskNoExample {
    numberPage: number;
    number: number;
    name: string;
    subName: string;
    answer: string;
    solution: string;
    placeholder: string;
    setIsCorrectAll: Function;
    setUpdatePage: Function;
}

export const TaskNoExample: FC<PropsTaskNoExample> = ({ numberPage, number, name, subName, answer, solution, placeholder, setIsCorrectAll, setUpdatePage }) => {
    const [input, setInput] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isSolution, setIsSolution] = useState<boolean>(false)

    const checkForAnswer = () => {
        if(input == answer) {
            setIsCorrect(true)
            setIsCorrectAll(prev => {prev[numberPage - 1][number - 1] = true; return prev})
            setUpdatePage(prev => !prev)
            setIsError(false)
            return
        } 
        setIsError(true)
        setIsCorrect(false)
        setIsCorrectAll(prev => {prev[numberPage - 1][number - 1] = false; return prev})
        setUpdatePage(prev => !prev)
    }

    return (
        <div className={`${styles.test__task} ${styles.task}`}>
            <h3 className={styles.task__header}>Задание {number}</h3>
            <p className={styles.task__name}>{name}</p>
            <p className={styles.task__subName}>{subName}</p>
            <input style={{marginBottom: `${!isError ? '28px': 0 }`, background: `${isCorrect ? '#EEFFEE': '#FFF'}` }} placeholder={placeholder} className={styles.task__input} value={input} type="text" onChange={(e) => setInput(e.target.value)} />
            {isError && <p className={styles.task__error}>Неверно, попробуйте снова</p>}
            <div className={styles.task__buttons}>
                <button onClick={() => checkForAnswer()} disabled={!input} className={`${styles.task__button} ${styles.task__button_1}`}>Ответить</button>
                {isError && <button onClick={() => setIsSolution(prev => !prev)} className={`${styles.task__button} ${styles.task__button_2}`}>Показать решение</button>}
            </div>
            {isSolution && <div className={styles.task__solutionBlock}>
                <div className={styles.task__solutionName}>Решение</div>
                <div className={styles.task__solution}>{solution}</div>
                <div className={styles.task__answer}><span>Ответ</span>{answer}.</div>
            </div>}
        </div>
    )
}
