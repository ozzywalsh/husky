/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname, '../ci-post-checkout')

if (fs.existsSync(filename)) {
  const data = fs.readFileSync(filename, 'utf-8')

  if (data.split(' ').length !== 3) {
    console.log('Not all params were set in HUSKY_GIT_PARAMS')
    console.log('Got', data)
    process.exit(1)
  }

  fs.unlinkSync(filename)
  console.log(
    '.git/hooks/post-checkout script has run, hooks were not skipped.'
  )
  process.exit(1)
} else {
  console.log(
    '.git/hooks/post-checkout script has not run, hooks were successfully skipped.'
  )
}
