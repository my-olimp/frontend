'use client';

import { ScrollCard } from '@/shared/Landing/scrollCard/ui';
import styles from './ui.module.scss';
import { Items, itemsType } from './data/data';
import React, { FC, useEffect, useRef, useState } from 'react';

export const ScrollCards: FC = () => {
    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    });
    let ref = useRef<any>(null); // <тип> важно ставить только если стартовое значение = null

    // Скролл на колесико
    useEffect(() => {
        const element = ref.current;
        if (element) {
            const onWheel = (e: any) => {
                e.preventDefault();
                element.scrollTo({
                    left: element.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth',
                });
            };
            element.addEventListener('wheel', onWheel);

            return () => element.removeEventListener('wheel', onWheel);
        }
    }, []);

    // Скролл по нажатию
    const onMouseMove = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();

        const { isScrolling, clientX, scrollX } = state;

        console.log(isScrolling);
        if (isScrolling) {
            ref.current.scrollLeft = scrollX + event.clientX - clientX;
            let sX = scrollX + event.clientX - clientX;
            let cX = event.clientX;
            setState({
                ...state,
                scrollX: sX,
                clientX: cX,
            });
        }
    };

    const onMouseUp = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();
        setState({
            ...state,
            isScrolling: false,
        });
    };

    const onMouseDown = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();

        setState({
            ...state,
            isScrolling: true,
            clientX: event.clientX,
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        };
    });

    return (
        <>
            <div
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className={styles.wrap}
            >
                {Items.map((data: itemsType) => {
                    return (
                        <ScrollCard
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            subject={data.subject}
                            text={data.text}
                            avatarLink={data.avatarLink}
                        />
                    );
                })}
            </div>
        </>
    );
};
