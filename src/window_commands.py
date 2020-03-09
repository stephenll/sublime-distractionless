#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin


PKG_NAME = __package__.split('.')[0]


class DistractionlessOpenDocs(sublime_plugin.WindowCommand):

    def run(self, resource_path='docs/README.en.md'):
        try:
            w = self.window
            v = w.active_view()
            import mdpopups
            md_preview = mdpopups.md2html(
                view=v,
                markup=sublime.load_resource('Packages/{}/{}'.format(PKG_NAME, resource_path)),
                # TODO: markup=sublime.load_resource(f'Packages/{PKG_NAME}/{resource_path}'),
                template_vars=None,
                template_env_options=None,
                nl2br=True,
                allow_code_wrap=False
            )
            preview_sheet = w.new_html_sheet(
                name='{}/{}'.format(PKG_NAME, resource_path),
                # TODO: name=f'{PKG_NAME}/{resource_path}',
                contents=md_preview,
                cmd='open_url',
                args=None,
                flags=0,
                group=-1
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
