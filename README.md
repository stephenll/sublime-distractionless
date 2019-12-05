[![License](https://img.shields.io/github/license/jrappen/sublime-distractionless.svg?style=flat-square)](https://github.com/jrappen/sublime-distractionless/blob/master/LICENSE)[![Required ST Build](https://img.shields.io/badge/ST-Build%204050+-orange.svg?style=flat-square)](https://www.sublimetext.com)[![Downloads Package Control](https://img.shields.io/packagecontrol/dt/distractionless.svg?style=flat-square)](https://packagecontrol.io/packages/distractionless)[![Latest tag](https://img.shields.io/github/tag/jrappen/sublime-distractionless.svg?style=flat-square)](https://github.com/jrappen/sublime-distractionless/tags)[![Donate via PayPal](https://img.shields.io/badge/paypal.me-jrappen-009cde.svg?style=flat-square)](https://www.paypal.me/jrappen)[![SublimeHQ Discord](https://img.shields.io/discord/280102180189634562?label=SublimeHQ%20Discord&logo=discord&style=flat-square)](https://discord.gg/D43Pecu)

# distractionless plug-in for [Sublime Text](https://www.sublimetext.com)

| Languages        | i18n Information                                                                                     |
|------------------|------------------------------------------------------------------------------------------------------|
| English          | Plugin documentation is available in English via the menu or command palette.                        |
| German (Deutsch) | Eine plug-in Dokumentation ist über das Menü oder die Kurzbefehleingabe (command palette) verfügbar. |

![Screencast](./img/screencast.gif)

> Screencast shows the Adaptive Theme with the Mariana Color Scheme. The font shown is `PragmataPro`.

## Requirements

distractionless targets and is tested against the **latest Build** of Sublime Text, currently requiring **`Build 4050`** or later.

* Download [Sublime Text](https://www.sublimetext.com)
  * (stable channel)
  * (dev channel)

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
* `Preferences > Settings - Syntax Specific`
* `Preferences > Settings - Distraction Free`

You might want to set the following in `Preferences > Settings`:

```js
{
    "auto_hide_menu": true,
    "auto_hide_status_bar": true,
    "auto_hide_tabs": true
}
```

Use the distractionless settings to further customize when and what is toggled:

* `Preferences > Package Settings > distractionless > Settings`

Below the currently supported settings:

```js
{
//  number of changes after which UI is toggled automatically
    "distractionless.toggle_after": 1,

//  toggle minimap when switching modes
    "distractionless.toggle_minimap": true,

//  toggle sidebar when switching modes
    "distractionless.toggle_sidebar": true
}
```

## Source Code

[github.com/jrappen/sublime-distractionless](https://www.github.com/jrappen/sublime-distractionless)

### License

See [`LICENSE`](https://github.com/jrappen/sublime-distractionless/blob/master/LICENSE).

### Issues

Please use the command palette or the main menu to report an issue.

## Donations

[paypal.me/jrappen](https://www.paypal.me/jrappen)
