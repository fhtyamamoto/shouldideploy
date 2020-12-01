import Time from './time'
import { REASONS_PRAIOU, REASONS_CHUVOU, REASONS_WEEKDAYS } from './reasons'

export const getRandom = function ranDay(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Return a list of reasons according of time parameter
 * @param string[]
 */
export function dayHelper(time) {
  time = time || new Time()

  if (time.isWeekday()) {
    return [...REASONS_WEEKDAYS, ...REASONS_CHUVOU]
  }
  return REASONS_PRAIOU
}
