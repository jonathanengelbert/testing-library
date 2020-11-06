export default function generateIntroduction(name, age) {

    if(typeof name !== 'string') throw new Error(`${name} is not a string`)
    if(typeof age !== 'number') throw new Error(`${age} is not a number`)

    if (age < 0) {
        return 'Not a valid age';
    }

    const yearOrYears = age > 1 ? 'years' : 'year';
    return `${name} is ${age} ${yearOrYears} old`;
}
