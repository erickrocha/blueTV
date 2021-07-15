import moment from 'moment';

export const ISO_DATE_TIME = 'YYYY-MM-DDTkk:mm:ss';
export const ISO_DATE = 'YYYY-MM-DD';
export const ISO_TIME = 'kk:mm:ss';

export const getToday = (pattern = ISO_DATE) => {
  const dateStr = moment().format(pattern);
  return moment(dateStr, pattern);
};

export const getDate = (value, pattern = ISO_DATE) => {
  return moment(value, pattern);
};

export const getDateTime = (value, pattern = ISO_DATE_TIME) => {
  return moment(value, pattern);
};

export const getTodayNow = (pattern = ISO_DATE_TIME) => {
  const dateStr = moment().format(pattern);
  return moment(dateStr, pattern);
};

export const getSundayDateCurrentWeek = (pattern = ISO_DATE) => {
  const now = moment();
  return now
    .clone()
    .weekday(0)
    .format(pattern);
};

export const getSaturdayDateCurrentWeek = (pattern = ISO_DATE) => {
  const now = moment();
  return now
    .clone()
    .weekday(6)
    .format(pattern);
};

export const subtractDays = (value, days, pattern = ISO_DATE) => {
  const date = moment(value, pattern).subtract(days, 'day');
  return date.format(pattern);
};

export const subtractYears = (value, years, pattern = ISO_DATE) => {
  const date = moment(value, pattern).subtract(years, 'year');
  return date.format(pattern);
};

export const addDays = (value, days, pattern = ISO_DATE) => {
  const date = moment(value, pattern).add(days, 'day');
  return date.format(pattern);
};

export const getMinutes = (begin, end) => {
  const startDateTime = getDateTime(begin);
  const endDateTime = end ? getDateTime(end) : getTodayNow();
  const minutes = moment.duration(endDateTime.diff(startDateTime));
  return Math.round(Math.abs(minutes.asMinutes()));
};

export const getCurrentYear = () => {
  return moment().year();
};

export const getCurrentMonth = () => {
  return moment().month();
};

export const getCurrentMonthName = () => {
  return moment().format('MMMM');
};

export const getWeekDays = () => {
  let firstDay = moment().startOf('week');
  const days = [
    {
      date: firstDay.format(ISO_DATE),
      dayOfWeek: firstDay.format('ddd'),
      dayOfMonth: firstDay.format('D'),
      appointments: []
    }
  ];
  for (let i = 0; i < 6; i++) {
    const dayStr = firstDay.add(1, 'd').format(ISO_DATE);
    days.push({
      date: dayStr,
      dayOfWeek: firstDay.format('ddd'),
      dayOfMonth: firstDay.format('D'),
      appointments: []
    });
  }
  return days;
};

export const getFirstDayCurrentMonth = (pattern = ISO_DATE) => {
  return moment()
    .startOf('month')
    .format(pattern);
};

export const getLastDayCurrentMonth = (pattern = ISO_DATE) => {
  return moment()
    .endOf('month')
    .format(pattern);
};

export const getDateFromTimestamp = (timestamp, pattern = ISO_DATE) => {
  return moment.unix(timestamp).format(pattern);
};

export const getAdultAge = (pattern = ISO_DATE) => {
  const date = moment().subtract(18, 'year');
  return date.format(pattern);
};
