#!/usr/bin/env python
# coding: utf-8


import sublime_plugin
import webbrowser


PKG_NAME = __package__.split('.')[0]
URL_DOCS = 'https://jrappen.github.io/sublime-distractionless'
URL_PAYPAL = 'https://www.paypal.me/jrappen'
URL_ISSUES = 'https://github.com/jrappen/sublime-distractionless/issues'


class DistractionlessChangelog(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab('{}/#/CHANGELOG'.format(URL_DOCS))


class DistractionlessDocs(sublime_plugin.TextCommand):

    def run(self, edit, language='en'):
        if language == 'de':
            webbrowser.open_new_tab('{}/#/de/'.format(URL_DOCS))
        else:
            webbrowser.open_new_tab(URL_DOCS)


class DistractionlessDonations(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab(URL_PAYPAL)


class DistractionlessIssues(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab(URL_ISSUES)
