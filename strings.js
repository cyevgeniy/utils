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

export function trimCharSeq(s, c) {
    if (c.length !== 1)
        return s

    let res = ''
    let dupl = false

    for(let i=0; i < s.length; ++i) {
        if (s[i] !== c) {
            dupl = false
            res += s[i]
            continue
        }
        if (dupl)
            continue
        
        res += s[i]
        dupl = true  
    }

    return res
}

export function mapString(s, fn) {
    return s.split('').map(fn).join('')
}