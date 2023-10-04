'use client'
import { FC } from 'react';
import styles from './index.module.scss';
import ArrowBack from '../../../../../../../public/libraryArticle/arrowBack.svg';
import BookIcon from '../../../../../../../public/libraryArticle/bookIcon.svg';
import Question from '../../../../../../../public/libraryArticle/question.svg';
import Star from '../../../../../../../public/libraryArticle/star.svg';
import Bookmark from '../../../../../../../public/libraryArticle/bookmark-plus.svg';
import Share from '../../../../../../../public/libraryArticle/share.svg';
import MainImage from '../../../../../../../public/libraryArticle/mainImage.jpg';
import { TagArticle } from '@/entities/mathArticle/tag';
import { TaskArticle } from '@/entities/mathArticle/task';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NavbarAvatar } from '@/entities/NavbarAvatar'

interface PropsMathArticle {

}

const MathArticle: FC<PropsMathArticle> = ({ }) => {
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__groups}>
                        <div className={`${styles.header__group} ${styles.header__group_1}`}>
                            <Image onClick={() => router.back()} className={styles.header__image} src={ArrowBack} alt="Back" />
                        </div>
                        <div className={`${styles.header__group} ${styles.header__group_2}`}>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_book}`}>
                                <Image className={styles.header__image} src={BookIcon} alt="BookIcon" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_book}`}>
                                <Image className={styles.header__image} src={BookIcon} alt="BookIcon" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_book}`}>
                                <Image className={styles.header__image} src={BookIcon} alt="BookIcon" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_question}`}>
                                <Image className={styles.header__image} src={Question} alt="Question" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_star}`}>
                                <Image className={styles.header__image} src={Star} alt="Star" />
                            </div>
                        </div>
                        <div className={`${styles.header__group} ${styles.header__group_3}`}>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_bookmark}`}>
                                <Image className={styles.header__image} src={Bookmark} alt="Bookmark" />
                            </div>
                            <div className={`${styles.header__imageContainer} ${styles.header__imageContainer_share}`}>
                                <Image className={styles.header__image} src={Share} alt="Share" />
                            </div>
                            <div className={styles.header__avatarContainer}>
                                <NavbarAvatar size={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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
        </div>
    )
}

export default MathArticle;