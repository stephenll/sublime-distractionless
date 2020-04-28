#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin


PKG_NAME = __package__.split('.')[0]


# TODO: add type hints
class DistractionlessOpenDocs(sublime_plugin.WindowCommand):

    def run(self, resource_path='docs/README.en.md'):
        try:
            w = self.window
            v = w.active_view()
            import mdpopups
            preview_sheet = mdpopups.new_html_sheet(
                window=w,
                # TODO: update for Py3.8 with f-strings
                name='{}/{}'.format(PKG_NAME, resource_path),
                contents=sublime.load_resource('Packages/{}/{}'.format(PKG_NAME, resource_path)),
                md=True
            )
        except Exception as e:
            print('distractionless: Exception: {}'.format(e))
            # TODO: print(f'distractionless: Exception: {e}')

    # def is_enabled(self): return bool

    def is_visible(self):
        try:
            import mdpopups
            return True
        except Exception as e:
            return False

    # def description(self): return str
    # def input(self, args): return CommandInputHandler or None
