import { describe, test, expect } from 'vitest'
import { initcap } from './strings'

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