#!/usr/bin/env python
# coding: utf-8


import sublime

from .distractionless import *
from .text_commands import *


def plugin_loaded():
    distractionless.plugin_loaded()
