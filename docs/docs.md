# Utils

Copy a function into your project. No package installation required.

## arrays

### last

Returns the last element in an array
If array is empty, returns undefined

```js
function last(arr) {
    return arr[arr.length - 1]
}
```

### toArray

Normalizes T | T[] to array
If the value is null or undefined, returns an empty array.

```js
function toArray(p) {
    return p == null
        ? []
        : Array.isArray(p)
            ? p
            : [p]
}
```

### at

Returns an element in an array by index.

- **@param array** — Array

- **@param index** — An index. If negative, returns element from the end of an array

- **@param soft** — A flag that turns on "soft" element search.

```js
function at(array, index, soft=false) {
    let len = array.length
    if (index < 0)
        index = !soft ? len+index : Math.max(len+index, 0)
    else
        index = !soft ? index : Math.min(index, len-1)

    return array[index]
}
```

## general

### len

Returns the length of a value depending on its type

- Arrays: the number of elements in an array
- Strings: the number of code uits in a string
- Sets: the number of elements in a set
- Maps: the number of elements in a map
- Objects: the number of own enumarable fields

For all other cases it returns 0

```js
function len(v) {
    if (typeof v === 'string' || Array.isArray(v))
        return v.length

    let tag = Object.prototype.toString.call(v)

        if (tag === '[object Map]' || tag === '[object Set]')
            return v.size

    if (v !== null && typeof v === 'object')
        return Object.keys(v).length

    return 0
}
```

### isPrimitive

Returns true if the value is of a primitive type.
Primitive types are:
  - number
  - string
  - Symbol
  - null
  - undefined
  - boolean
  - BigInt

```js
function isPrimitive(v) {
    let t = typeof v
    return (t !== 'object' && t !== 'function') || v === null
}
```

## strings

### initcap

Capitalizes the first letter and lowercases all other letters in each
word of the passed string

```js
function initcap(s) {
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
```

### trimCharSeq

Modifies a string in a such way that the specified char can
occur only one time in a row

```js
function trimCharSeq(s, c) {
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
```

### mapString

Executes `fn` callback on each character in a string and joins results
into a new string.

```js
function mapString(s, fn) {
    return s.split('').map(fn).join('')
}
```

### cutSuffix

Returns a string without the provided suffix and and reports whether
it found the suffix.

```js
function cutSuffix(s, suffix) {
    let found = s.endsWith(suffix)

    return [found ? s.substring(0, s.lastIndexOf(suffix)) : s, found]
}
```
