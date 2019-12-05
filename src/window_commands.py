#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin

import subprocess
import os


PKG_NAME = __package__.split('.')[0]


class DistractionlessOpenPdfCommand(sublime_plugin.WindowCommand):

    def run(self, resource_path='docs/distractionless.en.pdf'):
        pf = sublime.platform()
        pp = sublime.packages_path()
        fp = f'{pp}/{PKG_NAME}/{resource_path}'
        if pf == 'osx':
            subprocess.call(('open', fp))
        elif pf == 'windows':
            os.startfile(fp)
        elif pf == 'linux':
            subprocess.call(('xdg-open', fp))
