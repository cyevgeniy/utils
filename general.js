export function len(v) {
    if (typeof v === 'string' || Array.isArray(v))
        return v.length

    let tag = Object.prototype.toString.call(v)

        if (tag === '[object Map]' || tag === '[object Set]')
            return v.size

    if (v !== null && typeof v === 'object')
        return Object.keys(v).length

    return 0
}


export function isPrimitive(v) {
    let t = typeof v
    return (t !== 'object' && t !== 'function') || v === null
}
