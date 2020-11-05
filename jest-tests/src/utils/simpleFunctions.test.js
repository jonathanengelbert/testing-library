import generateIntroduction from "./simpleFunctions";

describe('Intro function', () => {
    test('should print "Jon is 35 years old"', () => {
        const testIntro = generateIntroduction('Jon', 35)

        expect(testIntro).toBe('Jon is 35 years old')
    })

    test('should not print if age is less than 0', () => {
        const testIntro  = generateIntroduction('Unborn Baby', -2)

        expect(testIntro).toBe('Not a valid age')
    })

    test('should print "years" or "year" old if according to age', () => {
        const oneYearOld = generateIntroduction('Baby', 1)
        const tenYearOld = generateIntroduction('Child', 10)

        expect(oneYearOld).toBe('Baby is 1 year old')
        expect(tenYearOld).toBe('Child is 10 years old')
    })

    test('should not accept incorrect data type', () => {
        const notValidName = generateIntroduction(12, 'Dog');
        const notValidAge = generateIntroduction('Doggy', 'Dog');

        expect(generateIntroduction(12, 'Dog')).toThrow()
        // expect(notValidAge).toThrow()
    })
})