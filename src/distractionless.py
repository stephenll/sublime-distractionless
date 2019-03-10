#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
from collections import defaultdict

PKG_NAME = __package__.split('.')[0]
DL_PREF = None
change_counter = None


def load_settings(reload=False):

    try:
        global DL_PREF
        DL_PREF = sublime.load_settings('{}.sublime-settings'.format(PKG_NAME))
        DL_PREF.clear_on_change('reload')
        DL_PREF.add_on_change('reload', lambda: load_settings(reload=True))
    except Exception as e:
        print(e)

    if reload:
        sublime.status_message('{}: {}'.format(PKG_NAME, 'Reloaded settings on change.'))


def plugin_loaded():

    global change_counter
    change_counter = defaultdict(int)

    load_settings(reload=False)


class DistractionlessListener(sublime_plugin.EventListener):

    @staticmethod
    def _reset_setting(view_prefs, syntax_prefs, subl_prefs, setting, default):
        view_prefs.set(setting, syntax_prefs.get(setting, subl_prefs.get(setting, default)))

    @staticmethod
    def _set_setting(view_prefs, df_prefs, setting, default):
        view_prefs.set(setting, df_prefs.get(setting, default))

    @staticmethod
    def _reset_change_count(id):
        global change_counter
        change_counter[id] = 0

    @staticmethod
    def _increment_change_count(id):
        global change_counter
        change_counter[id] += 1
        return change_counter[id]

    @staticmethod
    def _leave_dfm_and_reset_count(view):
        w = view.window()
        if w is None:
            w = sublime.active_window()
        self._reset_change_count(w.id())
        # Preferences > Settings
        PREF = sublime.load_settings('Preferences.sublime-settings')
        for v in w.views():
            vs = v.settings()
            current_syntax = vs.get('syntax').split('/')[-1].split('.')[0]
            # Preferences > Settings - Syntax Specific
            SYNTAX_PREF = sublime.load_settings(current_syntax + '.sublime-settings')
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'draw_centered', False)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'draw_indent_guides', True)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'draw_white_space', 'selection')
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'fold_buttons', True)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'gutter', True)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'line_numbers', True)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'rulers',[])
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'scroll_past_end', True)
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'word_wrap', 'auto')
            self._reset_setting(vs, SYNTAX_PREF, PREF, 'wrap_width', 0)
        if DL_PREF.get('distractionless.toggle_menu', True):
            if sublime.platform() in ['linux', 'windows']:
                w.set_menu_visible(True)
        if DL_PREF.get('distractionless.toggle_sidebar', True):
            w.set_sidebar_visible(True)
        if DL_PREF.get('distractionless.toggle_tabs', True):
            w.set_tabs_visible(True)
        if DL_PREF.get('distractionless.toggle_minimap', True):
            w.set_minimap_visible(True)
        if DL_PREF.get('distractionless.toggle_status_bar', False):
            w.set_status_bar_visible(True)

    def on_modified_async(self, view):
        if view.settings().get('is_widget', False):
            return
        w = view.window()
        if w is None:
            w = sublime.active_window()
        count = self._increment_change_count(w.id())
        if count is not DL_PREF.get('distractionless.toggle_after', 10):
            return
        # Preferences > Settings - Distraction Free
        DF_PREF = sublime.load_settings('Distraction Free.sublime-settings')
        for v in w.views():
            vs = v.settings()
            self._set_setting(vs, DF_PREF, 'draw_centered', True)
            self._set_setting(vs, DF_PREF, 'draw_indent_guides', True)
            self._set_setting(vs, DF_PREF, 'draw_white_space', 'selection')
            self._set_setting(vs, DF_PREF, 'fold_buttons', True)
            self._set_setting(vs, DF_PREF, 'gutter', False)
            self._set_setting(vs, DF_PREF, 'line_numbers', False)
            self._set_setting(vs, DF_PREF, 'rulers', [])
            self._set_setting(vs, DF_PREF, 'scroll_past_end', True)
            self._set_setting(vs, DF_PREF, 'word_wrap', True)
            self._set_setting(vs, DF_PREF, 'wrap_width', 80)
        if DL_PREF.get('distractionless.toggle_menu', True):
            if sublime.platform() in ['linux', 'windows']:
                w.set_menu_visible(False)
        if DL_PREF.get('distractionless.toggle_sidebar', True):
            w.set_sidebar_visible(False)
        if DL_PREF.get('distractionless.toggle_tabs', True):
            w.set_tabs_visible(False)
        if DL_PREF.get('distractionless.toggle_minimap', True):
            w.set_minimap_visible(False)
        if DL_PREF.get('distractionless.toggle_status_bar', False):
            w.set_status_bar_visible(False)

    def on_activated_async(self, view):
        self._leave_dfm_and_reset_count(view)

    def on_new_async(self, view):
        self._leave_dfm_and_reset_count(view)

    def on_clone_async(self, view):
        self._leave_dfm_and_reset_count(view)

    def on_load_async(self, view):
        self._leave_dfm_and_reset_count(view)

    def on_pre_save_async(self, view):
        self._leave_dfm_and_reset_count(view)

    def on_pre_close(self, view):
        self._leave_dfm_and_reset_count(view)
