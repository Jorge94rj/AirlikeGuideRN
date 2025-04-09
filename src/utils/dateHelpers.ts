// Since the DB Ids for weekdays are defined as (Python weekday  + 1), JS values must be mapped
// JS: 0-6 (0 = Sunday, 6 = Saturday)
// Python: 0-6 (0 = Monday, 6 = Sunday)
export const mapJsWeekdayToDBWeekdayId: Record<number, number> = {
    0: 7,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
};

export const mapDBWeedkayIdToWeekdayName: Record<number, string> = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
};

export const isCurrentTimeBetweenRange = (from: string, to: string): boolean => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentHourFormated = currentHour < 10 ? `0${currentHour}` : currentHour;
    const currentMinutesFormated = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    const currentTimeFormated = `${currentHourFormated}:${currentMinutesFormated}`;

    const currentDate = new Date(`1970-01-01T${currentTimeFormated}Z`);
    const fromDate = new Date(`1970-01-01T${from}Z`);
    const toDate = new Date(`1970-01-01T${to}Z`);
    const includesNextDay = from.includes('23:') && to.includes('00:');

    return (currentDate >= fromDate && currentDate <= toDate && !includesNextDay) || (currentDate >= fromDate && includesNextDay);
};
