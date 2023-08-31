'use client';

import { useState } from 'react';
import './ui.scss';
import Image from 'next/image';
import firstImg from './../../../../public/landing/firstImage.svg';
import secondImg from './../../../../public/landing/secondImage.svg';
import thirdImg from './../../../../public/landing/thirdImage.svg';

// Ужасный код, его надо переделать

export const Tools = () => {
    const [activeBtn, setActiveBtn] = useState('1');
    const handleClick = (event) => {
        const btn = event.target;
        const sibLings = Array.from(btn.parentNode.children).filter((child) => child !== btn);

        sibLings.forEach((sibLings) => sibLings.classList.remove('active'));
        btn.classList.add('active');
        setActiveBtn(btn.id);
    };

    return (
        <>
            <div className="block">
                <div className="block__info">
                    <div className="main__title">
                        Всё для максимальной
                        <br /> концентрации
                    </div>
                    <div className="info__block">
                        <div className="selection">
                            <button
                                id="1"
                                className={`button ${activeBtn === '1' ? 'active' : ''}`}
                                onClick={handleClick}>
                                Достижения в одном месте
                            </button>
                            <div className={`text ${activeBtn === '1' ? 'activeText' : ''}`}>
                                Вы можете хранить все дипломы <br /> в электронном формате
                            </div>
                        </div>

                        <div className="selection">
                            <button
                                id="2"
                                className={`button ${activeBtn === '2' ? 'active' : ''}`}
                                onClick={handleClick}>
                                Напомним о каждой олимпиаде
                            </button>
                            <div className={`text ${activeBtn === '2' ? 'activeText' : ''}`}>
                                С календарём вы не забудете о нужном <br /> для вас соревновании
                            </div>
                        </div>

                        <div className="selection">
                            <button
                                id="3"
                                className={`button ${activeBtn === '3' ? 'active' : ''}`}
                                onClick={handleClick}>
                                Новостная лента
                            </button>
                            <div className={`text ${activeBtn === '3' ? 'activeText' : ''}`}>
                                Следите за изменениями на каждой <br /> олимпиаде и оставляйте вашу
                                оценку
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    className={`image ${activeBtn === '3' ? 'activeImage' : ''}`}
                    src={firstImg}
                    alt="Новости"
                />
                <Image
                    className={`image ${activeBtn === '2' ? 'activeImage' : ''}`}
                    src={secondImg}
                    alt="Календарь"
                />
                <Image
                    className={`image ${activeBtn === '1' ? 'activeImage' : ''}`}
                    src={thirdImg}
                    alt="Олимпиады"
                />
                {/** Забавный факт. Из assets почему то не редерит */}
            </div>
        </>
    );
};
