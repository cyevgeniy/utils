export function last(arr) {
    return arr[arr.length - 1]
}

export function toArray(p) {
    return p
        ? Array.isArray(p)
            ? p
            : [p]
        : []
}
