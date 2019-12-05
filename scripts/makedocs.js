const execa = require('execa')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const makedocs = async() => {
  console.log(`[./scripts/makedocs.js] Please wait while docs are being generated ...`)

  // assuming crowbook (https://github.com/lise-henry/crowbook) and LaTeX are installed
  await execa('crowbook', ['--verbose', '--to', 'pdf', `crowbook.en.yaml`], { stdio: 'inherit' })
  await execa('crowbook', ['--verbose', '--to', 'pdf', `crowbook.de.yaml`], { stdio: 'inherit' })

  // wait to finish building pdf and not commit broken file
  await sleep(3000)

  console.log(`[./scripts/makedocs.js] Done generating docs.`)
}

makedocs().catch(err => {
  console.error(err)
  process.exit(1)
})
