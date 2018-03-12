/*

    lang-bg.js

    Bulgarian translation for Snap!

    originally written by Jens Mönig
    rewritten by Alfonso Ruzafa

    Copyright (C) 2013 by Jens Mönig

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Create a translation from scratch:

    Switch to the english version of Snap! (or choose one of the available
    languages you are more comfortable with):

        Settings > Language... > English

    While holding the shift key, press the Settings button again. A dev-only
    option will be shown: "Generate lang-XX.js file...". Click it and you will
    download a file containing all Snap! translatable strings along with the
    available translations for the language you choosed above and "undefined"
    for those strings not yet translated.

    Note that the Snap! original strings are written in english so no english
    translation file is needed. That's because the lang-en.js will be full of
    "undefined" translations. This is a good start point if you want to start
    translating Snap! from scratch!


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    Replace all occurrences of the "XX" from SnapTranslator.dict["XX"]
    in the file with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict['fr'] = {
        it - Italian => SnapTranslator.dict['it'] = {
        pl - Polish => SnapTranslator.dict['pl'] = {
        pt - Portuguese => SnapTranslator.dict['pt'] = {
        es - Spanish => SnapTranslator.dict['es'] = {
        el - Greek => => SnapTranslator.dict['el'] = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)

    Also change the header file fields and the metadata... language name,
    name in english and your contact info using the following format
    (only the name is mandatory):

        Your name <your@email.com> (your.homepage.com)

    IMPORTANT:

        Once edited, you MUST copy the metadata definition snippet and
        paste at the end of the locale.js file. This will activate the support
        for your language.

        Rename the file you downloaded to lang-XX.js, with XX being the two
        letter code you used previously.

        Go back to to Snap! and reload the page. An entry with the name of
        your language should be shown under the Languages menu.


    3. Translate

    Then work through the dictionary, providing your own translations as
    values for the english key strings. The dictionary is a straight-forward
    JavaScript ad-hoc object, for review purposes it should be formatted
    as follows:

        {
            'English string': // morphic.js:783
                'Translation string',
            'last key':
                undefined,
            'a key with a {{ placeholder }}':
                'this translation a {{ placeholder }} has',
        }

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    Placeholders are strings automatically provided by Snap! in runtime.
    You are allowed to place in the most natural way in your translation,
    or even ignore it completely if it's justified.

    Also, note that is OK if you left an english string untranslated, that is,
    its value set to "undefined". So you don't need to delete that key/value
    pairs. Maybe a future translator would find a suitable translation for it.

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>
        and: <https://r12a.github.io/apps/conversion/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, send the lang-XX.js file to me for inclusion in the
    official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:XX

    to the URL, XX representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens

*/

/* global SnapTranslator */

// Copy the following code snippet and paste it in the locale.js file:
// ✂ - - - - - - - - - - - - - - - - -  -   -
SnapTranslator.dict.bg = {
    metadata: {
        'name': // the name as it should appear in the language menu
            '\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438',
        'english_name': // the english name of the language
            'Bulgarian',
        'translators': [ // translators authors for the Translators tab
            '\u0418\u0432\u0430\u043D \u0421\u0430\u0432\u043E\u0432 <ivan.savov@gmail.com>'
        ],
        'last_changed': // this, too, will appear in the Translators tab
            '2015-11-02',
    },
    strings: {},
};
// ✂ - - - - - - - - - - - - - - - - -  -   -

