#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
from collections import defaultdict
from sublime_lib import NamedSettingsDict


PKG_NAME = __package__.split('.')[0]
DL_PREF = None
change_counter = None


def load_settings(reload=False):

    try:
        global DL_PREF
        DL_PREF = NamedSettingsDict(PKG_NAME)
        DL_PREF.subscribe()
    except Exception as e:
        print(e)


def set_change_count(id, count):

    global change_counter
    change_counter[id] = count


def increment_change_count(id):

    global change_counter
    change_counter[id] += 1
    return change_counter[id]


def plugin_loaded():

    global change_counter
    change_counter = defaultdict(int)

    load_settings()


class DistractionlessListener(sublime_plugin.EventListener):

    def on_modified_async(self, view):
        if view.settings().get('is_widget', False):
            return
        w = view.window()
        if w is None:
            w = sublime.active_window()
        count = increment_change_count(w.id())
        if count == DL_PREF.get('distractionless.toggle_after', 10):
            # Preferences > Settings - Distraction Free
            DF_PREF = NamedSettingsDict('Distraction Free')
            for v in w.views():
                v.settings().set('draw_centered',
                                 DF_PREF.get('draw_centered', True))
                v.settings().set('draw_indent_guides',
                                 DF_PREF.get('draw_indent_guides', True))
                v.settings().set('draw_white_space',
                                 DF_PREF.get('draw_white_space', 'selection'))
                v.settings().set('fold_buttons',
                                 DF_PREF.get('fold_buttons', True))
                v.settings().set('gutter',
                                 DF_PREF.get('gutter', False))
                v.settings().set('line_numbers',
                                 DF_PREF.get('line_numbers', False))
                v.settings().set('rulers',
                                 DF_PREF.get('rulers', []))
                v.settings().set('scroll_past_end',
                                 DF_PREF.get('scroll_past_end', True))
                v.settings().set('word_wrap',
                                 DF_PREF.get('word_wrap', True))
                v.settings().set('wrap_width',
                                 DF_PREF.get('wrap_width', 80))
            w.set_menu_visible(False)
            w.set_sidebar_visible(False)
            w.set_tabs_visible(False)
            w.set_minimap_visible(False)
            # w.set_status_bar_visible(False)

    def on_activated_async(self, view):
        self.leave_dfm_and_reset_count(view)

    def on_new_async(self, view):
        self.leave_dfm_and_reset_count(view)

    def on_clone_async(self, view):
        self.leave_dfm_and_reset_count(view)

    def on_load_async(self, view):
        self.leave_dfm_and_reset_count(view)

    def on_pre_save_async(self, view):
        self.leave_dfm_and_reset_count(view)

    def on_pre_close(self, view):
        self.leave_dfm_and_reset_count(view)

    def leave_dfm_and_reset_count(self, view):
        w = view.window()
        if w is None:
            w = sublime.active_window()
        # reset change_counter
        set_change_count(w.id(), 0)
        # Preferences > Settings
        PREF = NamedSettingsDict('Preferences')
        for v in w.views():
            v.settings().set('draw_centered',
                             PREF.get('draw_centered', False))
            v.settings().set('draw_indent_guides',
                             PREF.get('draw_indent_guides', True))
            v.settings().set('draw_white_space',
                             PREF.get('draw_white_space', 'selection'))
            v.settings().set('fold_buttons',
                             PREF.get('fold_buttons', True))
            v.settings().set('gutter',
                             PREF.get('gutter', True))
            v.settings().set('line_numbers',
                             PREF.get('line_numbers', True))
            v.settings().set('rulers',
                             PREF.get('rulers', []))
            v.settings().set('scroll_past_end',
                             PREF.get('scroll_past_end', True))
            v.settings().set('word_wrap',
                             PREF.get('word_wrap', 'auto'))
            v.settings().set('wrap_width',
                             PREF.get('wrap_width', 0))
        w.set_menu_visible(True)
        w.set_sidebar_visible(True)
        w.set_tabs_visible(True)
        w.set_minimap_visible(True)
        # w.set_status_bar_visible(True)
