---
home: true
heroImage: /screencast.gif
footer: ISC Licensed | Copyright © 2017 Johannes Rappen
---

[![License](https://img.shields.io/github/license/jrappen/sublime-distractionless.svg?style=flat-square)](https://github.com/jrappen/sublime-distractionless/blob/master/LICENSE)
[![Sublime Text minimum required version](https://img.shields.io/badge/Sublime%20Text-Build%203124+-orange.svg?style=flat-square)](https://www.sublimetext.com)
[![Downloads Package Control](https://img.shields.io/packagecontrol/dt/distractionless.svg?style=flat-square)](https://packagecontrol.io/packages/distractionless)
[![GitHub last commit](https://img.shields.io/github/last-commit/jrappen/sublime-distractionless.svg?style=flat-square)](https://github.com/jrappen/sublime-distractionless/commits/master)
[![Latest tag](https://img.shields.io/github/tag/jrappen/sublime-distractionless.svg?style=flat-square)](https://github.com/jrappen/sublime-distractionless/tags)
[![Donate via PayPal](https://img.shields.io/badge/paypal.me-jrappen-009cde.svg?style=flat-square)](https://www.paypal.me/jrappen)

![Screencast](https://raw.githubusercontent.com/jrappen/sublime-distractionless/master/docs/_images/screencast.gif)

> Screencast shows the Adaptive Theme with the Mariana Color Scheme. The font shown is `PragmataPro`.

## Requirements

distractionless targets and is tested against the **latest Build** of Sublime Text, currently requiring `Build 3124` or later.

* [ST3 (stable)](https://www.sublimetext.com/3)
* [ST3 (dev)](https://www.sublimetext.com/3dev)

## Installation

Using **Package Control** is not required, but recommended as it keeps your packages (with their dependencies) up-to-date!

### Installation via Package Control

* [Install Package Control](https://packagecontrol.io/installation#st3)
  * Close and reopen Sublime Text after having installed Package Control.
* Open the Command Palette (`Tools > Command Palette`).
* Choose `Package Control: Install Package`.
* Search for [`distractionless` on Package Control](https://packagecontrol.io/packages/distractionless) and select to install.

## Usage

distractionless makes Sublime Text automatically enter [Distraction Free mode](https://www.sublimetext.com/docs/3/distraction_free.html) in a windowed environment when you start editing a file.

distractionless will then make Sublime Text automatically switch back to normal mode as soon as:

* you save, open or clone a file.
* you open new, switch or close tabs.
* Sublime Text gains focus.

### Settings

Use the settings of Sublime Text to customize how views are displayed in each mode:

* `Preferences > Settings`
* `Preferences > Settings - Distraction Free`
* `Preferences > Settings - Syntax Specific`

Use the distractionless settings to customize when and what is toggled:

* `Preferences > Package Settings > distractionless > Settings`

## Source Code

[github.com/jrappen/sublime-distractionless](https://www.github.com/jrappen/sublime-distractionless)

### License

See [`LICENSE`](https://github.com/jrappen/sublime-distractionless/blob/master/LICENSE).

### Issues

Please use the command palette or the main menu to report an issue.

## Donations

[paypal.me/jrappen](https://www.paypal.me/jrappen)
