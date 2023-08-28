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
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'год', 'года', 'лет');
    } else if (monthsDifference >= 1) {
        timeValue = monthsDifference;
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'месяц', 'месяца', 'месяцев');
    } else if (daysDifference >= 1) {
        timeValue = daysDifference;
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'день', 'дня', 'дней');
    } else if (hoursDifference >= 1) {
        timeValue = hoursDifference;
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'час', 'часа', 'часов');
    } else if (minutesDifference >= 1) {
        timeValue = minutesDifference;
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'минуту', 'минуты', 'минут');
    } else {
        timeValue = secondsDifference;
        timeUnit = `${timeValue} ` + getNoun(timeValue, 'секунду', 'секунды', 'секунд');
    }

    return `${timeUnit} назад`;
};

function getNoun(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}
