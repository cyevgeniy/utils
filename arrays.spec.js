import { describe, test, expect } from 'vitest'
import { toArray } from './arrays'

describe('toArray function', () => {
    test('works with arrays', () => {
        expect(toArray([1,2,3])).toStrictEqual([1,2,3])
    })

    test('works with null', () => {
        expect(toArray(null)).toStrictEqual([])
    })

    test('works with undefined', () => {
        expect(toArray(undefined)).toStrictEqual([])
    })

    test('works with non-arays', () => {
        expect(toArray(1)).toStrictEqual([1])
    })
})
