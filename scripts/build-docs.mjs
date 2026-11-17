import { readdir, readFile, writeFile } from 'node:fs/promises'
import { parse as parseComments } from 'comment-parser'
import { parse as parseJavaScript } from 'acorn'

const root = new URL('../', import.meta.url)
const declarations = await readFile(new URL('index.d.ts', root), 'utf8')
const lines = declarations.split('\n')
const docs = new Map()

// Accept the existing ordinary block comment above the Primitive type too.
for (const block of parseComments(declarations.replace(/^\/\*(?!\*)/gm, '/**'), { spacing: 'preserve' })) {
    const nextLines = lines.slice(block.source.at(-1).number + 1).join('\n')
    const name = nextLines.match(/^export function (\w+)/m)?.[1]
    if (name) docs.set(name, block)
}

const output = ['# Utils', 'Copy a function into your project. No package installation required.']
const files = (await readdir(root, { withFileTypes: true }))
    .filter(entry => entry.isFile() && entry.name.endsWith('.js'))
    .map(entry => entry.name)
    .sort()
for (const file of files) {
    const source = await readFile(new URL(file, root), 'utf8')
    const ast = parseJavaScript(source, { ecmaVersion: 'latest', sourceType: 'module' })
    const functions = ast.body
        .filter(node => node.type === 'ExportNamedDeclaration' && node.declaration?.type === 'FunctionDeclaration')
        .map(node => node.declaration)
    if (!functions.length) continue
    output.push(`## ${file.slice(0, -3)}`)

    for (const fn of functions) {
        const name = fn.id.name
        const doc = docs.get(name)
        if (!doc) throw new Error(`Missing documentation for ${name}`)
        output.push(`### ${name}`, doc.description.trim())
        for (const tag of doc.tags) {
            if (tag.tag === 'example') {
                const example = tag.source.map(line => line.tokens.description).join('\n').trim()
                output.push('Example:', `\`\`\`js\n${example}\n\`\`\``)
            } else {
                const type = tag.type ? ` {${tag.type}}` : ''
                output.push(`- **@${tag.tag}${type} ${tag.name}** — ${tag.description.trim()}`)
            }
        }
        output.push(`\`\`\`js\n${source.slice(fn.start, fn.end)}\n\`\`\``)
    }
}

await writeFile(new URL('docs/docs.md', root), output.join('\n\n') + '\n')
console.log('Built docs/docs.md')