SnapTranslator.dict.bg.strings = {
    '0': // blocks.js:1178
        '0',
    '1': // blocks.js:1179
        '1',
    '2': // blocks.js:1180
        '2',
    '3': // blocks.js:1181
        '3',
    '4': // blocks.js:1182
        '4',
    '5': // blocks.js:1183
        '5',
    '6': // blocks.js:1184
        '6',
    '7': // blocks.js:1185
        '7',
    '8': // blocks.js:1186
        '8',
    '9': // blocks.js:1187
        '9',
    'cached inputs size do not match': // blocks.js:341
        undefined,
    'cached input does not match': // blocks.js:347
        undefined,
    'pen trails': // blocks.js:820 blocks.js:8393 objects.js:578 objects.js:7436
        '\u043B\u0438\u043D\u0438\u0438 \u0441\u043B\u0435\u0434 \u043C\u043E\u043B\u0438\u0432\u0430',
    'stage image': // blocks.js:821
        undefined,
    'with inputs': // blocks.js:831
        '\u0441 \u0432\u0445\u043E\u0434 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438',
    'block variables': // blocks.js:840 byob.js:1053
        undefined,
    'Input Names': // blocks.js:844
        '\u0418\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0445\u043E\u0434\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438',
    'input names': // blocks.js:850
        '\u0438\u043C\u0435\u043D\u0430 \u043D\u0430 \u0432\u0445\u043E\u0434\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u0438',
    'Input name': // blocks.js:902 blocks.js:5344
        '\u0418\u043C\u0435 \u043D\u0430 \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 \u0434\u0430\u043D\u043D\u0438',
    '(90) right': // blocks.js:935 morphic.js:4888
        '(90) \u043D\u0430\u0434\u044F\u0441\u043D\u043E',
    '(-90) left': // blocks.js:936 morphic.js:4889
        '(-90) \u043D\u0430\u043B\u044F\u0432\u043E',
    '(0) up': // blocks.js:937 morphic.js:4890
        '(0) \u043D\u0430\u0433\u043E\u0440\u0435',
    '(180) down': // blocks.js:938 morphic.js:4891
        '(180) \u043D\u0430\u0434\u043E\u043B\u0443',
    'random': // blocks.js:939
        undefined,
    '(1) sine': // blocks.js:956
        undefined,
    '(2) square': // blocks.js:957
        undefined,
    '(3) sawtooth': // blocks.js:958
        undefined,
    '(4) triangle': // blocks.js:959
        undefined,
    'January': // blocks.js:968 widgets.js:1941
        undefined,
    'February': // blocks.js:969 widgets.js:1942
        undefined,
    'March': // blocks.js:970 widgets.js:1943
        undefined,
    'April': // blocks.js:971 widgets.js:1944
        undefined,
    'May': // blocks.js:972 widgets.js:1945
        undefined,
    'June': // blocks.js:973 widgets.js:1946
        undefined,
    'July': // blocks.js:974 widgets.js:1947
        undefined,
    'August': // blocks.js:975 widgets.js:1948
        undefined,
    'September': // blocks.js:976 widgets.js:1949
        undefined,
    'October': // blocks.js:977 widgets.js:1950
        undefined,
    'November': // blocks.js:978 widgets.js:1951
        undefined,
    'December': // blocks.js:979 widgets.js:1952
        undefined,
    'clicked': // blocks.js:988
        undefined,
    'pressed': // blocks.js:989
        undefined,
    'dropped': // blocks.js:990
        undefined,
    'mouse-entered': // blocks.js:991
        undefined,
    'mouse-departed': // blocks.js:992
        undefined,
    'scrolled-up': // blocks.js:993
        undefined,
    'scrolled-down': // blocks.js:994
        undefined,
    'year': // blocks.js:1004 widgets.js:2063
        undefined,
    'month': // blocks.js:1005
        undefined,
    'date': // blocks.js:1006
        undefined,
    'day of week': // blocks.js:1007
        undefined,
    'hour': // blocks.js:1008
        undefined,
    'minute': // blocks.js:1009
        undefined,
    'second': // blocks.js:1010
        undefined,
    'time in milliseconds': // blocks.js:1011
        undefined,
    'letter': // blocks.js:1021
        undefined,
    'whitespace': // blocks.js:1022
        undefined,
    'line': // blocks.js:1023 symbols.js:113
        undefined,
    'tab': // blocks.js:1024
        undefined,
    'cr': // blocks.js:1025
        undefined,
    'csv': // blocks.js:1026
        undefined,
    'last': // blocks.js:1036 blocks.js:1048
        '\u043F\u043E\u0441\u043B\u0435\u0434\u0435\u043D',
    'all': // blocks.js:1038 blocks.js:1265 byob.js:3874
        '\u0432\u0441\u0438\u0447\u043A\u043E',
    'any': // blocks.js:1049
        '\u043D\u044F\u043A\u043E\u0439',
    'distance': // blocks.js:1058
        undefined,
    'direction': // blocks.js:1059 blocks.js:2483 blocks.js:8556 objects.js:300
        '\u043F\u043E\u0441\u043E\u043A\u0430',
    'color': // blocks.js:1117 morphic.js:4132 morphic.js:4135 morphic.js:12219 morphic.js:12222
        undefined,
    'fisheye': // blocks.js:1118
        undefined,
    'whirl': // blocks.js:1119
        undefined,
    'pixelate': // blocks.js:1120
        undefined,
    'mosaic': // blocks.js:1121
        undefined,
    'duplicate': // blocks.js:1122 blocks.js:2545 blocks.js:11904 gui.js:7368 gui.js:7710 morphic.js:4167 objects.js:3236
        '\u0434\u0443\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u044F',
    'negative': // blocks.js:1123
        undefined,
    'comic': // blocks.js:1124
        undefined,
    'confetti': // blocks.js:1125
        undefined,
    'saturation': // blocks.js:1126
        undefined,
    'brightness': // blocks.js:1127
        undefined,
    'ghost': // blocks.js:1128
        '\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442',
    'any key': // blocks.js:1146
        undefined,
    'up arrow': // blocks.js:1147
        '\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0433\u043E\u0440\u0435',
    'down arrow': // blocks.js:1148
        '\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0434\u043E\u043B\u0443',
    'right arrow': // blocks.js:1149
        '\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0434\u044F\u0441\u043D\u043E',
    'left arrow': // blocks.js:1150
        '\u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u043B\u044F\u0432\u043E',
    'space': // blocks.js:1151
        '\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B',
    'a': // blocks.js:1152
        'a',
    'b': // blocks.js:1153
        'b',
    'c': // blocks.js:1154
        'c',
    'd': // blocks.js:1155
        'd',
    'e': // blocks.js:1156
        'e',
    'f': // blocks.js:1157
        'f',
    'g': // blocks.js:1158
        'g',
    'h': // blocks.js:1159
        'h',
    'i': // blocks.js:1160
        'i',
    'j': // blocks.js:1161
        'j',
    'k': // blocks.js:1162
        'k',
    'l': // blocks.js:1163
        'l',
    'm': // blocks.js:1164
        'm',
    'n': // blocks.js:1165
        'n',
    'o': // blocks.js:1166
        'o',
    'p': // blocks.js:1167
        'p',
    'q': // blocks.js:1168
        'q',
    'r': // blocks.js:1169
        'r',
    's': // blocks.js:1170
        's',
    't': // blocks.js:1171
        't',
    'u': // blocks.js:1172
        'u',
    'v': // blocks.js:1173
        'v',
    'w': // blocks.js:1174
        'w',
    'x': // blocks.js:1175
        'x',
    'y': // blocks.js:1176
        'y',
    'z': // blocks.js:1177
        'z',
    'abs': // blocks.js:1226
        '\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442',
    'ceiling': // blocks.js:1227 morphic.js:7085 morphic.js:7088
        undefined,
    'floor': // blocks.js:1228 morphic.js:7069 morphic.js:7072
        undefined,
    'sqrt': // blocks.js:1229
        '\u043A\u043E\u0440\u0435\u043D \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0435\u043D',
    'sin': // blocks.js:1230
        'sin',
    'cos': // blocks.js:1231
        'cos',
    'tan': // blocks.js:1232
        'tan',
    'asin': // blocks.js:1233
        'asin',
    'acos': // blocks.js:1234
        'acos',
    'atan': // blocks.js:1235
        'atan',
    'ln': // blocks.js:1236
        'ln',
    'log': // blocks.js:1237
        undefined,
    'e^': // blocks.js:1238
        'e^',
    '10^': // blocks.js:1239
        undefined,
    'encode URI': // blocks.js:1249
        undefined,
    'decode URI': // blocks.js:1250
        undefined,
    'encode URI component': // blocks.js:1251
        undefined,
    'decode URI component': // blocks.js:1252
        undefined,
    'XML escape': // blocks.js:1253
        undefined,
    'XML unescape': // blocks.js:1254
        undefined,
    'hex sha512 hash': // blocks.js:1255
        undefined,
    'this script': // blocks.js:1266
        undefined,
    'this block': // blocks.js:1267
        undefined,
    'all but this script': // blocks.js:1268
        undefined,
    'other scripts in sprite': // blocks.js:1269
        undefined,
    'String': // blocks.js:1290
        undefined,
    'Number': // blocks.js:1291 byob.js:3286
        '\u0427\u0438\u0441\u043B\u043E',
    'true': // blocks.js:1292 blocks.js:9529 blocks.js:9919 objects.js:2979
        'true',
    'false': // blocks.js:1293 blocks.js:9544 blocks.js:9930 objects.js:2979
        'false',
    'code': // blocks.js:1334
        undefined,
    'header': // blocks.js:1335
        undefined,
    'list': // blocks.js:1408 blocks.js:8487
        '\u0441\u043F\u0438\u0441\u044A\u043A',
    'item': // blocks.js:1409
        undefined,
    'delimiter': // blocks.js:1410
        undefined,
    'collection': // blocks.js:1419
        undefined,
    'variables': // blocks.js:1420
        undefined,
    'parameters': // blocks.js:1421
        undefined,
    'untitled': // blocks.js:1993 blocks.js:2604 blocks.js:6443 blocks.js:11919 byob.js:1037 byob.js:3910 gui.js:979 gui.js:4036 store.js:296
        '\u0411\u0435\u0437 \u0438\u043C\u0435',
    '{{ projectName }} script pic': // blocks.js:1993 blocks.js:2602 blocks.js:6441 byob.js:1035
        undefined,
    'script target cannot be found for orphaned block': // blocks.js:2203
        undefined,
    'a {{ className }} ("{{ value }}...")': // blocks.js:2207 morphic.js:8466 morphic.js:9146
        undefined,
    'Variable name': // blocks.js:2377 blocks.js:3262 objects.js:2179 objects.js:7304
        '\u0418\u043C\u0435 \u043D\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430\u0442\u0430',
    'help': // blocks.js:2386 objects.js:1851 objects.js:2308
        '\u043F\u043E\u043C\u043E\u0449',
    'script pic with result': // blocks.js:2393
        undefined,
    'open a new window\nwith a picture of both\nthis script and its result': // blocks.js:2397
        undefined,
    'rename': // blocks.js:2409 blocks.js:2458 blocks.js:2521 gui.js:7708 gui.js:8409 morphic.js:7656
        '\u041F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u0435',
    'rename only\nthis reporter': // blocks.js:2413 blocks.js:2462 blocks.js:2523
        undefined,
    'rename all': // blocks.js:2416 blocks.js:2465
        undefined,
    'rename all blocks that\naccess this variable': // blocks.js:2418 blocks.js:2467
        undefined,
    'inherited': // blocks.js:2426 blocks.js:2437 blocks.js:2490 blocks.js:6370 byob.js:1099 byob.js:1121
        undefined,
    'uncheck to\ndisinherit': // blocks.js:2431 blocks.js:2495 blocks.js:6375 byob.js:1113
        undefined,
    'check to inherit\nfrom {{ name }}': // blocks.js:2443 blocks.js:2496 blocks.js:6376 byob.js:1125
        undefined,
    'transient': // blocks.js:2450
        undefined,
    'uncheck to save contents\nin the project': // blocks.js:2453
        undefined,
    'check to prevent contents\nfrom being saved': // blocks.js:2454
        undefined,
    'hide': // blocks.js:2472 morphic.js:4214 objects.js:394
        '\u0441\u043A\u0440\u0438\u0439',
    'x position': // blocks.js:2481 blocks.js:8554 objects.js:288
        'x \u043F\u043E\u0437\u0438\u0446\u0438\u044F',
    'y position': // blocks.js:2482 blocks.js:8555 objects.js:294
        'y \u043F\u043E\u0437\u0438\u0446\u0438\u044F',
    'size': // blocks.js:2484 blocks.js:8559 objects.js:382
        '\u0440\u0430\u0437\u043C\u0435\u0440',
    'costume #': // blocks.js:2485 blocks.js:8557 blocks.js:8561 objects.js:317
        '\u043A\u043E\u0441\u0442\u044E\u043C \u2116',
    'header mapping': // blocks.js:2507 blocks.js:2677
        undefined,
    'code mapping': // blocks.js:2511 blocks.js:2681
        undefined,
    'relabel': // blocks.js:2527 blocks.js:2538
        '\u0441\u043C\u0435\u043D\u0438 \u0435\u0442\u0438\u043A\u0435\u0442\u0430',
    'make a copy\nand pick it up': // blocks.js:2564 blocks.js:11908 morphic.js:4171
        '\u043A\u043E\u043F\u0438\u0440\u0430\u0439\n\u0438 \u0432\u0437\u0435\u043C\u0438',
    'only duplicate this block': // blocks.js:2586
        '\u043A\u043E\u043F\u0438\u0440\u0430\u0439 \u0441\u0430\u043C\u043E \u0442\u043E\u0437\u0438 \u0431\u043B\u043E\u043A',
    'delete': // blocks.js:2590 blocks.js:11910 gui.js:7372 gui.js:7711 gui.js:8410 morphic.js:4215 objects.js:3242
        '\u0438\u0437\u0442\u0440\u0438\u0439',
    'script pic': // blocks.js:2594 byob.js:1030
        '\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430',
    'open a new window\nwith a picture of this script': // blocks.js:2608 byob.js:1041
        '\u043E\u0442\u0432\u043E\u0440\u0438 \u043D\u043E\u0432 \u0435\u043A\u0440\u0430\u043D\n\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430',
    'download script': // blocks.js:2612
        undefined,
    '{{ name }} script': // blocks.js:2622
        undefined,
    'download this script\nas an XML file': // blocks.js:2627
        undefined,
    'unringify': // blocks.js:2657
        'unringify',
    'ringify': // blocks.js:2661 blocks.js:2673
        'ringify',
    'delete block': // blocks.js:2691
        undefined,
    'spec': // blocks.js:2692 blocks.js:2699
        undefined,
    'Help': // blocks.js:2980 blocks.js:2997
        '\u041F\u043E\u043C\u043E\u0449',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.': // blocks.js:3026
        undefined,
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).': // blocks.js:3029
        undefined,
    'Header mapping': // blocks.js:3043
        undefined,
    'Code mapping': // blocks.js:3072
        undefined,
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.': // blocks.js:3077
        undefined,
    'Variable exists': // blocks.js:3292
        undefined,
    'A variable with this name already exists in this context.': // blocks.js:3294
        undefined,
    'A variable with this name already exists as a global variable.': // blocks.js:3396
        undefined,
    'A variable with this name already exists as a sprite local variable.': // blocks.js:3455
        undefined,
    'Block variable name': // blocks.js:5346
        undefined,
    'Script variable name': // blocks.js:5348
        undefined,
    'undrop': // blocks.js:6320 blocks.js:6709
        undefined,
    'undo the last\nblock drop\nin this pane': // blocks.js:6324
        undefined,
    'redrop': // blocks.js:6335 blocks.js:6722
        undefined,
    'redo the last undone\nblock drop\nin this pane': // blocks.js:6339
        undefined,
    'clear undrop queue': // blocks.js:6345
        undefined,
    'forget recorded block drops\non this pane': // blocks.js:6351
        undefined,
    'clean up': // blocks.js:6359
        '\u0440\u0430\u0437\u0447\u0438\u0441\u0442\u0438',
    'arrange scripts\nvertically': // blocks.js:6359
        '\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u043D\u043E \u043F\u043E\u0434\u0440\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0435\u0440\u0435',
    'add comment': // blocks.js:6360
        '\u0434\u043E\u0431\u0430\u0432\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440',
    'scripts pic': // blocks.js:6362
        undefined,
    'open a new window\nwith a picture of all scripts': // blocks.js:6364
        undefined,
    'make a block': // blocks.js:6380
        '\u043D\u043E\u0432 \u0431\u043B\u043E\u043A',
    'Make a block': // blocks.js:6398 objects.js:2303 objects.js:2352 objects.js:2411
        '\u041D\u043E\u0432 \u0431\u043B\u043E\u043A',
    'nothing to undrop': // blocks.js:6549
        undefined,
    'unsupported action for {{ morph }}': // blocks.js:6640
        undefined,
    'use the keyboard\nto enter blocks': // blocks.js:6747
        undefined,
    'script target cannot be found for orphaned scripts': // blocks.js:6925
        undefined,
    'choose new parent': // blocks.js:7225 morphic.js:4253
        undefined,
    'new message': // blocks.js:8338 blocks.js:8370
        undefined,
    'Message name': // blocks.js:8345 blocks.js:8377
        '\u0418\u043C\u0435 \u043D\u0430 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435',
    'any message': // blocks.js:8360
        undefined,
    'mouse-pointer': // blocks.js:8391 blocks.js:8420
        '\u043A\u0443\u0440\u0441\u043E\u0440 \u043D\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430',
    'edge': // blocks.js:8392
        '\u043A\u0440\u0430\u0439',
    'random position': // blocks.js:8418
        undefined,
    'myself': // blocks.js:8445
        undefined,
    'number': // blocks.js:8484
        '\u0447\u0438\u0441\u043B\u043E',
    'text': // blocks.js:8485 morphic.js:12305
        '\u0442\u0435\u043A\u0441\u0442',
    'Boolean': // blocks.js:8486
        '\u0431\u0443\u043B\u0435\u0432',
    'sprite': // blocks.js:8490
        undefined,
    'costume': // blocks.js:8492 objects.js:3069
        undefined,
    'sound': // blocks.js:8493
        undefined,
    'command': // blocks.js:8494
        '\u043A\u043E\u043C\u0430\u043D\u0434\u0430',
    'reporter': // blocks.js:8495
        '\u0440\u0435\u043F\u043E\u0440\u0442\u0435\u0440',
    'predicate': // blocks.js:8496
        '\u043F\u0440\u0435\u0434\u0438\u043A\u0430\u0442',
    'neighbors': // blocks.js:8502
        undefined,
    'self': // blocks.js:8503
        undefined,
    'other sprites': // blocks.js:8504
        undefined,
    'clones': // blocks.js:8505
        undefined,
    'other clones': // blocks.js:8506
        undefined,
    'parts': // blocks.js:8508
        undefined,
    'anchor': // blocks.js:8509
        undefined,
    'stage': // blocks.js:8511 symbols.js:95
        undefined,
    'children': // blocks.js:8513
        undefined,
    'parent': // blocks.js:8514 gui.js:7178 gui.js:7385
        undefined,
    'temporary?': // blocks.js:8516
        undefined,
    'name': // blocks.js:8519
        undefined,
    'costumes': // blocks.js:8520
        undefined,
    'sounds': // blocks.js:8521
        undefined,
    'dangling?': // blocks.js:8522
        undefined,
    'rotation x': // blocks.js:8523
        undefined,
    'rotation y': // blocks.js:8524
        undefined,
    'center x': // blocks.js:8525
        undefined,
    'center y': // blocks.js:8526
        undefined,
    'costume name': // blocks.js:8558 blocks.js:8562
        undefined,
    'Turtle': // blocks.js:8582 gui.js:7941 objects.js:3166 threads.js:3349
        '\u041A\u043E\u0441\u0442\u0435\u043D\u0443\u0440\u043A\u0430',
    'Empty': // blocks.js:8584 gui.js:7941 objects.js:3166 threads.js:3350
        undefined,
    'code number mapping': // blocks.js:8835
        undefined,
    'code string mapping': // blocks.js:8840
        undefined,
    'String <#1>': // blocks.js:8864
        undefined,
    'Code mapping - {{ type }}': // blocks.js:8864 blocks.js:8879
        undefined,
    'Number <#1>': // blocks.js:8879
        undefined,
    'code true mapping': // blocks.js:9500
        undefined,
    'code false mapping': // blocks.js:9505
        undefined,
    'Code mapping - {{ name }}': // blocks.js:9529 blocks.js:9544 blocks.js:10662
        undefined,
    'code list mapping': // blocks.js:10619
        undefined,
    'code item mapping': // blocks.js:10623
        undefined,
    'code delimiter mapping': // blocks.js:10627
        undefined,
    'list item delimiter': // blocks.js:10642
        undefined,
    'list contents <#1>': // blocks.js:10646
        undefined,
    'list item <#1>': // blocks.js:10650
        undefined,
    'input list': // blocks.js:10750
        '\u0412\u0445\u043E\u0434 \u043D\u0430 \u0441\u043F\u0438\u0441\u044A\u043A',
    'add comment here': // blocks.js:11762
        '\u0434\u043E\u0431\u0430\u0432\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u0442\u0443\u043A',
    'comment pic': // blocks.js:11912
        undefined,
    '{{ projectName }} comment pic': // blocks.js:11917
        undefined,
    'open a new window\nwith a picture of this comment': // blocks.js:11923
        undefined,
    'Change block': // byob.js:885
        '\u0417\u0430\u043C\u0435\u043D\u0438 \u0431\u043B\u043E\u043A',
    '{{ varName }} (temporary)': // byob.js:1011 objects.js:9431 threads.js:1670
        undefined,
    'translations': // byob.js:1044
        undefined,
    'experimental': // byob.js:1048 byob.js:1057 byob.js:1065
        undefined,
    'under construction': // byob.js:1048 byob.js:1057 byob.js:1065
        undefined,
    'remove block variables': // byob.js:1061
        undefined,
    'duplicate block definition': // byob.js:1079
        undefined,
    'delete block definition': // byob.js:1089 byob.js:1133 byob.js:1147
        '\u0438\u0437\u0442\u0440\u0438\u0439 \u0434\u0435\u0444\u0438\u043D\u0438\u0446\u0438\u044F\u0442\u0430 \u043D\u0430 \u0431\u043B\u043E\u043A\u0430',
    'edit': // byob.js:1157 gui.js:7699 morphic.js:8730 morphic.js:9477 objects.js:3255 objects.js:3261 objects.js:7422
        '\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439',
    'Delete Custom Block': // byob.js:1228
        '\u0418\u0437\u0442\u0440\u0438\u0439 custom \u0431\u043B\u043E\u043A',
    'Are you sure you want to delete this\ncustom block and all its instances?': // byob.js:1229
        '\u0421\u0438\u0433\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0438\u0440\u0435\u0448 \u0442\u043E\u0437\u0438 \u0431\u043B\u043E\u043A?',
    'OK': // byob.js:1648 byob.js:2117 byob.js:3237 byob.js:3848 gui.js:3713 morphic.js:3958 morphic.js:4028 morphic.js:4054 objects.js:8312 paint.js:161 tables.js:1212 widgets.js:1574 widgets.js:1708 widgets.js:1791 widgets.js:1874 widgets.js:2155 widgets.js:2434
        'OK',
    'Cancel': // byob.js:1649 byob.js:2120 byob.js:3243 byob.js:3849 gui.js:3371 gui.js:3714 gui.js:5941 gui.js:6843 gui.js:8996 gui.js:9134 morphic.js:4031 morphic.js:4057 objects.js:8313 paint.js:162 widgets.js:1709 widgets.js:1792 widgets.js:1887 widgets.js:2156
        '\u041E\u0442\u043C\u0435\u043D\u0438',
    'Command': // byob.js:1770
        '\u041A\u043E\u043C\u0430\u043D\u0434\u0430',
    'Reporter': // byob.js:1779 byob.js:3290
        '\u0420\u0435\u043F\u043E\u0440\u0442\u0435\u0440',
    'Predicate': // byob.js:1788 byob.js:3291
        '\u041F\u0440\u0435\u0434\u0438\u043A\u0430\u0442',
    'for all sprites': // byob.js:1850 byob.js:3662
        '\u0437\u0430 \u0432\u0441\u043A\u0438\u0447\u043A\u0438 \u0441\u043F\u0440\u0430\u0439\u0442\u043E\u0432\u0435',
    'for this sprite only': // byob.js:1855 byob.js:3667
        '\u0441\u0430\u043C\u043E \u0437\u0430 \u0442\u043E\u0437\u0438 \u0441\u043F\u0440\u0430\u0439\u0442',
    'Block Editor': // byob.js:2065
        '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043D\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'Method Editor': // byob.js:2066
        undefined,
    'Apply': // byob.js:2119
        '\u041F\u0440\u0438\u043B\u043E\u0436\u0438',
    'Local Block(s) in Global Definition': // byob.js:2204
        undefined,
    'This global block definition contains one or more\nlocal custom blocks which must be removed first.': // byob.js:2205
        undefined,
    'Same Named Blocks': // byob.js:2221
        undefined,
    'Another custom block with this name exists.\nWould you like to replace it?': // byob.js:2222
        undefined,
    'Custom Block Translations': // byob.js:2373
        undefined,
    'Enter one translation per line. use colon (":") as lang/spec delimiter\nand underscore ("_") as placeholder for an input, e.g.:\n\nen:say _ for _ secs': // byob.js:2379
        undefined,
    'Edit label fragment': // byob.js:2752
        '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439 \u0442\u0435\u043A\u0441\u0442\u0430 \u0435\u0442\u0438\u043A\u0435\u0442',
    'Create input name': // byob.js:2754
        '\u041D\u0430\u043F\u0440\u0430\u0432\u0438 \u043D\u043E\u0432 \u0432\u0445\u043E\u0434 \u0441 \u0438\u043C\u0435',
    'Edit input name': // byob.js:2755
        '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439 \u0438\u043C\u0435 \u043D\u0430 \u0432\u0445\u043E\u0434',
    'new line': // byob.js:2800 byob.js:3266
        undefined,
    'Title text': // byob.js:3061
        '\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435',
    'Delete': // byob.js:3239 gui.js:5940
        '\u0418\u0437\u0442\u0440\u0438\u0439',
    'Object': // byob.js:3283
        '\u041E\u0431\u0435\u043A\u0442',
    'Text': // byob.js:3284
        'T\u0435\u043A\u0441\u0442',
    'List': // byob.js:3285
        '\u0421\u043F\u0438\u0441\u044A\u043A',
    'Any type': // byob.js:3287
        '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u0435\u043D \u0442\u0438\u043F',
    'Boolean (T/F)': // byob.js:3288
        '\u0411\u0443\u043B\u0435\u0432 (\u0422/F)',
    'Command\n(inline)': // byob.js:3289
        '\u041A\u043E\u043C\u0430\u043D\u0434\u0430\n(inline)',
    'Command\n(C-shape)': // byob.js:3292
        '\u041A\u043E\u043C\u0430\u043D\u0434\u0430\n(\u0421-\u0444\u043E\u0440\u043C\u0430)',
    'Any\n(unevaluated)': // byob.js:3293
        '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u0435\u043D\n(unevaluated)',
    'Boolean\n(unevaluated)': // byob.js:3294
        '\u0411\u0443\u043B\u0435\u0432\n(unevaluated)',
    'Single input': // byob.js:3299
        '\u0415\u0434\u0438\u043D\u0438\u0447\u0435\u043D \u0432\u0445\u043E\u0434',
    'Multiple inputs (value is list of inputs)': // byob.js:3304
        '\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0432\u0445\u043E\u0434\u043D\u0438 (\u0441\u043F\u0438\u044A\u043A \u043E\u0442 \u0434\u0430\u043D\u043D\u0438)',
    'Upvar - make internal variable visible to caller': // byob.js:3309
        'Upvar\u00A0- \u043D\u0430\u043F\u0440\u0430\u0432\u0438 \u0432\u044A\u0442\u0440\u0435\u0448\u043D\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430 \u0432\u0438\u0434\u0438\u043C\u0430 \u043E\u0442 \u0438\u0437\u0432\u0438\u043A\u0432\u0430\u0447\u0430',
    'Default Value': // byob.js:3314
        'Default \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442',
    'options': // byob.js:3570
        undefined,
    'read-only': // byob.js:3573
        undefined,
    'Input Slot Options': // byob.js:3593
        undefined,
    'Enter one option per line.\nOptionally use "=" as key/value delimiter and {} for submenus. e.g.\n   the answer=42': // byob.js:3597
        undefined,
    'Export blocks': // byob.js:3776 byob.js:3914 gui.js:3187 gui.js:3835
        '\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'select': // byob.js:3873
        '\u0438\u0437\u0431\u0435\u0440\u0438',
    'none': // byob.js:3875 objects.js:5421 objects.js:5427
        '\u043D\u0438\u0449\u043E',
    '{{ projectName }} blocks': // byob.js:3910
        undefined,
    'no blocks were selected': // byob.js:3915 byob.js:4009 byob.js:4102
        undefined,
    'Import blocks': // byob.js:3962 byob.js:3963 byob.js:4008
        '\u0418\u043C\u043F\u043E\u0440\u0442 \u043D\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'Imported Blocks Module': // byob.js:4002 byob.js:4003 gui.js:4355
        undefined,
    'Remove unused blocks': // byob.js:4056 byob.js:4057 byob.js:4101 gui.js:3872
        undefined,
    '{{ count }} unused block(s) removed': // byob.js:4096
        undefined,
    'There was an error while trying to access\na {{ cloudName }} service. Please try again later.': // cloud.js:90
        undefined,
    'Cloud Error': // cloud.js:159
        undefined,
    'You are not logged in': // cloud.js:188 cloud.js:436
        undefined,
    'Could not retrieve current user': // cloud.js:237
        undefined,
    'Could not retrieve user': // cloud.js:247
        undefined,
    'logout failed': // cloud.js:258
        undefined,
    'login failed': // cloud.js:280
        undefined,
    'signup failed': // cloud.js:303
        undefined,
    'Could not change password': // cloud.js:323
        undefined,
    'Password reset request failed': // cloud.js:334
        undefined,
    'Could not send verification email': // cloud.js:344
        undefined,
    'Cannot Save Project': // cloud.js:378
        undefined,
    'The media inside this project exceeds {{ size }}.\nPlease reduce the size of costumes or sounds.\n': // cloud.js:379
        undefined,
    'Project media exceeds {{ size }} size limit': // cloud.js:387
        undefined,
    'Serialization of program data failed': // cloud.js:398 cloud.js:401
        undefined,
    'Serialization of media failed': // cloud.js:409 cloud.js:412
        undefined,
    'Uploading {{ size }}': // cloud.js:419
        undefined,
    'Project could not be saved': // cloud.js:429
        undefined,
    'Could not fetch projects': // cloud.js:456 cloud.js:490
        undefined,
    'Could not fetch thumbnail': // cloud.js:509
        undefined,
    'Could not fetch project {{ name }}': // cloud.js:520 cloud.js:536
        undefined,
    'Could not fetch metadata for {{ name }}': // cloud.js:552
        undefined,
    'Could not delete project': // cloud.js:568
        undefined,
    'Could not share project': // cloud.js:586
        undefined,
    'Could not unshare project': // cloud.js:604
        undefined,
    'Could not publish project': // cloud.js:622
        undefined,
    'Could not unpublish project': // cloud.js:640
        undefined,
    'Could not update project notes': // cloud.js:655
        undefined,
    'Unverified account': // gui.js:281 gui.js:5252
        undefined,
    'Your account is still unverified.\nPlease use the verification link that\nwas sent to your email address when you\nsigned up.\n\nIf you cannot find that email, please\ncheck your spam folder. If you still\ncannot find it, please use the "Resend\nVerification Email..." option in the cloud\nmenu.': // gui.js:282
        undefined,
    'unable to retrieve {{ resource }}': // gui.js:337 gui.js:5689 gui.js:5700 morphic.js:11546
        undefined,
    'unable to retrieve project': // gui.js:339
        undefined,
    'Fetching project\nfrom the cloud': // gui.js:417 gui.js:458 gui.js:494 gui.js:2612 gui.js:6391
        undefined,
    'Opening project': // gui.js:430 gui.js:470 gui.js:2627 gui.js:4222
        undefined,
    'Saved project\n{{ name }}': // gui.js:506
        undefined,
    'Visible stepping': // gui.js:716 gui.js:2756
        undefined,
    'development mode': // gui.js:990 morphic.js:12252
        '\u0420\u0435\u0436\u0438\u043C \u0437\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438\u0441\u0442\u0438',
    'don\'t rotate': // gui.js:1222
        '\u043D\u0435 \u0441\u0435 \u0432\u044A\u0440\u0442\u0438',
    'can rotate': // gui.js:1223
        '\u0432\u044A\u0440\u0442\u0438 \u0441\u0435',
    'only face left/right': // gui.js:1224
        '\u0441\u0430\u043C\u043E \u043B\u044F\u0432\u043E-\u0434\u044F\u0441\u043D\u043E \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F',
    'draggable': // gui.js:1329
        '\u0434\u0432\u0438\u0436\u0438\u043C\u043E',
    'Scripts': // gui.js:1371 gui.js:4179
        '\u0421\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0435',
    'Costumes': // gui.js:1391 gui.js:3252 gui.js:3255 gui.js:4156
        '\u041A\u043E\u0441\u0442\u044E\u043C\u0438',
    'Backgrounds': // gui.js:1392 gui.js:3252 gui.js:3255
        undefined,
    'Sounds': // gui.js:1411 gui.js:3262 gui.js:3264 gui.js:4167
        '\u0417\u0432\u0443\u0446\u0438',
    'add a new Turtle sprite': // gui.js:1545
        undefined,
    'paint a new sprite': // gui.js:1567
        undefined,
    'take a camera snapshot and\nimport it as a new sprite': // gui.js:1592
        undefined,
    'Unable to import this image': // gui.js:1906
        undefined,
    'The picture you wish to import has been\ntainted by a restrictive cross-origin policy\nmaking it unusable for costumes in {{ appName }}.\n\nTry downloading this picture first to your\ncomputer, and import it from there.': // gui.js:1907
        undefined,
    'Serialization failed': // gui.js:2138 gui.js:4684 gui.js:4980 gui.js:5139
        undefined,
    'recording': // gui.js:2353
        undefined,
    'About': // gui.js:2471
        '\u0417\u0430 Snap!',
    'Reference manual': // gui.js:2474
        undefined,
    '{{ site }} website': // gui.js:2481
        '\u0423\u0435\u0431\u0441\u0430\u0439\u0442 \u043D\u0430 {{ site }}',
    'Download source': // gui.js:2487
        '\u0418\u0437\u0434\u044A\u0440\u043F\u0430\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0438\u044F \u043A\u043E\u0434',
    'Switch back to user mode': // gui.js:2498
        '\u041F\u0440\u0435\u043C\u0438\u043D\u0438 \u043A\u044A\u043C \u0440\u0435\u0436\u0438\u043C \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones': // gui.js:2500
        '\u0438\u0437\u043A\u043B\u044E\u0447\u0438 deep-Morphic\n\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u043D\u044E',
    'Switch to dev mode': // gui.js:2507
        '\u041F\u0440\u0435\u043C\u0438\u043D\u0438 \u043A\u044A\u043C \u0440\u0435\u0436\u0438\u043C \u0437\u0430 \u043F\u043E\u0440\u0433\u0440\u0430\u043C\u0438\u0441\u0442\u0438',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!': // gui.js:2509
        '\u0432\u043A\u043B\u044E\u0447\u0438 Morphic\n\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u043D\u044E\u0442\u0430\n\u0438 \u0438\u043D\u0441\u043F\u0435\u043A\u0442\u043E\u0440\u0438,\n\u043C\u043D\u043E\u0442\u043E \u0441\u043B\u043E\u0436\u043D\u043E!',
    'Cloud URL': // gui.js:2527 gui.js:5654
        undefined,
    'Login': // gui.js:2536
        undefined,
    'Signup': // gui.js:2540
        undefined,
    'Reset Password': // gui.js:2544
        undefined,
    'Resend Verification Email': // gui.js:2548
        undefined,
    'Logout {{ username }}': // gui.js:2553
        undefined,
    'Change Password': // gui.js:2557 gui.js:5420
        undefined,
    'Export project media only': // gui.js:2564
        undefined,
    'Export Project As': // gui.js:2569 gui.js:2583 gui.js:2597 gui.js:3158 gui.js:3176
        undefined,
    'Export project without media': // gui.js:2578
        undefined,
    'Export project as cloud data': // gui.js:2592
        undefined,
    'Open shared project from cloud': // gui.js:2607
        undefined,
    'Author name': // gui.js:2609
        undefined,
    'Project name': // gui.js:2610
        undefined,
    'Language': // gui.js:2676
        '\u0415\u0437\u0438\u043A',
    'Generate {{ filename }} file': // gui.js:2679 gui.js:5035
        undefined,
    'builds the {{ language }} translation file': // gui.js:2684
        undefined,
    'Zoom blocks': // gui.js:2692 gui.js:5120
        undefined,
    'Stage size': // gui.js:2696 gui.js:5163
        undefined,
    'Dragging threshold': // gui.js:2701 gui.js:5226
        undefined,
    'specify the distance the hand has to move\nbefore it picks up an object': // gui.js:2703
        undefined,
    'Retina display support': // gui.js:2725
        undefined,
    'uncheck for lower resolution,\nsaves computing resources': // gui.js:2728
        undefined,
    'check for higher resolution,\nuses more computing resources': // gui.js:2729
        undefined,
    'Input sliders': // gui.js:2733
        '\u0421\u043B\u0430\u0439\u0434\u0435\u0440\u0438',
    'uncheck to disable\ninput sliders for\nentry fields': // gui.js:2736
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448 \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u0438\u0442\u0435\n\u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438 \u043F\u043E\u043B\u0435\u0442\u0430',
    'check to enable\ninput sliders for\nentry fields': // gui.js:2737
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u0437\u0432\u0430\u0448 \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u0438\n\u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438 \u043F\u043E\u043B\u0435\u0442\u0430',
    'Execute on slider change': // gui.js:2741
        undefined,
    'uncheck to suppress\nrunning scripts\nwhen moving the slider': // gui.js:2744
        undefined,
    'check to run\nthe edited script\nwhen moving the slider': // gui.js:2745
        undefined,
    'Turbo mode': // gui.js:2749
        undefined,
    'uncheck to run scripts\nat normal speed': // gui.js:2752
        undefined,
    'check to prioritize\nscript execution': // gui.js:2753
        undefined,
    'uncheck to turn off\nvisible stepping': // gui.js:2759
        undefined,
    'check to turn on\nvisible stepping (slow)': // gui.js:2760
        undefined,
    'Ternary Boolean slots': // gui.js:2764
        undefined,
    'uncheck to limit\nBoolean slots to true / false': // gui.js:2770
        undefined,
    'check to allow\nempty Boolean slots': // gui.js:2771
        undefined,
    'Camera support': // gui.js:2775
        undefined,
    'uncheck to disable\ncamera support': // gui.js:2778
        undefined,
    'check to enable\ncamera support': // gui.js:2779
        undefined,
    'Blurred shadows': // gui.js:2784
        '\u0420\u0430\u0437\u043C\u0438\u0442\u0438 \u0441\u0435\u043D\u043A\u0438',
    'uncheck to use solid drop\nshadows and highlights': // gui.js:2787
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0448 \u043F\u043B\u044A\u0442\u043D\u0438\n\u0441\u0435\u043D\u043A\u0438 \u0438 \u043E\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u044F',
    'check to use blurred drop\nshadows and highlights': // gui.js:2788
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0448 \u043F\u043B\u044A\u0442\u043D\u0438\n\u0441\u0435\u043D\u043A\u0438 \u0438 \u043E\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u044F',
    'Zebra coloring': // gui.js:2792
        '\u0417\u0435\u0431\u0440\u043E\u0432\u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u0435',
    'uncheck to disable alternating\ncolors for nested block': // gui.js:2795
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448\n\u0430\u043B\u0442\u0435\u043D\u0438\u0440\u0430\u0449\u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u0435 \u0437\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435\u0442\u0435',
    'check to enable alternating\ncolors for nested blocks': // gui.js:2796
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0448\n\u0430\u043B\u0442\u0435\u043D\u0438\u0440\u0430\u0449\u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u0435 \u0437\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435\u0442\u0435',
    'Dynamic input labels': // gui.js:2800
        '\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u0438 \u0432\u0445\u043E\u0434\u043D\u0438 \u0435\u0442\u0438\u043A\u0435\u0442\u0438',
    'uncheck to disable dynamic\nlabels for variadic inputs': // gui.js:2803
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u0438 \u0432\u0445\u043E\u0434\u043D\u0438 \u0435\u0442\u0438\u043A\u0435\u0442\u0438\n\u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438 \u0441 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0439\u043D\u043E\u0441\u0442\u0438',
    'check to enable dynamic\nlabels for variadic inputs': // gui.js:2804
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0448 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u0438 \u0432\u0445\u043E\u0434\u043D\u0438 \u0435\u0442\u0438\u043A\u0435\u0442\u0438\n\u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438 \u0441 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0439\u043D\u043E\u0441\u0442\u0438',
    'Prefer empty slot drops': // gui.js:2808
        '\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0430\u0439 \u043D\u0435\u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'uncheck to allow dropped\nreporters to kick out others': // gui.js:2811
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0448 \u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u043E\u0432\u0435\n\u0434\u0430 \u0438\u0437\u043C\u0435\u0441\u0442\u0432\u0430\u0442 \u0441\u0442\u0430\u0440\u0438\u0442\u0435',
    'check to focus on empty slots\nwhen dragging & dropping reporters': // gui.js:2812
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0438 \u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u043E\u0432\u0435 \u0449\u0435\n\u043E\u0442\u043C\u0435\u0441\u0442\u0432\u0430\u0442 \u0441\u0442\u0430\u0440\u0438\u0442\u0435',
    'Long form input dialog': // gui.js:2816
        '\u0414\u044A\u043B\u0433\u0430 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438',
    'uncheck to use the input\ndialog in short form': // gui.js:2819
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043F \u043A\u0440\u0430\u0442\u043A\u0430 \u0444\u043E\u0440\u043C\u0430\n\u0437\u0430 \u0432\u0445\u043E\u0434\u043D\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0438',
    'check to always show slot\ntypes in the input dialog': // gui.js:2820
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0441\u0430 \u043F\u043E\u043A\u0430\u0436\u0435 \u0442\u0438\u043F\u044A\u0442\n\u043D\u0430 \u0432\u0441\u0438\u0447\u043A\u0438 \u0432\u0445\u043E\u0434\u043D\u0438\u0442\u0435',
    'Plain prototype labels': // gui.js:2823
        undefined,
    'uncheck to always show (+) symbols\nin block prototype labels': // gui.js:2826
        undefined,
    'check to hide (+) symbols\nin block prototype labels': // gui.js:2827
        undefined,
    'Virtual keyboard': // gui.js:2830
        '\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices': // gui.js:2833
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u043D\u0430\u0442\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430',
    'check to enable\nvirtual keyboard support\nfor mobile devices': // gui.js:2834
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043F\u043E\u0437\u0432\u0430\u0448 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u043D\u0430\n\u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0437\u0430 \u043C\u043E\u0431\u0438\u043B\u043D\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430',
    'Clicking sound': // gui.js:2838
        '\u0417\u0432\u0443\u043A \u043D\u0430 \u043A\u043B\u0438\u043A',
    'uncheck to turn\nblock clicking\nsound off': // gui.js:2848
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448 \u0437\u0432\u0443\u043A\u0430\n\u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0432\u0430\u043D\u0435 \u0432\u044A\u0440\u0445\u0443 \u0431\u043B\u043E\u043A',
    'check to turn\nblock clicking\nsound on': // gui.js:2849
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0448 \u0437\u0432\u0443\u043A\u0430\n\u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0432\u0430\u043D\u0435 \u0432\u044A\u0440\u0445\u0443 \u0431\u043B\u043E\u043A',
    'Animations': // gui.js:2852
        'A\u043D\u0438\u043C\u0430\u0446\u0438\u0438',
    'uncheck to disable\nIDE animations': // gui.js:2855
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448\nIDE a\u043D\u0438\u043C\u0430\u0446\u0438\u0438\u0442\u0435',
    'check to enable\nIDE animations': // gui.js:2856
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0448\nIDE a\u043D\u0438\u043C\u0430\u0446\u0438\u0438\u0442\u0435',
    'Cache Inputs': // gui.js:2860
        undefined,
    'uncheck to stop caching\ninputs (for debugging the evaluator)': // gui.js:2866
        undefined,
    'check to cache inputs\nboosts recursion': // gui.js:2867
        undefined,
    'Rasterize SVGs': // gui.js:2871
        undefined,
    'uncheck for smooth\nscaling of vector costumes': // gui.js:2877
        undefined,
    'check to rasterize\nSVGs on import': // gui.js:2878
        undefined,
    'Flat design': // gui.js:2882
        undefined,
    'uncheck for default\nGUI design': // gui.js:2890
        undefined,
    'check for alternative\nGUI design': // gui.js:2891
        undefined,
    'Nested auto-wrapping': // gui.js:2895
        undefined,
    'uncheck to confine auto-wrapping\nto top-level block stacks': // gui.js:2906
        undefined,
    'check to enable auto-wrapping\ninside nested block stacks': // gui.js:2907
        undefined,
    'Project URLs': // gui.js:2911
        undefined,
    'uncheck to disable\nproject data in URLs': // gui.js:2921
        undefined,
    'check to enable\nproject data in URLs': // gui.js:2922
        undefined,
    'Sprite Nesting': // gui.js:2926
        undefined,
    'uncheck to disable\nsprite composition': // gui.js:2932
        undefined,
    'check to enable\nsprite composition': // gui.js:2933
        undefined,
    'First-Class Sprites': // gui.js:2937
        undefined,
    'uncheck to disable support\nfor first-class sprites': // gui.js:2946
        undefined,
    'check to enable support\nfor first-class sprite': // gui.js:2947
        undefined,
    'Keyboard Editing': // gui.js:2951
        undefined,
    'uncheck to disable\nkeyboard editing support': // gui.js:2963
        undefined,
    'check to enable\nkeyboard editing support': // gui.js:2964
        undefined,
    'Table support': // gui.js:2968
        undefined,
    'uncheck to disable\nmulti-column list views': // gui.js:2979
        undefined,
    'check for multi-column\nlist view support': // gui.js:2980
        undefined,
    'Table lines': // gui.js:2985
        undefined,
    'uncheck for less contrast\nmulti-column list views': // gui.js:2996
        undefined,
    'check for higher contrast\ntable views': // gui.js:2997
        undefined,
    'Live coding support': // gui.js:3002
        undefined,
    'EXPERIMENTAL!': // gui.js:3008 gui.js:3010 gui.js:3024 gui.js:3026
        undefined,
    'uncheck to disable live\ncustom control structures': // gui.js:3009
        undefined,
    'check to enable\nlive custom control structures': // gui.js:3011
        undefined,
    'JIT compiler support': // gui.js:3015
        undefined,
    'uncheck to disable live\nsupport for compiling': // gui.js:3025
        undefined,
    'check to enable\nsupport for compiling': // gui.js:3027
        undefined,
    'Thread safe scripts': // gui.js:3032
        'Thread safe \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0435',
    'uncheck to allow\nscript reentrance': // gui.js:3035
        undefined,
    'check to disallow\nscript reentrance': // gui.js:3036
        undefined,
    'Prefer smooth animations': // gui.js:3039
        undefined,
    'uncheck for greater speed\nat variable frame rates': // gui.js:3042
        undefined,
    'check for smooth, predictable\nanimations across computers': // gui.js:3043
        undefined,
    'Flat line ends': // gui.js:3047
        undefined,
    'uncheck for round ends of lines': // gui.js:3053
        undefined,
    'check for flat ends of lines': // gui.js:3054
        undefined,
    'Codification support': // gui.js:3057
        undefined,
    'uncheck to disable\nblock to text mapping features': // gui.js:3066
        undefined,
    'check for block\nto text mapping features': // gui.js:3067
        undefined,
    'Inheritance support': // gui.js:3071
        undefined,
    'uncheck to disable\nsprite inheritance features': // gui.js:3080
        undefined,
    'check for sprite\ninheritance features': // gui.js:3081
        undefined,
    'Persist linked sublist IDs': // gui.js:3085
        undefined,
    'uncheck to disable\nsaving linked sublist identities': // gui.js:3091
        undefined,
    'check to enable\nsaving linked sublist identities': // gui.js:3092
        undefined,
    'Project notes': // gui.js:3107
        '\u0417\u0430\u043F\u0438\u0441\u043A\u0438 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430',
    'New': // gui.js:3109
        '\u041D\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442',
    'Open': // gui.js:3110 gui.js:5924
        '\u041E\u0442\u0432\u043E\u0440\u0438',
    'Save': // gui.js:3111 gui.js:5927 gui.js:8995 gui.js:9133
        '\u0417\u0430\u043F\u0438\u0448\u0438',
    'Save As': // gui.js:3112
        '\u0417\u0430\u043F\u0438\u0448\u0438 \u043A\u0430\u0442\u043E',
    'Import': // gui.js:3115 gui.js:3370 gui.js:6842
        '\u0418\u043C\u043F\u043E\u0440\u0442',
    'load an exported project file\nor block library, a costume\nor a sound': // gui.js:3146
        '\u0417\u0430\u0440\u0435\u0434\u0438 \u043F\u0440\u043E\u0435\u043A\u0442,\n\u0431\u043B\u043E\u043A\u043E\u0432\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430,\n\u0441\u043F\u0440\u0430\u0439\u0442 \u0438\u043B\u0438 \u0437\u0432\u0443\u043A',
    'Export project (in a new window)': // gui.js:3153
        undefined,
    'show project data as XML\nin a new browser window': // gui.js:3164
        '\u041F\u043E\u043A\u0430\u0436\u0438 XML \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\n\u0432 \u043D\u043E\u0432 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446 \u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430',
    'Export project as plain text': // gui.js:3170
        '\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043A\u0430\u043A\u043E \u0442\u0435\u043A\u0441\u0442 \u0444\u0430\u0439\u043B',
    'Export project': // gui.js:3171
        '\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442',
    'save project data as XML\nto your downloads folder': // gui.js:3181
        undefined,
    'show global custom block definitions as XML\nin a new browser window': // gui.js:3189
        '\u041F\u043E\u043A\u0430\u0436\u0438 XML \u0434\u0435\u0444\u0438\u043D\u0438\u0446\u0438\u0438\u0442\u0435 \u043D\u0430 custom\u00A0\u0431\u043B\u043E\u043A\u043E\u0432\u0435\n\u0432 \u043D\u043E\u0432 \u043F\u0440\u043E\u0437\u043E\u0440\u0435\u0446 \u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430',
    'Unused blocks': // gui.js:3193
        undefined,
    'find unused global custom blocks\nand remove their definitions': // gui.js:3195
        undefined,
    'Export summary': // gui.js:3201
        undefined,
    'open a new browser browser window\nwith a summary of this project': // gui.js:3203
        undefined,
    'Export summary with drop-shadows': // gui.js:3208
        undefined,
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers': // gui.js:3210
        undefined,
    'Export all scripts as pic': // gui.js:3217
        undefined,
    'show a picture of all scripts\nand block definitions': // gui.js:3219
        undefined,
    'Import tools': // gui.js:3226
        '\u0418\u043C\u043F\u043E\u0440\u0442 \u043E\u043F\u0446\u0438\u0438',
    'load the official library of\npowerful blocks': // gui.js:3235
        '\u0417\u0430\u0440\u0435\u0434\u0438 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u043D\u0430\u0442\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u0442\u0430 \u043E\u0442 \u043C\u043E\u0449\u043D\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'Libraries': // gui.js:3238
        undefined,
    'select categories of additional blocks to add to this project': // gui.js:3248
        undefined,
    'Select a costume from the media library': // gui.js:3259
        undefined,
    'Select a sound from the media library': // gui.js:3266
        undefined,
    'Opening {{ resource }}': // gui.js:3341
        undefined,
    'License': // gui.js:3529 gui.js:3630
        '\u041B\u0438\u0446\u0435\u043D\u0437',
    'Contributors': // gui.js:3548
        '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u0446\u0438',
    'current module versions': // gui.js:3574
        '\u0412\u0435\u0440\u0441\u0438\u0438 \u043D\u0430 \u043C\u043E\u0434\u0443\u043B\u0438\u0435',
    'Translations': // gui.js:3578
        '\u041F\u0440\u0435\u0432\u043E\u0434\u0438',
    'About Snap': // gui.js:3581
        '\u0417\u0430 Snap!',
    'Translators': // gui.js:3597
        '\u041F\u0440\u0435\u0432\u043E\u0434\u0430\u0447\u0438',
    'Back': // gui.js:3613
        '\u041D\u0430\u0437\u0430\u0434',
    'Modules': // gui.js:3646
        '\u041C\u043E\u0434\u0443\u043B\u0438',
    'Credits': // gui.js:3662
        '\u041A\u0440\u0435\u0434\u0438\u0442\u0438',
    'Project Notes': // gui.js:3709
        '\u0417\u0430\u043F\u0438\u0441\u043A\u0438 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430',
    'Saving': // gui.js:3770
        undefined,
    'Saved': // gui.js:3788 gui.js:3796
        '\u0417\u0430\u043F\u0438\u0441\u0430\u043D',
    'Save failed': // gui.js:3790
        undefined,
    'Exporting': // gui.js:3811 gui.js:5464 gui.js:5493 gui.js:5503 gui.js:5521 gui.js:5533
        undefined,
    'Exported': // gui.js:3816 gui.js:5471 gui.js:5497 gui.js:5507 gui.js:5527 gui.js:5539
        undefined,
    'Export failed': // gui.js:3819 gui.js:5475 gui.js:5500 gui.js:5530
        undefined,
    'this project doesn\'t have any\ncustom global blocks yet': // gui.js:3836
        '\u0422\u043E\u0437\u0438 \u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0435 \u0441\u044A\u0434\u044A\u0436\u0430\n\u0433\u043B\u043E\u0431\u0430\u043B\u043D\u0438 custom\n\u0431\u043B\u043E\u043A\u043E\u0432\u0435',
    'there are currently no unused\nglobal custom blocks in this project': // gui.js:3873
        undefined,
    'Untitled': // gui.js:3937 gui.js:8190 store.js:368 store.js:1651
        '\u0411\u0435\u0437 \u0438\u043C\u0435',
    'Variables': // gui.js:3968 objects.js:153
        '\u041F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0438',
    'Blocks': // gui.js:4000
        undefined,
    'Contents': // gui.js:4103
        undefined,
    'Kind of {{ name }}': // gui.js:4132
        undefined,
    'Part of {{ name }}': // gui.js:4139
        undefined,
    'Parts': // gui.js:4144
        undefined,
    'For all Sprites': // gui.js:4197 gui.js:4201
        undefined,
    'Load failed': // gui.js:4251 gui.js:4302 gui.js:4341 gui.js:4384 gui.js:4394 gui.js:4427
        undefined,
    'Opening project\n{{ size }}': // gui.js:4269
        undefined,
    'Opening blocks': // gui.js:4322
        undefined,
    'Imported Blocks Module: {{ name }}': // gui.js:4354
        undefined,
    'Opening sprite': // gui.js:4368
        undefined,
    'Imported Media Module': // gui.js:4398
        undefined,
    'Opening script': // gui.js:4406
        undefined,
    'Imported Script': // gui.js:4442
        undefined,
    'opening project\n{{ name }}': // gui.js:4448
        undefined,
    'Could not export {{ name }}': // gui.js:4519
        undefined,
    'This item could not be exported from {{ appName }}.\nIt\'s likely that your project may contain a lot of media (sounds and images) or that you are using an older browser.\nPlease try using a recent version of Chrome, Firefox, or Safari.': // gui.js:4520
        undefined,
    'entering user mode': // gui.js:4585
        undefined,
    'entering development mode.\n\nerror catching is turned off,\nuse the browser\'s web console\nto see error messages.': // gui.js:4604
        undefined,
    'Replace the current project with a new one?': // gui.js:4914
        '\u0417\u0430\u043C\u0435\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441 \u043D\u043E\u0432?',
    'New Project': // gui.js:4915
        '\u041D\u043E\u0432 \u041F\u0440\u043E\u0435\u043A\u0442',
    'Generating {{ filename }} file': // gui.js:5011
        undefined,
    'Could not generate the language file': // gui.js:5039
        undefined,
    'build': // gui.js:5057
        undefined,
    'your own': // gui.js:5060
        undefined,
    'blocks': // gui.js:5064
        undefined,
    'normal (1x)': // gui.js:5106
        undefined,
    'demo (1.2x)': // gui.js:5107
        undefined,
    'presentation (1.4x)': // gui.js:5108
        undefined,
    'big (2x)': // gui.js:5109
        undefined,
    'huge (4x)': // gui.js:5110
        undefined,
    'giant (8x)': // gui.js:5111
        undefined,
    'monstrous (10x)': // gui.js:5112
        undefined,
    'Stage width': // gui.js:5166
        undefined,
    'Stage height': // gui.js:5167
        undefined,
    '{{ count }} days left': // gui.js:5253
        undefined,
    'You are now logged in, and your account\nis enabled for three days.\nPlease use the verification link that\nwas sent to your email address when you\nsigned up.\n\nIf you cannot find that email, please\ncheck your spam folder. If you still\ncannot find it, please use the "Resend\nVerification Email..." option in the cloud\nmenu.\n\nYou have {{ count }} days left.': // gui.js:5254
        undefined,
    'Sign in': // gui.js:5277
        undefined,
    'stay signed in on this computer\nuntil logging out': // gui.js:5283
        undefined,
    'You can now log in': // gui.js:5305
        undefined,
    'Sign up': // gui.js:5314
        undefined,
    'Terms of Service': // gui.js:5317
        undefined,
    'Privacy': // gui.js:5319
        undefined,
    'I have read and agree\nto the Terms of Service': // gui.js:5320
        undefined,
    'An e-mail with a link to\nreset your password\nhas been sent to the address provided': // gui.js:5340
        undefined,
    'Reset password': // gui.js:5352
        undefined,
    'An e-mail with a link to\nverify your account\nhas been sent to the address provided': // gui.js:5378
        undefined,
    'Resend verification email': // gui.js:5390
        undefined,
    'password has been changed': // gui.js:5414
        undefined,
    'disconnected': // gui.js:5437 gui.js:5440
        undefined,
    'Saving project\nto the cloud': // gui.js:5448 gui.js:6476
        undefined,
    'saved': // gui.js:5452 gui.js:6481
        undefined,
    '{{ projectName }} media': // gui.js:5468
        undefined,
    'Cloud Connection': // gui.js:5552
        undefined,
    'Successfully connected to\n{{ url }}': // gui.js:5553
        undefined,
    '{{ server }} (secure)': // gui.js:5646
        undefined,
    'Save Project': // gui.js:5799
        undefined,
    'Open Project': // gui.js:5800
        '\u041E\u0442\u0432\u043E\u0440\u0438 \u041F\u0440\u043E\u0435\u043A\u0442',
    'Cloud': // gui.js:5836
        undefined,
    'Browser': // gui.js:5837
        undefined,
    'Examples': // gui.js:5840 gui.js:6198 gui.js:6254 gui.js:6378
        undefined,
    'Share': // gui.js:5930
        undefined,
    'Unshare': // gui.js:5931
        undefined,
    '(no matches)': // gui.js:6095
        undefined,
    'Updating\nproject list': // gui.js:6119
        undefined,
    'last changed\n{{ date }}': // gui.js:6314
        undefined,
    'Are you sure you want to replace\n"{{ projectName }}"?': // gui.js:6436 gui.js:6454
        undefined,
    'Replace Project': // gui.js:6438 gui.js:6456
        undefined,
    'Are you sure you want to delete\n"{{ projectName }}"?': // gui.js:6498 gui.js:6522
        '\u0421\u0438\u0440\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0448?\n"{{ projectName }}"?',
    'Delete Project': // gui.js:6500 gui.js:6524
        '\u0418\u0437\u0442\u0440\u0438\u0439 \u041F\u0440\u043E\u0435\u043A\u0442',
    'Are you sure you want to share\n"{{ projectName }}"?': // gui.js:6542
        undefined,
    'Share Project': // gui.js:6544
        undefined,
    'sharing\nproject': // gui.js:6546
        undefined,
    'shared': // gui.js:6563
        undefined,
    'Are you sure you want to unshare\n"{{ projectName }}"?': // gui.js:6590
        undefined,
    'Unshare Project': // gui.js:6592
        undefined,
    'unsharing\nproject': // gui.js:6594
        undefined,
    'unshared': // gui.js:6612
        undefined,
    'Are you sure you want to publish\n"{{ projectName }}"?': // gui.js:6632
        undefined,
    'Publish Project': // gui.js:6634
        undefined,
    'publishing\nproject': // gui.js:6636
        undefined,
    'published': // gui.js:6651
        undefined,
    'Are you sure you want to unpublish\n"{{ projectName }}"?': // gui.js:6677
        undefined,
    'Unpublish Project': // gui.js:6679
        undefined,
    'unpublishing\nproject': // gui.js:6681
        undefined,
    'unpublished': // gui.js:6696
        undefined,
    'Import library': // gui.js:6828
        undefined,
    'Loading {{ resource }}': // gui.js:6926 gui.js:7059
        undefined,
    'Imported {{ resource }}': // gui.js:7054
        undefined,
    'pic': // gui.js:7353 morphic.js:4194 objects.js:7425
        undefined,
    'open a new window\nwith a picture of the stage': // gui.js:7361 objects.js:7432
        undefined,
    'show': // gui.js:7366 morphic.js:7568 objects.js:388
        '\u043F\u043E\u043A\u0430\u0436\u0438',
    'clone': // gui.js:7370 objects.js:3238
        undefined,
    'release': // gui.js:7388
        undefined,
    'make temporary and\nhide in the sprite corral': // gui.js:7390
        undefined,
    'detach from {{ name }}': // gui.js:7396 objects.js:3266
        undefined,
    'detach all parts': // gui.js:7402 objects.js:3271
        undefined,
    'export': // gui.js:7406 gui.js:7713 objects.js:3273 objects.js:9542
        '\u0415\u043A\u0441\u043F\u043E\u0440\u0442',
    'edit rotation point only': // gui.js:7702
        undefined,
    'rename costume': // gui.js:7755
        '\u041F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u0441\u0442\u044E\u043C',
    'rename background': // gui.js:7756
        undefined,
    'default': // gui.js:7893
        undefined,
    'pen': // gui.js:7975 morphic.js:12402
        undefined,
    'tip': // gui.js:7982
        undefined,
    'middle': // gui.js:7991
        undefined,
    'Paint a new costume': // gui.js:8085
        undefined,
    'Import a new costume from your webcam': // gui.js:8110
        undefined,
    'import a picture from another web page or from\na file on your computer by dropping it here': // gui.js:8134
        '\u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442 \u0434\u0440\u0443\u0433 \u0443\u0435\u0431-\u0441\u0430\u0439\u0442\n\u0438\u043B\u0438 \u043E\u0442 \u0442\u0432\u043E\u044F \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440 \u043F\u0443\u0441\u043A\u0430\u0439\u043A\u0438 \u0433\u0438 \u0442\u0443\u043A',
    'Stop': // gui.js:8345 gui.js:8367
        '\u0421\u0442\u043E\u043F',
    'Play': // gui.js:8345 gui.js:8375
        '\u041F\u0443\u0441\u043D\u0438',
    'Play sound': // gui.js:8348 gui.js:8376
        '\u041F\u0443\u0441\u043D\u0438 \u0437\u0432\u0443\u043A\u0430',
    'Stop sound': // gui.js:8368
        '\u0421\u043F\u0440\u0438 \u0437\u0432\u0443\u043A\u0430',
    'rename sound': // gui.js:8432
        '\u041F\u0440\u0435\u0438\u043C\u0435\u043D\u0443\u0432\u0430\u0439 \u0437\u0432\u0443\u043A\u0430',
    'import a sound from your computer\nby dragging it into here': // gui.js:8526
        '\u0434\u043E\u0431\u0430\u0432\u0438 \u0437\u0432\u0443\u0446\u0438 \u043E\u0442 \u0442\u0432\u043E\u044F \u043A\u043E\u043C\u043F\u044E\u0442\u044A\u0440\n\u043F\u0443\u0441\u043A\u0430\u0439\u043A\u0438 \u0433\u0438 \u0442\u0443\u043A',
    'Record a new sound': // gui.js:8549
        undefined,
    'Please make sure your web browser is up to date\nand your camera is properly configured.\n\nSome browsers also require you to access {{ appName }}\nthrough HTTPS to use the camera.\n\nPlease replace the "http://" part of the address\nin your browser by "https://" and try again.': // gui.js:8874
        undefined,
    'Camera': // gui.js:8905
        undefined,
    'Camera not supported': // gui.js:8917
        undefined,
    'Sound Recorder': // gui.js:9067
        undefined,
    'a {{ className }} [{{ count }} elements]': // lists.js:123
        undefined,
    'cdr isn\'t a list': // lists.js:143
        undefined,
    'items': // lists.js:264
        undefined,
    'length': // lists.js:492 lists.js:703
        '\u0434\u044A\u043B\u0436\u0438\u043D\u0430',
    'table view': // lists.js:807
        undefined,
    'open in dialog': // lists.js:810 tables.js:1036
        undefined,
    'Retina Display Support Problem': // morphic.js:1614
        undefined,
    'Called {{ function }} with {{ count }} arguments': // morphic.js:1676
        undefined,
    'a {{ className }}[{{ count }}]': // morphic.js:2681
        undefined,
    'a {{ className }} {{ count }} {{ bounds }}': // morphic.js:2904
        undefined,
    'user features': // morphic.js:4128
        undefined,
    'choose another color\nfor this morph': // morphic.js:4141
        undefined,
    'transparency': // morphic.js:4144
        undefined,
    'alpha value': // morphic.js:4147
        undefined,
    'set this morph\'s\nalpha value': // morphic.js:4157
        undefined,
    'resize': // morphic.js:4160
        undefined,
    'show a handle\nwhich can be dragged\nto change this morph\'s extent': // morphic.js:4162
        undefined,
    'pick up': // morphic.js:4174
        undefined,
    'detach and put\ninto the hand': // morphic.js:4176
        undefined,
    'attach': // morphic.js:4179
        undefined,
    'stick this morph\nto another one': // morphic.js:4181
        undefined,
    'move': // morphic.js:4184 objects.js:3243
        undefined,
    'show a handle\nwhich can be dragged\nto move this morph': // morphic.js:4186
        undefined,
    'inspect': // morphic.js:4189 morphic.js:7608 morphic.js:12183
        undefined,
    'open a window\non all properties': // morphic.js:4191
        undefined,
    'open a new window\nwith a picture of this morph': // morphic.js:4198 morphic.js:12192
        undefined,
    'lock': // morphic.js:4203
        undefined,
    'make this morph\nunmovable': // morphic.js:4205
        undefined,
    'unlock': // morphic.js:4209
        undefined,
    'make this morph\nmovable': // morphic.js:4211
        undefined,
    'World': // morphic.js:4219
        undefined,
    'show the\n{{ WorldMorph }}\'s menu': // morphic.js:4223
        undefined,
    'choose target': // morphic.js:4721 morphic.js:5102 morphic.js:6562 morphic.js:7200
        undefined,
    'set rotation': // morphic.js:4868
        undefined,
    'interactively turn this morph\nusing a dial widget': // morphic.js:4870
        undefined,
    'set target': // morphic.js:5092 morphic.js:6552 morphic.js:7118
        undefined,
    'choose another morph\nwhose color property\nwill be controlled by this one': // morphic.js:5094
        undefined,
    'choose target property': // morphic.js:5122 morphic.js:6582 morphic.js:7220
        undefined,
    'border width': // morphic.js:5895 morphic.js:5898
        undefined,
    'set the border\'s\nline size': // morphic.js:5908
        undefined,
    'border color': // morphic.js:5911 morphic.js:5914
        undefined,
    'set the border\'s\nline color': // morphic.js:5920
        undefined,
    'corner size': // morphic.js:5923 morphic.js:5926
        undefined,
    'set the corner\'s\nradius': // morphic.js:5936
        undefined,
    'select another morph\nwhose numerical property\nwill be controlled by this one': // morphic.js:6554 morphic.js:7120
        undefined,
    'horizontal': // morphic.js:6701
        undefined,
    'toggle the\norientation': // morphic.js:6703 morphic.js:6709
        undefined,
    'vertical': // morphic.js:6707
        undefined,
    'show value': // morphic.js:7064
        undefined,
    'display a dialog box\nshowing the selected number': // morphic.js:7066
        undefined,
    'set the minimum value\nwhich can be selected': // morphic.js:7082
        undefined,
    'set the maximum value\nwhich can be selected': // morphic.js:7098
        undefined,
    'button size': // morphic.js:7101 morphic.js:7104
        undefined,
    'set the range\ncovered by\nthe slider button': // morphic.js:7114
        undefined,
    'un-mark own': // morphic.js:7595
        undefined,
    'mark own': // morphic.js:7595
        undefined,
    'highlight\n\'own\' properties': // morphic.js:7600
        undefined,
    'in new inspector': // morphic.js:7614
        undefined,
    'here': // morphic.js:7627
        undefined,
    '{{ name }}\nis not inspectable': // morphic.js:7635
        undefined,
    'save': // morphic.js:7653
        undefined,
    'accept changes': // morphic.js:7653
        undefined,
    'add property': // morphic.js:7655
        undefined,
    'remove': // morphic.js:7657
        undefined,
    'close': // morphic.js:7664 morphic.js:7948
        undefined,
    'new property name': // morphic.js:7789
        undefined,
    'property': // morphic.js:7802
        undefined,
    'property name': // morphic.js:7810
        undefined,
    'font size': // morphic.js:8732 morphic.js:8735 morphic.js:9479 morphic.js:9482
        undefined,
    'set this String\'s\nfont point size': // morphic.js:8745
        undefined,
    'serif': // morphic.js:8748 morphic.js:9505
        undefined,
    'sans-serif': // morphic.js:8751 morphic.js:9508
        undefined,
    'normal weight': // morphic.js:8754 morphic.js:9511
        undefined,
    'bold': // morphic.js:8756 morphic.js:9513
        undefined,
    'normal style': // morphic.js:8759 morphic.js:9516
        undefined,
    'italic': // morphic.js:8761 morphic.js:9518
        undefined,
    'hide blanks': // morphic.js:8764
        undefined,
    'show blanks': // morphic.js:8766
        undefined,
    'show characters': // morphic.js:8769
        undefined,
    'hide characters': // morphic.js:8771
        undefined,
    'set this Text\'s\nfont point size': // morphic.js:9492
        undefined,
    'align left': // morphic.js:9495
        undefined,
    'align right': // morphic.js:9498
        undefined,
    'align center': // morphic.js:9501
        undefined,
    'do it': // morphic.js:9563
        undefined,
    'evaluate the\nselected expression': // morphic.js:9565
        undefined,
    'show it': // morphic.js:9568
        undefined,
    'evaluate the\nselected expression\nand show the result': // morphic.js:9570
        undefined,
    'inspect it': // morphic.js:9573
        undefined,
    'evaluate the\nselected expression\nand inspect the result': // morphic.js:9575
        undefined,
    'select all': // morphic.js:9578
        undefined,
    'move all inside': // morphic.js:10303 morphic.js:12178
        undefined,
    'keep all submorphs\nwithin and visible': // morphic.js:10305 morphic.js:12180
        undefined,
    'auto line wrap off': // morphic.js:10685
        undefined,
    'turn automatic\nline wrapping\noff': // morphic.js:10687
        undefined,
    'auto line wrap on': // morphic.js:10691
        undefined,
    'enable automatic\nline wrapping': // morphic.js:10693
        undefined,
    '(empty)': // morphic.js:10781
        '(\u043F\u0440\u0430\u0437\u043D\u043E)',
    'Are you sure you want to leave?': // morphic.js:12110
        undefined,
    'demo': // morphic.js:12173
        undefined,
    'sample morphs': // morphic.js:12173
        undefined,
    'hide all': // morphic.js:12175
        undefined,
    'show all': // morphic.js:12176 objects.js:7423
        '\u043F\u043E\u0447\u0430\u0436\u0438 \u0432\u0441\u0438\u0447\u043A\u043E',
    'open a window on\nall properties': // morphic.js:12185
        undefined,
    'screenshot': // morphic.js:12188 objects.js:413
        undefined,
    'restore display': // morphic.js:12196
        undefined,
    'redraw the\nscreen once': // morphic.js:12198
        undefined,
    'fill page': // morphic.js:12201
        undefined,
    'let the World automatically\nadjust to browser resizing': // morphic.js:12203
        undefined,
    'sharp shadows': // morphic.js:12207
        undefined,
    'sharp drop shadows\nuse for old browsers': // morphic.js:12209
        undefined,
    'blurred shadows': // morphic.js:12213
        undefined,
    'blurry shades\nuse for new browsers': // morphic.js:12215
        undefined,
    'choose the World\'s\nbackground color': // morphic.js:12228
        undefined,
    'touch screen settings': // morphic.js:12232
        undefined,
    'bigger menu fonts\nand sliders': // morphic.js:12234
        undefined,
    'standard settings': // morphic.js:12238
        undefined,
    'smaller menu fonts\nand sliders': // morphic.js:12240
        undefined,
    'user mode': // morphic.js:12247
        undefined,
    'disable developers\'\ncontext menus': // morphic.js:12249
        undefined,
    'about {{ resource }}': // morphic.js:12254
        undefined,
    'make a morph': // morphic.js:12266
        undefined,
    'rectangle': // morphic.js:12267 symbols.js:109
        undefined,
    'box': // morphic.js:12270
        undefined,
    'circle box': // morphic.js:12273
        undefined,
    'slider': // morphic.js:12277 objects.js:9461
        '\u0441\u043B\u0430\u0439\u0434\u0435\u0440',
    'dial': // morphic.js:12280
        undefined,
    'frame': // morphic.js:12284
        undefined,
    'scroll frame': // morphic.js:12289
        undefined,
    'handle': // morphic.js:12296
        undefined,
    'string': // morphic.js:12300
        undefined,
    'Hello, World!': // morphic.js:12301 morphic.js:12329
        undefined,
    'speech bubble': // morphic.js:12328
        undefined,
    'gray scale palette': // morphic.js:12333
        undefined,
    'color palette': // morphic.js:12336
        undefined,
    'color picker': // morphic.js:12339
        undefined,
    'sensor demo': // morphic.js:12343
        undefined,
    'animation demo': // morphic.js:12353
        undefined,
    'modules': // morphic.js:12444
        undefined,
    'a lively Web GUI\ninspired by Squeak': // morphic.js:12451
        undefined,
    'written by {{ author }}\n{{ email }}': // morphic.js:12453
        undefined,
    'Motion': // objects.js:146
        '\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435',
    'Control': // objects.js:147
        '\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435',
    'Looks': // objects.js:148
        '\u0412\u044A\u043D\u0448\u043D\u043E\u0441\u0442',
    'Sensing': // objects.js:149
        '\u0421\u0435\u043D\u0437\u043E\u0440\u0438',
    'Sound': // objects.js:150 objects.js:8570
        '\u0417\u0432\u0443\u0446\u0438',
    'Operators': // objects.js:151
        '\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438',
    'Pen': // objects.js:152
        '\u041C\u043E\u043B\u0438\u0432',
    'Lists': // objects.js:154
        '\u0421\u043F\u0438\u0441\u044A\u0446\u0438',
    'Other': // objects.js:155
        '\u0414\u0440\u0443\u0433\u0438',
    'move %n steps': // objects.js:201
        '\u043D\u0430\u043F\u0440\u0435\u0434 \u0441 %n \u0441\u0442\u044A\u043F\u043A\u0438',
    'turn %clockwise %n degrees': // objects.js:208
        '%clockwise \u0441 %n \u0433\u0440\u0430\u0434\u0443\u0441\u0430',
    'turn %counterclockwise %n degrees': // objects.js:215
        '\u0437\u0430\u0432\u044A\u0440\u0442\u0438 %counterclockwise \u0441 %n \u0433\u0440\u0430\u0434\u0443\u0441\u0430',
    'point in direction %dir': // objects.js:222
        '\u043E\u0431\u044A\u0440\u043D\u0438 \u0441\u0435 \u0432 \u043F\u043E\u0441\u043E\u043A\u0430 %dir',
    'point towards %dst': // objects.js:228
        '\u043E\u0431\u044A\u0440\u043D\u0438 \u0441\u0435 \u043A\u044A\u043C %dst',
    'go to x: %n y: %n': // objects.js:234
        '\u043F\u0440\u0435\u043C\u0438\u043D\u0438 \u043A\u044A\u043C x %n y %n',
    'go to %dst': // objects.js:241
        '\u043F\u0440\u0435\u043C\u0438\u043D\u0438 \u0432 \u0442\u043E\u0447\u043A\u0430 %dst',
    'glide %n secs to x: %n y: %n': // objects.js:247
        '\u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435 %n \u0441\u0435\u043A \u0434\u043E x %n y %n',
    'change x by %n': // objects.js:254
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0445 \u0441 %n',
    'set x to %n': // objects.js:261
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 \u0445 \u043D\u0430 %n',
    'change y by %n': // objects.js:268
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 y \u0441 %n',
    'set y to %n': // objects.js:275
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 y \u043D\u0430 %n',
    'if on edge, bounce': // objects.js:282
        '\u0430\u043A\u043E \u0435 \u0432 \u043A\u0440\u0430\u044F, \u043E\u0442\u0431\u043B\u044A\u0441\u043D\u0438 \u0441\u0435',
    'switch to costume %cst': // objects.js:307
        '\u0441\u043C\u0435\u043D\u0438 \u043A\u043E\u0441\u0442\u044E\u043C \u0441 %cst',
    'next costume': // objects.js:312
        '\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F \u043A\u043E\u0441\u0442\u044E\u043C',
    'say %s for %n secs': // objects.js:323
        '\u043A\u0430\u0436\u0438 %s \u0437\u0430 %n \u0441\u0435\u043A',
    'Hello!': // objects.js:324 objects.js:331
        '\u0417\u0434\u0440\u0430\u0441\u0442\u0438!',
    'say %s': // objects.js:330
        '\u043A\u0430\u0436\u0438 %s',
    'think %s for %n secs': // objects.js:337
        '\u043C\u0438\u0441\u043B\u0438 %s \u0437\u0430 %n \u0441\u0435\u043A',
    'Hmm': // objects.js:338 objects.js:345
        '\u0425\u043C\u043C',
    'think %s': // objects.js:344
        '\u043C\u0438\u0441\u043B\u0438 %s',
    'change %eff effect by %n': // objects.js:350
        '\u0441\u043C\u0435\u043D\u0438 %eff \u0435\u0444\u0435\u043A\u0442 \u0441 %n',
    'set %eff effect to %n': // objects.js:356
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 \u0435\u0444\u0435\u043A\u0442 %eff \u043D\u0430 %n',
    'clear graphic effects': // objects.js:362
        '\u043C\u0430\u0445\u043D\u0438 \u0435\u0444\u0435\u043A\u0442\u0438\u0442\u0435',
    'change size by %n': // objects.js:368
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0441 %n',
    'set size to %n %': // objects.js:375
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 %n',
    'go to front': // objects.js:400
        '\u043F\u0440\u0435\u043C\u0438\u043D\u0438 \u043D\u0430\u0439-\u043E\u0442\u043F\u0440\u0435\u0434',
    'go back %n layers': // objects.js:406
        '\u043F\u0440\u0435\u043C\u0438\u043D\u0438 \u0441 %n \u0441\u043B\u043E\u044F \u043D\u0430\u0437\u0430\u0434',
    'save %imgsource as costume named %s': // objects.js:412
        undefined,
    'wardrobe': // objects.js:421
        undefined,
    'alert %mult%s': // objects.js:428
        '\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 %mult%s',
    'console log %mult%s': // objects.js:434
        '\u043D\u0430\u043F\u0438\u0448\u0438 \u0432 \u043A\u043E\u043D\u0437\u043E\u043B\u0430\u0442\u0430 %mult%s',
    'play sound %snd': // objects.js:441
        '\u043F\u0443\u0441\u043D\u0438 \u0437\u0432\u0443\u043A %snd',
    'play sound %snd until done': // objects.js:446
        '\u043F\u0443\u0441\u043D\u0438 \u0437\u0432\u0443\u043A %snd \u0434\u043E \u043A\u0440\u0430\u0439',
    'stop all sounds': // objects.js:451
        '\u0441\u043F\u0440\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0437\u0432\u0443\u0446\u0438',
    'rest for %n beats': // objects.js:456
        '\u043F\u0430\u0443\u0437\u0430 \u0437\u0430 %n \u0442\u0430\u043A\u0442\u0430',
    'play note %note for %n beats': // objects.js:462
        undefined,
    'set instrument to %inst': // objects.js:468
        undefined,
    'change tempo by %n': // objects.js:474
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0442\u0435\u043C\u043F\u043E\u0442\u043E \u0441 %n',
    'set tempo to %n bpm': // objects.js:480
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 \u0442\u0435\u043C\u043F\u043E %n \u0443\u0434\u0430\u0440\u0430 \u0432 \u043C\u0438\u043D.',
    'tempo': // objects.js:486
        '\u0442\u0435\u043C\u043F\u043E',
    'jukebox': // objects.js:494
        undefined,
    'clear': // objects.js:501 paint.js:230
        '\u0438\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043A\u043E',
    'pen down': // objects.js:507
        '\u043D\u0430\u0442\u0438\u0441\u043D\u0438 \u043C\u043E\u043B\u0438\u0432\u0430',
    'pen up': // objects.js:513
        '\u0432\u0434\u0438\u0433\u043D\u0438 \u043C\u043E\u043B\u0438\u0432\u0430',
    'set pen color to %clr': // objects.js:519
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u043C\u043E\u043B\u0438\u0432 \u0441 \u0446\u0432\u044F\u0442 %clr',
    'change pen color by %n': // objects.js:525
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0446\u0432\u044F\u0442\u0430 \u043D\u0430 \u043C\u043E\u043B\u0438\u0432\u0430 \u0441 %n',
    'set pen color to %n': // objects.js:532
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0446\u0432\u044F\u0442 %n',
    'change pen shade by %n': // objects.js:539
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u044F\u0440\u043A\u043E\u0441\u0442\u0442\u0430 \u0441 %n',
    'set pen shade to %n': // objects.js:546
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 \u044F\u0440\u043A\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 %n',
    'change pen size by %n': // objects.js:553
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0441 %n',
    'set pen size to %n': // objects.js:560
        '\u0438\u0431\u0435\u0440\u0438 \u043C\u043E\u043B\u0438\u0432 \u0441 \u0440\u0430\u0437\u043C\u0435\u0440 %n',
    'stamp': // objects.js:567
        '\u043F\u0435\u0447\u0430\u0442\u0447\u0435',
    'fill': // objects.js:573
        undefined,
    'when %greenflag clicked': // objects.js:585
        '\u043A\u043E\u0433\u0430\u0442\u043E %greenflag \u0435 \u043A\u043B\u0438\u043A\u043D\u0430\u0442',
    'when %keyHat key pressed': // objects.js:590
        '\u043A\u043E\u0433\u0430\u0442\u043E \u0431\u0443\u0442\u043E\u043D %keyHat \u0435 \u043D\u0430\u0442\u0438\u0441\u043D\u0430\u0442',
    'when I am %interaction': // objects.js:595
        undefined,
    'when I receive %msgHat': // objects.js:601
        '\u043A\u043E\u0433\u0430\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0430 %msgHat',
    'when %b': // objects.js:606
        undefined,
    'broadcast %msg': // objects.js:611
        '\u0438\u0437\u043F\u0440\u0430\u0442\u0438 %msg \u043A\u044A\u043C \u0432\u0441\u0438\u0447\u043A\u0438',
    'broadcast %msg and wait': // objects.js:616
        '\u0438\u0437\u043F\u0440\u0430\u0442\u0438 %msg \u043A\u044A\u043C \u0432\u0441\u0438\u0447\u043A\u0438 \u0438 \u0438\u0437\u0447\u0430\u043A\u0430\u0439',
    'message': // objects.js:621
        undefined,
    'wait %n secs': // objects.js:626
        '\u0438\u0437\u0447\u0430\u043A\u0430\u0439 %n \u0441\u0435\u043A',
    'wait until %b': // objects.js:632
        '\u0438\u0437\u0447\u0430\u043A\u0430\u0439 \u0434\u043E %b',
    'forever %c': // objects.js:637
        '\u0437\u0430\u0432\u0438\u043D\u0430\u0433\u0438 %c',
    'repeat %n %c': // objects.js:642
        '\u043F\u043E\u0432\u0442\u043E\u0440\u0438 %n %c',
    'repeat until %b %c': // objects.js:648
        '\u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u0434\u043E\u043A\u0430\u0442\u043E %b %c',
    'if %b %c': // objects.js:653
        '\u0430\u043A\u043E %b %c',
    'if %b %c else %c': // objects.js:658
        '\u0430\u043A\u043E %b %c \u0438\u043D\u0430\u0447\u0435 %c',
    'stop %stopChoices': // objects.js:678
        undefined,
    'run %cmdRing %inputs': // objects.js:693
        '\u0438\u0437\u043F\u044A\u043B\u043D\u0438 %cmdRing %inputs',
    'launch %cmdRing %inputs': // objects.js:698
        '\u043F\u0443\u0441\u043D\u0438 %cmdRing %inputs',
    'call %repRing %inputs': // objects.js:703
        '\u0438\u0437\u0432\u0438\u043A\u0430\u0439 %repRing %inputs',
    'report %s': // objects.js:708
        '\u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442 %s',
    'run %cmdRing w/continuation': // objects.js:720
        '\u0438\u0437\u043F\u044A\u043B\u043D\u0438 %cmdRing \u0441 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435',
    'call %cmdRing w/continuation': // objects.js:725
        '\u0438\u0437\u0432\u0438\u043A\u0430\u0439 %cmdRing \u0441 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0435\u043D\u0438\u0435',
    'warp %c': // objects.js:730
        'warp %c',
    'tell %spr to %cmdRing %inputs': // objects.js:739
        undefined,
    'ask %spr for %repRing %inputs': // objects.js:744
        undefined,
    'when I start as a clone': // objects.js:752
        undefined,
    'create a clone of %cln': // objects.js:757
        undefined,
    'a new clone of %cln': // objects.js:762
        undefined,
    'delete this clone': // objects.js:768
        undefined,
    'pause all %pause': // objects.js:776
        undefined,
    'touching %col ?': // objects.js:785
        '\u0434\u043E\u043F\u0438\u0440\u0430 \u043B\u0438 %col ?',
    'touching %clr ?': // objects.js:791
        '\u0434\u043E\u043F\u0438\u0440\u0430 \u043B\u0438 %clr ?',
    'color %clr is touching %clr ?': // objects.js:797
        '\u0446\u0432\u044F\u0442 %clr \u0434\u043E\u043F\u0438\u0440\u0430 \u043B\u0438 %clr ?',
    'filtered for %clr': // objects.js:803
        '\u0444\u0438\u043B\u0442\u044A\u0440 \u0437\u0430 %clr',
    'stack size': // objects.js:809
        '\u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0430 \u0441\u0442\u0435\u043A\u0430',
    'frames': // objects.js:815
        '\u0440\u0430\u043C\u043A\u0438',
    'processes': // objects.js:821
        undefined,
    'ask %s and wait': // objects.js:826
        '\u043F\u043E\u043F\u0438\u0442\u0430\u0439 %s \u0438 \u0438\u0437\u0447\u0430\u043A\u0430\u0439',
    'what\'s your name?': // objects.js:827
        '\u043A\u0430\u043A \u0441\u0435 \u043A\u0430\u0437\u0432\u0430\u0448?',
    'answer': // objects.js:833 objects.js:838
        '\u043E\u0442\u0433\u043E\u0432\u043E\u0440',
    'mouse x': // objects.js:843
        '\u043C\u0438\u0448\u043A\u0430 x-\u043F\u043E\u0437\u0438\u0446\u0438\u044F',
    'mouse y': // objects.js:848
        '\u043C\u0438\u0448\u043A\u0430 y-\u043F\u043E\u0437\u0438\u0446\u0438\u044F',
    'mouse down?': // objects.js:853
        '\u043D\u0430\u0442\u0438\u0441\u043D\u0430\u0442 \u0431\u0443\u0442\u043E\u043D \u043D\u0430 \u043C\u0438\u0448\u043A\u0430\u0442\u0430?',
    'key %key pressed?': // objects.js:858
        '\u0431\u0443\u0442\u043E\u043D %key \u043D\u0430\u0442\u0438\u0441\u043D\u0430\u0442?',
    '%rel to %dst': // objects.js:871
        undefined,
    'reset timer': // objects.js:877
        '\u043D\u0443\u043B\u0438\u0440\u0430\u0439 \u0442\u0430\u0439\u043C\u0435\u0440',
    'timer': // objects.js:883 objects.js:888
        '\u0442\u0430\u0439\u043C\u0435\u0440',
    '%att of %spr': // objects.js:893
        undefined,
    'url %s': // objects.js:899
        undefined,
    'turbo mode?': // objects.js:905
        undefined,
    'set turbo mode to %b': // objects.js:910
        undefined,
    'current %dates': // objects.js:915
        undefined,
    'my %get': // objects.js:920
        undefined,
    'round %n': // objects.js:968
        '\u0437\u0430\u043A\u0440\u044A\u0433\u043B\u0438 %n',
    '%fun of %n': // objects.js:973
        '%fun \u043E\u0442 %n',
    '%n mod %n': // objects.js:979
        '%n \u043C\u043E\u0434\u0443\u043B %n',
    'pick random %n to %n': // objects.js:984
        '\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u043D\u043E \u0447\u0438\u0441\u043B\u043E \u043C\u0435\u0436\u0434\u0443 %n \u0438 %n',
    '%b and %b': // objects.js:1005
        '%b \u0438 %b',
    '%b or %b': // objects.js:1010
        '%b \u0438\u043B\u0438 %b',
    'not %b': // objects.js:1015
        '\u043D\u0435 %b',
    'join %words': // objects.js:1033
        '\u0441\u044A\u0435\u0434\u0438\u043D\u0438 %words',
    'hello': // objects.js:1034 objects.js:1075
        '\u0437\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435',
    'world': // objects.js:1034 objects.js:1040 objects.js:1046 objects.js:1075
        '\u0445\u043E\u0440\u0430',
    'letter %n of %s': // objects.js:1039
        '\u0431\u0443\u043A\u0432\u0430 %n \u043E\u0442 %s',
    'length of %s': // objects.js:1045
        '\u0434\u044A\u043B\u0436\u0438\u043D\u0430 \u043D\u0430 %s',
    'unicode of %s': // objects.js:1051
        'Unicode \u043D\u0430 %s',
    'unicode %n as letter': // objects.js:1057
        '\u0431\u0443\u043A\u0432\u0430 \u0441 Unicode %n',
    'is %s a %typ ?': // objects.js:1063
        '%s \u043E\u0442 \u0442\u0438\u043F %typ \u043B\u0438 \u0435 ?',
    'is %s identical to %s ?': // objects.js:1069
        '%s \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u0435\u043D \u0441 %s ?',
    'split %s by %delim': // objects.js:1074
        undefined,
    'JavaScript function ( %mult%s ) { %code }': // objects.js:1080
        undefined,
    'type of %s': // objects.js:1086
        '\u0442\u0438\u043F \u043D\u0430 %s',
    '%txtfun of %s': // objects.js:1093
        undefined,
    'compile %repRing': // objects.js:1099
        undefined,
    'set %var to %s': // objects.js:1119
        '\u043D\u0430\u0441\u0442\u0440\u043E\u0439 %var \u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 %s',
    'change %var by %n': // objects.js:1125
        '\u043F\u0440\u043E\u043C\u0435\u043D\u0438 %var \u0441 %n',
    'show variable %var': // objects.js:1131
        '\u043F\u043E\u043A\u0430\u0436\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430 %var',
    'hide variable %var': // objects.js:1136
        '\u0441\u043A\u0440\u0438\u0439 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430 %var',
    'script variables %scriptVars': // objects.js:1141
        '\u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0438 \u043D\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430 %scriptVars',
    'inherit %shd': // objects.js:1148
        undefined,
    'list %exp': // objects.js:1155
        '\u0441\u043F\u0438\u0441\u044A\u043A %exp',
    '%s in front of %l': // objects.js:1160
        '%s \u043F\u0440\u0435\u0434 %l',
    'item %idx of %l': // objects.js:1165
        '\u0435\u043B\u0435\u043C\u0435\u043D\u0442 %idx \u043E\u0442 %l',
    'all but first of %l': // objects.js:1171
        '\u0432\u0441\u0438\u0447\u043A\u043E \u043E\u0441\u0440\u0435\u043D \u043F\u044A\u0440\u0432\u0438\u044F \u043E\u0442 %l',
    'length of %l': // objects.js:1176
        '\u0434\u044A\u043B\u0436\u0438\u043D\u0430 \u043D\u0430 %l',
    '%l contains %s': // objects.js:1181
        '%l \u0441\u044A\u0434\u044A\u0440\u0436\u0430 %s',
    'thing': // objects.js:1182 objects.js:1188 objects.js:1200 objects.js:1206
        '\u043D\u0435\u0449\u043E',
    'add %s to %l': // objects.js:1187
        '\u0434\u043E\u0431\u0430\u0432\u0438 %s \u043A\u044A\u043C %l',
    'delete %ida of %l': // objects.js:1193
        '\u0438\u0437\u0442\u0440\u0438\u0439 %ida \u043E\u0442 %l',
    'insert %s at %idx of %l': // objects.js:1199
        '\u0432\u043C\u044A\u043A\u043D\u0438 %s \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044F %idx \u0432 %l',
    'replace item %idx of %l with %s': // objects.js:1205
        '\u0437\u0430\u043C\u0435\u0441\u0442\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442 %idx \u0432 %l \u0441 %s',
    'map %repRing over %l': // objects.js:1214
        undefined,
    'for %upvar in %l %cl': // objects.js:1220
        undefined,
    'each item': // objects.js:1221
        undefined,
    'show table %l': // objects.js:1230
        undefined,
    'map %cmdRing to %codeKind %code': // objects.js:1237
        undefined,
    'map %mapValue to code %code': // objects.js:1242
        undefined,
    'map %codeListPart of %codeListKind to code %code': // objects.js:1256
        undefined,
    'code of %cmdRing': // objects.js:1261
        undefined,
    'Sprite': // objects.js:1404
        '\u0421\u043F\u0440\u0430\u0439\u0442',
    'that name is already in use': // objects.js:1859 objects.js:7047
        undefined,
    'development mode\ndebugging primitives': // objects.js:1932 objects.js:2089 objects.js:2155 objects.js:2268 objects.js:7085 objects.js:7214 objects.js:7280 objects.js:7376
        '\u0420\u0435\u0436\u0438\u043C \u0437\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438\u0441\u0442\u0438\n\u043F\u0440\u0438\u043C\u0438\u0442\u0438\u0432\u0438 \u0437\u0430 \u0434\u0435\u0431\u044A\u0433\u0438\u0440\u0430\u043D\u0435',
    'Make a variable': // objects.js:2184 objects.js:7309
        '\u041D\u0430\u043F\u0440\u0430\u0432\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430',
    'Delete a variable': // objects.js:2205 objects.js:7327
        '\u0418\u0437\u0442\u0440\u0438\u0439 \u043F\u0440\u043E\u043C\u0435\u043D\u043B\u0438\u0432\u0430',
    'find blocks': // objects.js:2398 objects.js:2469
        undefined,
    'hide primitives': // objects.js:2476
        undefined,
    'show primitives': // objects.js:2494
        undefined,
    'rotate': // objects.js:3244
        undefined,
    'pivot': // objects.js:3247
        undefined,
    'edit the costume\'s\nrotation center': // objects.js:3249
        undefined,
    'make permanent and\nshow in the sprite corral': // objects.js:3257
        undefined,
    'exceeding maximum number of clones': // objects.js:3355
        undefined,
    'Costume': // objects.js:4338
        undefined,
    'setting the rotation center requires a costume': // objects.js:4679
        undefined,
    'current parent': // objects.js:5420
        undefined,
    'Stage': // objects.js:6315
        '\u0421\u0446\u0435\u043D\u0430',
    'stop': // objects.js:6770 costumes/COSTUMES:486
        undefined,
    'terminate all running threads': // objects.js:6774
        undefined,
    'Stage selected:\nno motion primitives': // objects.js:7060
        '\u0418\u0437\u0431\u0440\u0430\u043D\u0430 \u0441\u0446\u0435\u043D\u0430:\n\u043D\u044F\u043C\u0430 \u0431\u043B\u043E\u043A\u043E\u0432\u0435 \u0441 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite': // objects.js:7445
        undefined,
    'turn all pen trails and stamps\ninto a new background for the stage': // objects.js:7447
        undefined,
    'Background': // objects.js:7817
        undefined,
    'a {{ className }}({{ name }})': // objects.js:8096
        undefined,
    'click or drag crosshairs to move the rotation center': // objects.js:8296
        '\u043A\u043B\u0438\u043A\u043D\u0438 \u0437\u0430 \u0434\u0430 \u043F\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0448 \u0446\u0435\u043D\u0442\u0440\u0430 \u043D\u0430 \u0440\u043E\u0442\u0430\u0446\u0438\u044F\u0442\u0430',
    'Costume Editor': // objects.js:8308
        '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043D\u0430 \u041A\u043E\u0441\u0442\u044E\u043C\u0438',
    'an {{ className }}({{ name }})': // objects.js:8395
        undefined,
    'Web Audio API is not supported\nin this browser': // objects.js:8629
        undefined,
    'normal': // objects.js:9452
        '\u043D\u043E\u0440\u043C\u0430\u043B\u0435\u043D',
    'large': // objects.js:9456
        '\u0433\u043E\u043B\u044F\u043C',
    'slider min': // objects.js:9466
        '\u0441\u043B\u0430\u0439\u0434\u0435\u0440 min',
    'slider max': // objects.js:9470
        '\u0441\u043B\u0430\u0439\u0434\u0435\u0440 max',
    'import': // objects.js:9475
        '\u0438\u043C\u043F\u043E\u0440\u0442',
    'Unable to import': // objects.js:9501
        undefined,
    '{{ appName }} can only import "text" files.\nYou selected a file of type "{{ type }}".': // objects.js:9502
        undefined,
    'Slider minimum value': // objects.js:9588
        '\u0421\u043B\u0430\u0439\u0434\u0435\u0440 \u0441 min \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442',
    'Slider maximum value': // objects.js:9604
        '\u0421\u043B\u0430\u0439\u0434\u0435\u0440 \u0441 max \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442',
    'Paint Editor': // paint.js:111
        undefined,
    'Paintbrush tool\n(free draw)': // paint.js:172
        undefined,
    'Stroked Rectangle\n(shift: square)': // paint.js:174
        undefined,
    'Stroked Ellipse\n(shift: circle)': // paint.js:176
        undefined,
    'Eraser tool': // paint.js:178
        undefined,
    'Set the rotation center': // paint.js:180
        undefined,
    'Line tool\n(shift: vertical/horizontal)': // paint.js:183
        undefined,
    'Filled Rectangle\n(shift: square)': // paint.js:185
        undefined,
    'Filled Ellipse\n(shift: circle)': // paint.js:187
        undefined,
    'Fill a region': // paint.js:189
        undefined,
    'Pipette tool\n(pick a color anywhere)': // paint.js:191
        undefined,
    'undo': // paint.js:225
        '\u0432\u044A\u0441\u0442\u0430\u043D\u043E\u0432\u0438',
    'grow': // paint.js:239
        undefined,
    'shrink': // paint.js:243
        undefined,
    'flip \u2194': // paint.js:247
        undefined,
    'flip \u2195': // paint.js:251
        undefined,
    'Constrain proportions of shapes?\n(you can also hold shift)': // paint.js:407
        undefined,
    'Brush size': // paint.js:413
        undefined,
    'loading should be implemented in heir of XML_Serializer': // store.js:235
        undefined,
    '{{ appName }} Project': // store.js:328
        undefined,
    'This project has been created by a different app:\n\n{{ appName }}\n\nand may be incompatible or fail to load here.': // store.js:329
        undefined,
    'Project uses newer version of Serializer': // store.js:351
        undefined,
    'Module uses newer version of Serializer': // store.js:630 store.js:662 store.js:743
        undefined,
    'expecting a command but getting a reporter': // store.js:1076
        undefined,
    'Obsolete!': // store.js:1198
        undefined,
    'expecting a reference id': // store.js:1282
        undefined,
    'square': // symbols.js:85
        undefined,
    'pointRight': // symbols.js:86
        undefined,
    'stepForward': // symbols.js:87
        undefined,
    'gears': // symbols.js:88
        undefined,
    'file': // symbols.js:89
        undefined,
    'fullScreen': // symbols.js:90
        undefined,
    'normalScreen': // symbols.js:91
        undefined,
    'smallStage': // symbols.js:92
        undefined,
    'normalStage': // symbols.js:93
        undefined,
    'turtle': // symbols.js:94
        undefined,
    'turtleOutline': // symbols.js:96
        undefined,
    'pause': // symbols.js:97
        undefined,
    'flag': // symbols.js:98
        undefined,
    'octagon': // symbols.js:99
        undefined,
    'cloud': // symbols.js:100 costumes/COSTUMES:170
        undefined,
    'cloudOutline': // symbols.js:101
        undefined,
    'cloudGradient': // symbols.js:102
        undefined,
    'turnRight': // symbols.js:103
        undefined,
    'turnLeft': // symbols.js:104
        undefined,
    'storage': // symbols.js:105
        undefined,
    'poster': // symbols.js:106
        undefined,
    'flash': // symbols.js:107
        undefined,
    'brush': // symbols.js:108
        undefined,
    'rectangleSolid': // symbols.js:110
        undefined,
    'circle': // symbols.js:111
        undefined,
    'circleSolid': // symbols.js:112
        undefined,
    'cross': // symbols.js:114
        undefined,
    'crosshairs': // symbols.js:115
        undefined,
    'paintbucket': // symbols.js:116
        undefined,
    'eraser': // symbols.js:117
        undefined,
    'pipette': // symbols.js:118
        undefined,
    'speechBubble': // symbols.js:119
        undefined,
    'speechBubbleOutline': // symbols.js:120
        undefined,
    'turnBack': // symbols.js:121
        undefined,
    'turnForward': // symbols.js:122
        undefined,
    'arrowUp': // symbols.js:123
        undefined,
    'arrowUpOutline': // symbols.js:124
        undefined,
    'arrowLeft': // symbols.js:125
        undefined,
    'arrowLeftOutline': // symbols.js:126
        undefined,
    'arrowDown': // symbols.js:127
        undefined,
    'arrowDownOutline': // symbols.js:128
        undefined,
    'arrowRight': // symbols.js:129
        undefined,
    'arrowRightOutline': // symbols.js:130
        undefined,
    'robot': // symbols.js:131
        undefined,
    'magnifyingGlass': // symbols.js:132
        undefined,
    'magnifierOutline': // symbols.js:133
        undefined,
    'notes': // symbols.js:134
        undefined,
    'camera': // symbols.js:135
        undefined,
    'location': // symbols.js:136
        undefined,
    'footprints': // symbols.js:137
        undefined,
    'keyboard': // symbols.js:138
        undefined,
    'keyboardFilled': // symbols.js:139
        undefined,
    'reset columns': // tables.js:1024 tables.js:1032
        undefined,
    'open in another dialog': // tables.js:1027
        undefined,
    'list view': // tables.js:1034
        undefined,
    'Table view': // tables.js:1186
        undefined,
    'expecting a receiver but getting {{ actual }}': // threads.js:145
        undefined,
    'expecting a block or ring but getting {{ actual }}': // threads.js:160
        undefined,
    'a synchronous {{ appName }} script has timed out': // threads.js:172
        undefined,
    'the predicate takes\ntoo long for a\ncustom hat block': // threads.js:428
        undefined,
    'compiling does not yet support\nvariables that are not\nformal parameters': // threads.js:758
        undefined,
    'compiling does not yet support\ncustom blocks': // threads.js:785
        undefined,
    'compiling does not yet support\nimplicit parameters\n(empty input slots)': // threads.js:818
        undefined,
    'compiling does not yet support\ninputs of type\n{{ type }}': // threads.js:845
        undefined,
    'compiling does not yet support\ninput slots of type\n{{ type }}': // threads.js:858
        undefined,
    'reporter didn\'t report': // threads.js:1087
        undefined,
    'Inside': // threads.js:1100
        undefined,
    'a custom block definition is missing': // threads.js:1107
        undefined,
    'expecting a ring but getting {{ actual }}': // threads.js:1202 threads.js:1316
        undefined,
    'expecting {{ expected }} input(s), but getting {{ actual }}': // threads.js:1265 threads.js:1366
        undefined,
    'continuations cannot be forked': // threads.js:1312
        undefined,
    'expecting {{ expected }} but getting {{ actual }}': // threads.js:2538
        undefined,
    'cannot operate on a deleted sprite': // threads.js:2546
        undefined,
    'expecting text instead of a {{ type }}': // threads.js:2862
        undefined,
    'expecting a text delimiter instead of a {{ type }}': // threads.js:2868
        undefined,
    'unsupported attribute': // threads.js:3448
        undefined,
    'unable to nest\n(disabled or circular?)': // threads.js:3462
        undefined,
    '"{{ name }}" is read-only': // threads.js:3505
        undefined,
    '"{{ name }}"\nis not a valid option': // threads.js:3642
        undefined,
    'unsupported data type {{ type }}': // threads.js:3677
        undefined,
    '{{ className }} >> {{ expression }} {{ variables }}': // threads.js:3958
        undefined,
    'a transient {{ className }} [{{ value }}]': // threads.js:4122
        undefined,
    'a {{ className }} [{{ value }}]': // threads.js:4123
        undefined,
    'a {{ className }} {{{ value }}}': // threads.js:4139
        undefined,
    'a variable of name "{{ name }}"\ndoes not exist in this context': // threads.js:4176 threads.js:4257
        undefined,
    'Yes': // widgets.js:1607
        '\u0414\u0430',
    'No': // widgets.js:1608
        '\u041D\u0435',
    'Default': // widgets.js:1882
        undefined,
    '{{ year }} or before': // widgets.js:2024
        undefined,
    'User name': // widgets.js:2054 widgets.js:2059 widgets.js:2092
        undefined,
    'Birth date': // widgets.js:2061
        undefined,
    'Password': // widgets.js:2071 widgets.js:2078
        undefined,
    'Repeat Password': // widgets.js:2073
        undefined,
    'Old password': // widgets.js:2083
        undefined,
    'New password': // widgets.js:2085
        undefined,
    'Repeat new password': // widgets.js:2087
        undefined,
    'please fill out\nthis field': // widgets.js:2196
        undefined,
    'User name must be four\ncharacters or longer': // widgets.js:2201
        undefined,
    'please provide a valid\nemail address': // widgets.js:2206
        undefined,
    'password must be six\ncharacters or longer': // widgets.js:2212
        undefined,
    'passwords do\nnot match': // widgets.js:2216
        undefined,
    'please agree to\nthe TOS': // widgets.js:2222
        undefined,
    'E-mail address of parent or guardian': // widgets.js:2258
        undefined,
    'E-mail address': // widgets.js:2259
        undefined,
    'Missing required element <{{ tagName }}>!': // xml.js:186
        undefined,
    'Expected "=" after attribute name': // xml.js:341
        undefined,
    'Expected single- or double-quoted attribute value': // xml.js:347
        undefined,
    'Expected ">" after "/" in empty tag': // xml.js:361
        undefined,
    'Expected ">" after tag name and attributes': // xml.js:367
        undefined,
    'Expected to close {{ tagName }}': // xml.js:379
        undefined,
    'Tools': // libraries/LIBRARIES:1
        undefined,
    'Standard library of powerful blocks (for, map, etc.)': // libraries/LIBRARIES:1
        undefined,
    'Iteration, composition': // libraries/LIBRARIES:2
        undefined,
    'Traditional loop constructs (while, until, etc.) plus the Lisp "named let" (a generalization of FOR) plus functional iteration (repeated invocation of a function) and function composition.': // libraries/LIBRARIES:2
        undefined,
    'List utilities': // libraries/LIBRARIES:3
        undefined,
    'Some standard functions on lists (append, reverse, etc.)': // libraries/LIBRARIES:3
        undefined,
    'Streams (lazy lists)': // libraries/LIBRARIES:4
        undefined,
    'A variation on the list data type in which each list item aren\'t computed until it\'s needed, so you can construct million-item lists without really taking up all that time or memory, or even infinite-sized lists. (A block that reports all the prime numbers is included as an example.)': // libraries/LIBRARIES:4
        undefined,
    'Variadic reporters': // libraries/LIBRARIES:5
        undefined,
    'Versions of +, x, AND, and OR that take more than two inputs.': // libraries/LIBRARIES:5
        undefined,
    'Web services access (https)': // libraries/LIBRARIES:6
        undefined,
    'An extended version of the HTTP:// block that allows POST, PUT, and DELETE as well as GET requests, allows using the secure HTTPS protocol, and gives control over headers, etc.': // libraries/LIBRARIES:6
        undefined,
    'Words, sentences': // libraries/LIBRARIES:7
        undefined,
    'One of the big ideas in Logo that they left out of Scratch is thinking of text as structured into words and sentences, rather than just a string of characters. This library (along with the JOIN WORDS block in the Tools library) brings back that idea.': // libraries/LIBRARIES:7
        undefined,
    'Multi-branched conditional (switch)': // libraries/LIBRARIES:8
        undefined,
    'Like "switch" in C-like languages or "cond" in Lisp. Thanks to Nathan Dinsmore for inventing the idea of a separate block for each branch!': // libraries/LIBRARIES:8
        undefined,
    'LEAP Motion controller': // libraries/LIBRARIES:9
        undefined,
    'Report hand positions from LEAP Motion controller (leapmotion.com).': // libraries/LIBRARIES:9
        undefined,
    'Set RGB or HSV pen color': // libraries/LIBRARIES:10
        undefined,
    'Set or report pen color as RGB (red, green, blue) or HSV (hue, saturation, value).': // libraries/LIBRARIES:10
        undefined,
    'Catch errors in a script': // libraries/LIBRARIES:11
        undefined,
    'Run a script; if an error happens, instead of stopping the script with a red halo, run another script to handle the error. Also includes a block to cause an error with a message given as input. Also includes a block to create a script variable and give it a value.': // libraries/LIBRARIES:11
        undefined,
    'Allow multi-line text input to a block': // libraries/LIBRARIES:12
        undefined,
    'In general, text inputs allow only a single line. The MULTILINE block accepts multi-line text input and can be used in text input slots of other blocks.': // libraries/LIBRARIES:12
        undefined,
    'Provide getters and setters for all GUI-controlled global settings': // libraries/LIBRARIES:13
        undefined,
    'Eisenberg\'s Law: Anything that can be done from the GUI should be doable from the programming language, and vice versa.': // libraries/LIBRARIES:13
        undefined,
    'Infinite precision integers, exact rationals, complex': // libraries/LIBRARIES:14
        undefined,
    'The full Scheme numeric tower. "USE BIGNUMS <True>" to enable.': // libraries/LIBRARIES:14
        undefined,
    'Provide 100 selected colors': // libraries/LIBRARIES:15
        undefined,
    'to use instead of hue for better selection': // libraries/LIBRARIES:15
        undefined,
    'Text to speech': // libraries/LIBRARIES:16
        undefined,
    'output text using speech synthesis.': // libraries/LIBRARIES:16
        undefined,
    'Animation': // libraries/LIBRARIES:17
        undefined,
    'glide, grow and rotate using easing functions.': // libraries/LIBRARIES:17
        undefined,
    'Pixels': // libraries/LIBRARIES:18
        undefined,
    'manipulate costumes pixel-wise.': // libraries/LIBRARIES:18
        undefined,
    'Audio Comp': // libraries/LIBRARIES:19
        undefined,
    'analyze, manipulate and generate sound samples.': // libraries/LIBRARIES:19
        undefined,
};

