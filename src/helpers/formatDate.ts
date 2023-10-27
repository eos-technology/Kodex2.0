import { DateTime } from 'luxon'

const defaultFormat = 'dd/MM/yyyy HH:mm:ss'

const formatDate =
  () =>
  (date: DateTime | string, format: string = defaultFormat): string => {
    if (typeof date == 'string') {
      date = DateTime.fromISO(date)
    }
    return date.toFormat(format)
  }

export default formatDate
