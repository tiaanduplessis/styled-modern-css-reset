#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const readLocation = path.join(process.cwd(), 'node_modules', 'modern-css-reset', 'dist', 'reset.css')
const writeLocation = path.join(process.cwd(), 'src', 'index.js')
const resetContent = fs.readFileSync(readLocation, 'utf-8')

const newFile = `
import { css, createGlobalStyle } from 'styled-components'

export const reset = css\`
${resetContent}
\`

export const ModernCSSReset = createGlobalStyle(reset)

export default reset
`

fs.writeFileSync(writeLocation, newFile)