// ✂ - - - - - - - - - - - - - - - - -  -   -
// The following are strings that were used once by Snap! but not anymore
// (or just mispelled strings)
// Feel free to delete or keep them for future references
SnapTranslator.dict.bg.deprecated = {
    'add a new sprite':
        '\u0414\u043E\u0431\u0430\u0432\u0438 \u043D\u043E\u0432 \u0441\u043F\u0440\u0430\u0439\u0442',
    'play note %n for %n beats':
        '\u043F\u0443\u0441\u043D\u0438 \u043D\u043E\u0442\u0430 %n \u0437\u0430 %n \u0442\u0430\u043A\u0442\u0430',
    'when I am clicked':
        '\u043A\u043E\u0433\u0430\u0442\u043E \u043A\u043B\u0438\u043A\u043D\u0435\u0448 \u0432\u044A\u0440\u0445\u0443 \u043C\u0435\u043D',
    'stop block':
        '\u0441\u043F\u0440\u0438 \u0431\u043B\u043E\u043A\u0430',
    'stop script':
        '\u0441\u043F\u0440\u0438 \u0441\u043A\u0440\u0438\u043F\u0442\u0430',
    'stop all %stop':
        '\u0441\u043F\u0440\u0438 \u0432\u0441\u0438\u0447\u043A\u043E %stop',
    'distance to %dst':
        '\u0440\u0430\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043E %dst',
    'http:// %s':
        'http:// %s',
    'Snap! website':
        '\u0423\u0435\u0431\u0441\u0430\u0439\u0442 \u043D\u0430 Snap!',
    'uncheck to allow\nscript reentrancy':
        '\u043E\u0442\u043A\u0430\u0436\u0438 \u0437\u0430 \u0434\u0430 \u0438\u0437\u043A\u043B\u044E\u0447\u0438\u0448\nthread safe \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0435',
    'check to disallow\nscript reentrancy':
        '\u0438\u0437\u0431\u0435\u0440\u0438 \u0437\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0448\nthread safe \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0435',
    'Ok':
        'Ok',
    'Saved!':
        '\u0417\u0430\u043F\u0438\u0441\u0430\u043D!',
    'Are you sure you want to delete':
        '\u0421\u0438\u0440\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0448?',
    'Save Project As':
        '\u0417\u0430\u043F\u0438\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043A\u0430\u0442\u043E',
    'Single input.':
        '\u0415\u0434\u0438\u043D\u0438\u0447\u0435\u043D \u0432\u0445\u043E\u0434',
    'new':
        '\u043D\u043E\u0432',
    'now connected':
        '\u043A\u043E\u043D\u0435\u043A\u0442\u0438\u0440\u0430\u043D',
};
