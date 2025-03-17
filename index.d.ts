/**
 * Returns the last element in an array
 * If array is empty, returns undefined
 */
export function last(arr: []): undefined
export function last<T>(arr: T[]): T


/*
 * Returns true if the value is of a primitive type.
 * Primitive types are:
 *   - number
 *   - string
 *   - Symbol
 *   - null
 *   - undefined
 *   - boolean
 *   - BigInt
 */
export type Primitive = number | string | null | undefined | boolean | symbol | BigInt
export function isPrimitive(v: any): v is Primitive

/**
 * Normalizes T | T[] to array
 * If the value is null or undefined, returns an empty array.
 */
export function toArray<T>(p: T | T[] | null | undefined): T[]

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

/**
 * Modifies a string in a such way that the specified char can
 * occur only one time in a row
 */
export function trimCharSeq(s: string, c: string): string

/**
 * Executes `fn` callback on each character in a string and joins results
 * into a new string.
 */
export function mapString(s: string, fn: (c: string) => string): string

/**
 * Returns a string without the provided suffix and and reports whether
 * it found the suffix.
 */
export function cutSuffix(s: string, suffix: string): [string, boolean]
