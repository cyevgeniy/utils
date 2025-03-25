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

export function at(array, index, soft=false) {
    let len = array.length
    if (index < 0)
        index = !soft ? len+index : Math.max(len+index, 0)
    else
        index = !soft ? index : Math.min(index, len-1)

    return array[index]
}
