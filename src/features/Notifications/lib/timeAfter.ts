export const timeAfter = (date: string) => {
    const noticeDate = new Date(Date.parse(date)); // Исходная дата
    const currentDate = new Date(); // Текущая дата и время
    const timeDifference = currentDate.getTime() - noticeDate.getTime(); // Разница в миллисекундах

    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)); // Приближенное количество месяцев (30 дней в месяце)
    const yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)); // Приближенное количество лет (365 дней в году)

    let timeValue: number;
    let timeUnit: string;

    if (yearsDifference >= 1) {
        timeValue = yearsDifference;
        timeUnit = declension(timeValue, 'год');
    } else if (monthsDifference >= 1) {
        timeValue = monthsDifference;
        timeUnit = declension(timeValue, 'месяц');
    } else if (daysDifference >= 1) {
        timeValue = daysDifference;
        timeUnit = declension(timeValue, 'день');
    } else if (hoursDifference >= 1) {
        timeValue = hoursDifference;
        timeUnit = declension(timeValue, 'час');
    } else if (minutesDifference >= 1) {
        timeValue = minutesDifference;
        timeUnit = declension(timeValue, 'минута');
    } else {
        timeValue = secondsDifference;
        timeUnit = declension(timeValue, 'секунда');
    }

    return `${timeValue} ${timeUnit} назад`;
};

// Функция для склонения числительных и единиц времени
const declension = (number: number, word: string) => {
    const cases = [2, 0, 1, 1, 1, 2]; // Формы склонения для русского языка

    return (
        word +
        (number % 100 > 4 && number % 100 < 20
            ? 'ов'
            : ['', 'а', 'ов'][cases[Math.min(number % 10, 5)]])
    );
};
