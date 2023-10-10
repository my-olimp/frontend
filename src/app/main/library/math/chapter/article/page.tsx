'use client'
import { FC, useState } from 'react';
import styles from './index.module.scss';
import ArrowBack from '../../../../../../../public/libraryArticle/arrowBack.svg';
import ArrowRight from '../../../../../../../public/libraryArticle/arrowRightAndLeft.svg';
import MainImage from '../../../../../../../public/libraryArticle/mainImage.jpg';
import Bookmark from '../../../../../../../public/libraryArticle/bookmark-plus.svg';
import Share from '../../../../../../../public/libraryArticle/share.svg';
import { TagArticle } from '@/entities/mathArticle/tag';
import { TaskArticle } from '@/entities/mathArticle/task';
import { TaskNoExample } from '@/entities/mathArticle/taskNoExample';
import Image from 'next/image';
import { NavbarAvatar } from '@/entities/NavbarAvatar';
import { HeaderIcon } from '@/entities/mathArticle/headerIcon';
import { BookPage } from '@/widgets/MathArticle/book';
import { QuestionPage } from '@/widgets/MathArticle/question';
import Link from 'next/link'

interface PropsMathArticle {

}

const headerIconsArray = ['book1', 'question1', 'question2', 'book2', 'question3', 'question4', 'book3', 'question5', 'question6', 'star1']

