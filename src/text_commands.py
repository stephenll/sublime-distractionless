#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin


PKG_NAME = __package__.split('.')[0]


class DistractionlessOpenDocs(sublime_plugin.TextCommand):

    def run(self, edit, resource_path='docs/README.en.md'):
        try:
            v = self.view
            w = v.window()
            import mdpopups
            md_preview = mdpopups.md2html(
                view=v,
                markup=sublime.load_resource(f'Packages/{PKG_NAME}/{resource_path}'),
                template_vars=None,
                template_env_options=None,
                nl2br=True,
                allow_code_wrap=False
            )
            preview_sheet = w.new_html_sheet(
                name=f'{PKG_NAME}/{resource_path}',
                contents=md_preview,
                cmd='open_url',
                args=None,
                flags=0,
                group=-1
            )
        except Exception as e:
            pass

    def is_visible(self):
        try:
            import mdpopups
            return True
        except Exception as e:
            return False
