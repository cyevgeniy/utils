export function initcap(s) {
    let words = s.split(' ')

    for (let i = 0; i < words.length; ++i) {
        if (words[i].length === 0)
            continue;

        let cap = words[i][0].toUpperCase()
        let low = words[i].slice(1).toLowerCase()

        words[i] = cap + low
    }

    return words.join(' ')
}
