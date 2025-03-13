import { describe, test, expect } from 'vitest'
import { len, isPrimitive } from './general'

describe('len function', () => {
    test('works with an empty array', {}, () => {
        expect(len([])).toBe(0)
    })

    test('works with non empty array', {}, () => {
        expect(len([1,2,2])).toBe(3)
    })

    test('works with empty strings', {}, () => {
        expect(len('')).toBe(0)
    })

    test('works with non empty string', {}, () => {
        expect(len('hello')).toBe(5)
    })

    test('works with empty set', () => {
        let s = new Set()

        expect(len(s)).toBe(0)
    })

    test('works with non-empty set', () => {
        let s = new Set([1,2,3])

        expect(len(s)).toBe(3)
    })

    test('works with empty map', () => {
        let s = new Map()

        expect(len(s)).toBe(0)
    })

    test('works with non-empty map', () => {
        let s = new Map([['a', 1], ['b', 2]])

        expect(len(s)).toBe(2)
    })

    test('works with empty object', () => {
        let s = {}

        expect(len(s)).toBe(0)
    })

    test('works with non-empty object', () => {
        let s = {
            name: 'evg',
        }

        expect(len(s)).toBe(1)
    })

    test('return 0 for nulls', () => {
        expect(len(null)).toBe(0)
    })

    test('return 0 for undefined', () => {
        expect(len(null)).toBe(0)
    })

    test('return 0 for numbers', () => {
        expect(len(null)).toBe(0)
    })
})

describe('isPrimitive function', () => {
    test('true for strings', () => {
        expect(isPrimitive('test')).toBe(true)
    })

    test('true for numbers', () => {
        expect(isPrimitive(12)).toBe(true)
    })

    test('true for null', () => {
        expect(isPrimitive(null)).toBe(true)
    })

    test('true for undefined', () => {
        expect(isPrimitive(undefined)).toBe(true)
    })

    test('true for boolean', () => {
        expect(isPrimitive(false)).toBe(true)
    })

    test('true for BigInt', () => {
        expect(isPrimitive(BigInt(123))).toBe(true)
    })

    test('true for Symbols', () => {
        expect(isPrimitive(Symbol())).toBe(true)
    })

    test('false for functions', () => {
        expect(isPrimitive(() => {})).toBe(false)
    })

    test('false for objects', () => {
        expect(isPrimitive({})).toBe(false)
    })

    test('false for arrays', () => {
        expect(isPrimitive([1,2])).toBe(false)
    })

    test('false for maps', () => {
        expect(isPrimitive(new Map())).toBe(false)
    })

    test('false for sets', () => {
        expect(isPrimitive(new Set())).toBe(false)
    })
})
