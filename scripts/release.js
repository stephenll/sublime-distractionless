const execa = require('execa')
const fs = require('fs')
const inquirer = require('inquirer')
const semver = require('semver')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const release = async() => {
  const curVersion = JSON
    .parse(fs.readFileSync('./package.json', 'utf8'))
    .version

  console.log(`[./scripts/release.js] Current version: ${curVersion}`)

  const bumps = ['major', 'minor', 'patch', 'prerelease']
  const versions = {}
  bumps.forEach(b => {
    versions[b] = semver.inc(curVersion, b)
  })
  const bumpChoices = bumps.map(b => ({ name: `${b} (${versions[b]})`, value: b }))

  const { bump } = await inquirer.prompt([
    {
      name: 'bump',
      message: 'Select release type:',
      type: 'list',
      choices: [
        ...bumpChoices
      ]
    }
  ])

  const version = versions[bump]

  const { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `Confirm releasing ${version}?`,
      type: 'list',
      choices: ['Cancel', 'Ok']
    }
  ])

  if (yes === 'Cancel') {
    console.log('[./scripts/release.js] cancelled.')
    return
  }

  await execa('npm', ['--no-git-tag-version', 'version', version], { stdio: 'inherit' })
  await execa('git', ['add', '-A'], { stdio: 'inherit' })
  await execa('git', ['commit', '-m', `bump: Bump package from ${curVersion} to ${version}`], { stdio: 'inherit' })

  // assuming conventional-changelog-cli is installed globally via npm or yarn
  await execa('conventional-changelog', ['-p', 'angular', '-i', 'CHANGELOG.md', '-s'], { stdio: 'inherit' })

  await execa('git', ['add', '-A'], { stdio: 'inherit' })
  await execa('git', ['commit', '-m', `docs(CHANGELOG): Update CHANGELOG to ${version}`], { stdio: 'inherit' })

  // assuming crowbook (https://github.com/lise-henry/crowbook) and LaTeX are installed
  await execa('crowbook', ['--verbose', '--to', 'pdf', `crowbook.en.yaml`], { stdio: 'inherit' })
  await execa('crowbook', ['--verbose', '--to', 'pdf', `crowbook.de.yaml`], { stdio: 'inherit' })

  // wait to finish building pdf and not commit broken file
  await sleep(1000)

  await execa('git', ['add', '-A'], { stdio: 'inherit' })
  await execa('git', ['commit', '-m', `docs(DOCS): Update docs to ${version}`], { stdio: 'inherit' })

  await execa('git', ['commit', '--allow-empty', '-S', '-m', `release: ${version}`], { stdio: 'inherit' })
  await execa('git', ['tag', '-s', `${version}`, '-m', `${version}`], { stdio: 'inherit' })
  await execa('git', ['push', 'origin', 'master', '--tags'], { stdio: 'inherit' })

  console.log(`[./scripts/release.js] Done releasing version: ${version}`)
}

release().catch(err => {
  console.error(err)
  process.exit(1)
})
