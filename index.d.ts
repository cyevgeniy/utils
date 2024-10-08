/**
 * Returns the last element in an array
 * If array is empty, returns undefined
 */
export function last<T>(arr: T[]): T | undefined

/**
 * Returns the length of a value depending on its type
 * 
 * - Arrays: the number of elements in an array
 * - Strings: the number of code uits in a string
 * - Sets: the number of elements in a set
 * - Maps: the number of elements in a map
 * - Objects: the number of own enumarable fields
 * 
 * For all other cases it returns 0
 */
export function len(v: any[] | string | Map | Set | Record<string, any>): number

/**
 * Capitalizes the first letter and lowercases all other letters in each
 * word of the passed string
 */
export function initcap(s: string): string