const MathArticle: FC<PropsMathArticle> = ({ }) => {
    const [openedPage, setOpenedPage] = useState<string>('book1')
    const [isCorrectAll, setIsCorrectAll] = useState<Array<Array<Boolean>>>([[false, false], [false, false], [false, false], [false, false], [false, false], [false, false]]) // Надо создать сколько массивов, сколько элементов HeaderIcon на странице и в эти массивы надо ввести false столько раз, сколько элементов TaskExample
    const [updatePage, setUpdatePage] = useState<Boolean>(true) // просто состояние чтобы при его изменении перередеривать компонент HeaderIcon
    const handleOnClickArrow = (position: string) => {
        if (position === 'left') {
            setOpenedPage(prev => headerIconsArray[(headerIconsArray.findIndex((item) => item === prev) - 1) == -1 ? (headerIconsArray.length - 1) : (headerIconsArray.findIndex((item) => item === prev) - 1)])
        } else {
            setOpenedPage(prev => headerIconsArray[(headerIconsArray.findIndex((item) => item === prev) + 1) == headerIconsArray.length ? 0 : (headerIconsArray.findIndex((item) => item === prev) + 1)])
        }
    }


    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__groups}>
                        <div className={`${styles.header__group} ${styles.header__group_1}`}>
                            <Link style={{ color: 'black' }} href="/main/library">
                                <Image className={styles.header__image} src={ArrowBack} alt="Back" />
                            </Link>
                        </div>
                        <div className={`${styles.header__group} ${styles.header__group_2}`}>
                            <HeaderIcon name='book' numberPage={1} setOpenedPage={setOpenedPage} isOpen={openedPage == 'book1'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={1} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question1'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={2} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question2'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='book' numberPage={2} setOpenedPage={setOpenedPage} isOpen={openedPage == 'book2'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={3} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question3'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={4} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question4'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='book' numberPage={3} setOpenedPage={setOpenedPage} isOpen={openedPage == 'book3'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={5} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question5'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='question' numberPage={6} setOpenedPage={setOpenedPage} isOpen={openedPage == 'question6'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                            <HeaderIcon name='star' numberPage={1} setOpenedPage={setOpenedPage} isOpen={openedPage == 'star1'} isCorrectAll={isCorrectAll} updatePage={updatePage} />
                        </div>
                        <div className={`${styles.header__group} ${styles.header__group_3}`}>
                            <div className={styles.header__imageContainer}>
                                <Image className={styles.header__image} src={Bookmark} alt='Mark' />
                            </div>
                            <div className={styles.header__imageContainer}>
                                <Image className={styles.header__image} src={Share} alt='Share' />
                            </div>
                            {/* <div className={styles.header__avatarContainer}>
                                <NavbarAvatar size={48} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.goLeftArrow}>
                    <Image onClick={() => handleOnClickArrow('left')} className={styles.goLeftArrow__image} src={ArrowRight} alt="Go to previous page" />
                </div>
                <div className={styles.goRightArrow}>
                    <Image onClick={() => handleOnClickArrow('right')} className={styles.goRightArrow__image} src={ArrowRight} alt="Go to next page" />
                </div>
                {(openedPage == 'book1') && <BookPage>
                    <div className={styles.mainImageContainer}>
                        <Image className={styles.mainImage} src={MainImage} alt="Books on the hand" />
                    </div>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Уравнения высших порядков</h1>
                        <p className={styles.autor}>Автор: Иван Иванов</p>
                        <div className={styles.blockTags}>
                            <TagArticle title='Математика' />
                            <TagArticle title='Алгебра' />
                            <TagArticle title='Уравнения' />
                            <TagArticle title='Не школьная программа' />
                        </div>
                        <div className={styles.description}>
                            Методы решения уравнений третьей и четвёртой степени (формула Кардано и метод Феррари) выходят за рамки программы обычной школы. Поэтому если на олимпиаде вам попадается уравнение степени 3 или выше, то следует искать искусственный приём, приспособленный для решения именно этого уравнения. Таким приёмом может быть, например, удачная группировка с последующим разложением на множители или выявление устойчивых выражений с соответствующей заменой переменной. Данная статья посвящена уравнениям вида p(x) = 0, где p(x) — многочлен третьей степени и выше, и некоторым приёмам разложения такого многочлена на множители.
                        </div>
                        <div className={styles.example}>
                            <h2 className={styles.example__title}>1. Непосредственная группировка</h2>
                            <p className={styles.example__description}>В простейших случаях многочлен удаётся разложить на множители, удачно группируя друг с другом слагаемые. </p>
                            <TaskArticle
                                numberTask={1}
                                taskName={'Решить уравнение 2x3 − 3x2 − 8x + 12 = 0'}
                                solution={`x2(2x − 3) − 4(2x − 3) = 0
                                    (2x − 3)(x2 − 4) = 0
                                    (2x − 3)(x − 2)(x + 2) = 0`}
                                answer={'3/2, ±2'}
                            />

                            <TaskArticle
                                numberTask={2}
                                taskName={'Решите уравнение: x3 + 9x2 + 18x − 2(x 2 + 9x) − 36 √ x + 3'}
                                taskFrom={'(МГУ, социологич. ф-т, 2004 )'}
                                solution={`Если поддаться искушению раскрыть скобки и привести подобные слагаемые (тем более что сократится 18x), то в возникшем кубическом уравнении придётся подбирать корень с целью разложить левую часть на множители. Данная процедура описана в следующем пункте и не представляет здесь никаких сложностей, однако необходимости в ней сейчас нет. Дело в том, что несколько вычурная запись условия содержит подсказку, как именно надо группировать слагаемые. Имеем:
                                x3 + 9x2 + 18x − 2(x2 + 9x) − 36 = x(x2 + 9x) − 2(x2 + 9x) + 18x − 36 = (x 2 + 9x)(x − 2) + 18(x − 2) = (x − 2)(x2 + 9x + 18) = (x − 2)(x + 3)(x + 6).
                                Наше уравнение, таким образом, равносильно системе
                                (x − 2)(x + 3)(x + 6) = 0,
                                решением которой служит x = 2`}
                                answer={'2'}
                            />
                        </div>
                    </div>
                </BookPage>}
                {(openedPage == 'question1') && <QuestionPage>
                    <div className={styles.container}>
                        <div className={styles.test}>
                            <p className={styles.test__title}>Уравнения высших порядков</p>
                            <TaskNoExample numberPage={1} number={1} name={'Решите уравнение: x3 + 3x2 − 5x − 15 = 0;'} subName={'В ответ введите меньший корень'} solution={'Какое-то решение'} answer={'-5'} placeholder={'Число или дробь'} setIsCorrectAll={setIsCorrectAll} setUpdatePage={setUpdatePage} />
                            <TaskNoExample numberPage={1} number={2} name={'Решите уравнение: x3 + 3x2 − 5x − 15 = 0;'} subName={'В ответ введите меньший корень'} solution={'Какое-то решение'} answer={'-5'} placeholder={'Число или дробь'} setIsCorrectAll={setIsCorrectAll} setUpdatePage={setUpdatePage} />
                        </div>
                    </div>
                </QuestionPage>}
            </main>
        </div>
    )
}

export default MathArticle;