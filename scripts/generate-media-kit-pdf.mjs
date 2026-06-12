#!/usr/bin/env node
// Regenerates the downloadable media kit PDF from src/pdf/MediaKitDocument.jsx
// (which itself renders from src/data/mediaKit.js). Run automatically before
// each build so the PDF always reflects the latest media kit data.
import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'esbuild'
import React from 'react'
import { renderToFile } from '@react-pdf/renderer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const entry = path.join(root, 'src/pdf/MediaKitDocument.jsx')
// Mirror src/pdf/'s depth (2 levels below root) so the document's own
// root-relative path resolution (based on import.meta.url) still works
// once bundled.
const tmpDir = path.join(root, '.media-kit-pdf-tmp')
const tmpFile = path.join(tmpDir, 'pdf', 'bundle.mjs')
const outFile = path.join(root, 'public/media-kit/mrs-black-owned-media-kit.pdf')

await build({
  entryPoints: [entry],
  outfile: tmpFile,
  bundle: true,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
})

try {
  const { default: MediaKitDocument } = await import(`${pathToFileURL(tmpFile).href}?t=${Date.now()}`)

  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await renderToFile(React.createElement(MediaKitDocument), outFile)

  const { size } = await fs.stat(outFile)
  console.log(`Media kit PDF generated: ${path.relative(root, outFile)} (${(size / 1024 / 1024).toFixed(2)} MB)`)
} finally {
  await fs.rm(tmpDir, { recursive: true, force: true })
}
