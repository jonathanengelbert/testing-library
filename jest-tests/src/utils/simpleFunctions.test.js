import generateIntroduction from "./simpleFunctions";

describe('Intro function', () => {
    test('should print "Jon is 35 years old"', () => {
        expect(generateIntroduction('Jon', 35)).toBe('Jon is 35 years old')
    })

    test('should not print if age is less than 0', () => {
        expect(generateIntroduction('Unborn Baby', -2)).toBe('Not a valid age')
    })

    test('should print "years" or "year" old if according to age', () => {
        expect(generateIntroduction('Baby', 1)).toBe('Baby is 1 year old')
        expect(generateIntroduction('Child', 10)).toBe('Child is 10 years old')
    })

    test('should not accept incorrect data type', () => {
        expect(() => generateIntroduction(12, 'Dog')).toThrow('12 is not a string')
        expect(() => generateIntroduction('Doggy', 'Dog')).toThrow('Dog is not a number');
    })
})