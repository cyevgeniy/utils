import { describe, test, expect } from 'vitest'
import { at, toArray } from './arrays'

describe('toArray function', () => {
    test('works with arrays', () => {
        const array = [1,2,3]
        expect(toArray(array)).toBe(array)
    })

    test.each([false, 0, -0, '', NaN, 0n])('preserves falsy value %s', value => {
        expect(toArray(value)).toStrictEqual([value])
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

describe('at function, soft mode', () => {
    test('positive index', () => {
        expect(at([1,2,3], 2, true)).toBe(3)
    })
    
    test('positive out of bounds index', () => {
        expect(at([1,2,3], 10, true)).toBe(3)
    })

    test('negative index', () => {
        expect(at([1,2,3,4,5], -3, true)).toBe(3)
    })

    test('negative out of bounds index', () => {
        expect(at([1,2,3,4,5], -20, true)).toBe(1)
    })

    test('empty array', () => {
        expect(at([], 10, true)).toBeUndefined()
    })
})

describe('at function, strict mode', () => {
    test('positive index', () => {
        expect(at([1,2,3], 2)).toBe(3)
    })
    
    test('positive out of bounds index', () => {
        expect(at([1,2,3], 10)).toBeUndefined()
    })

    test('negative index', () => {
        expect(at([1,2,3,4,5], -3)).toBe(3)
    })

    test('negative out of bounds index', () => {
        expect(at([1,2,3,4,5], -20)).toBeUndefined
    })
})
