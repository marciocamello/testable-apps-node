import {parseISO, setYear} from 'date-fns'

/**
 * Receives a date and returns a new date with the same day and month but with the year increased by 1
 * @param date 
 */
export function getFutureDate(date: string) :Date {
    return setYear(parseISO(date), new Date().getFullYear() + 1)
}