const execa = require('execa')
const fs = require('fs')
const inquirer = require('inquirer')
const semver = require('semver')

const release = async() => {
  const curVersion = JSON
    .parse(fs.readFileSync('./package.json', 'utf8'))
    .version

  console.log(`Current version: ${curVersion}`)

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

  console.log('[./scripts/release.js] bumping pkg version.')
  await execa('npm', ['--no-git-tag-version', 'version', version], {})

  console.log('[./scripts/release.js] (git) adding pkg file.')
  await execa('git', ['add', '-A'], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) commiting pkg file.')
  await execa('git', ['commit', '-m', `bump: Bump package from ${curVersion} to ${version}`], { stdio: 'inherit' })

  //
  // assuming conventional-changelog-cli is installed globally via npm or yarn
  //

  console.log('[./scripts/release.js] generating CHANGELOG.')
  await execa('conventional-changelog', ['-p', 'angular', '-i', 'docs/CHANGELOG.md', '-s'], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) adding CHANGELOG.')
  await execa('git', ['add', '-A'], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) commiting CHANGELOG.')
  await execa('git', ['commit', '-m', `docs(CHANGELOG): Update CHANGELOG to ${version}`], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) commiting release.')
  await execa('git', ['commit', '--allow-empty', '-m', `release: ${version}`], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) tagging release.')
  await execa('git', ['tag', `${version}`, '-m', `${version}`], { stdio: 'inherit' })

  console.log('[./scripts/release.js] (git) pushing with following tags.')
  await execa('git', ['push', '--tags'], { stdio: 'inherit' })

  console.log('[./scripts/release.js] done.')
}

release().catch(err => {
  console.error(err)
  process.exit(1)
})
