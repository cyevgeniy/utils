import { describe, test, expect } from 'vitest'
import { initcap, trimCharSeq } from './strings'

describe('initcap function', () => {
    test('works with empty strings', () => {
        expect(initcap('')).toBe('')
    })

    test('works with single-word strings', () => {
        expect(initcap('hello')).toBe('Hello')
    })

    test('works with multi-word strings', () => {
        expect(initcap('hello world')).toBe('Hello World')
    })

    test('works with single-letter words', () => {
        expect(initcap('h')).toBe('H')
    })

    test('it does not trim spaces (1)', () => {
        expect(initcap('hello   world')).toBe('Hello   World')
    })

    test('it does not trim spaces (2)', () => {
        expect(initcap('  hello   world  ')).toBe('  Hello   World  ')
    })

    test('it does not trim spaces (3)', () => {
        expect(initcap('  hello world  ')).toBe('  Hello World  ')
    })

    test('it does not trim spaces (4)', () => {
        expect(initcap('   ')).toBe('   ')
    })

    test('it lowercases', () => {
        expect(initcap('HELLO')).toBe('Hello')
    })
})

describe('trimCharSeq function', () => {
    test('works with empty strings', () => {
        expect(trimCharSeq('', 'a')).toBe('')
    })

    test('works with strings without matches', () => {
        expect(trimCharSeq('hello', 'a')).toBe('hello')
    })

    test('returns original string if character length is greater than 1', () => {
        expect(trimCharSeq('aaaa', 'aa')).toBe('aaaa')
    })

    test('trims in the middle', () => {
        expect(trimCharSeq('Hello   World', ' ')).toBe('Hello World')
    })

    test('trims at the end', () => {
        expect(trimCharSeq('haaa', 'a')).toBe('ha')
    })

    test('trims the whole string', () => {
        expect(trimCharSeq('aaaa', 'a')).toBe('a')
    })
})