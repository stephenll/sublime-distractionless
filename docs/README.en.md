# distractionless plug-in for [`Sublime Text`](https://www.sublimetext.com)

## Requirements

distractionless targets and is tested against the **latest Build** of Sublime Text, currently requiring **`Build 4065`** or later.

* Download [Sublime Text](https://www.sublimetext.com)
    * (stable channel)
    * (dev channel)

## Installation

Using **Package Control** is not required, but recommended as it keeps your packages (with their dependencies) up-to-date!

### Installation via Package Control

* [Install Package Control](https://packagecontrol.io/installation)
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

```jsonc
{
    "auto_hide_menu": true,
    "auto_hide_status_bar": true,
    "auto_hide_tabs": true
}
```

Use the distractionless settings to further customize when and what is toggled:

* `Preferences > Package Settings > distractionless > Settings`

Below the currently supported settings:

```jsonc
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
