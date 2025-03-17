import { describe, test, expect } from 'vitest'
import { initcap, trimCharSeq, mapString, cutSuffix } from './strings'

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

describe('mapString function', () => {
    test('works with ordinary strings', () => {
        let res = mapString('abcde', c => '1')
        expect(res).toBe('11111')
    })

    test('works with empty strings', () => {
        let res = mapString('', c => '1')
        expect(res).toBe('')
    })

    test('does not include empty strings into result', () => {
        let res = mapString('123456', c => Number(c) % 2 === 0 ? '' : c)
        expect(res).toBe('135')
    })
})

describe('cutSuffix works', () => {
    test('works with empty strings', () => {
        expect(cutSuffix('', '123')).toStrictEqual(['', false])
    })

    test('works with string without match', () => {
        expect(cutSuffix('abcde', '123')).toStrictEqual(['abcde', false])
    })

    test('works with string with a match', () => {
        expect(cutSuffix('abcde', 'e')).toStrictEqual(['abcd', true])
    })

    test('works with empty suffix', () => {
        expect(cutSuffix('abcde', '')).toStrictEqual(['abcde', true])
    })

    test('works with spaces', () => {
        expect(cutSuffix('abcde   ', '  ')).toStrictEqual(['abcde ', true])
    })

    test('is case-sensitive', () => {
        expect(cutSuffix('Hello, World!', 'world!')).toStrictEqual(['Hello, World!', false])
    })
})
