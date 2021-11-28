module.exports = {
    extends: 'stylelint-config-recommended-scss',
    rules: {
        'number-leading-zero': null,
        indentation: 4,
        'no-duplicate-selectors': true,
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'no-missing-end-of-source-newline': true,
        'max-empty-lines': 1,
        'no-descending-specificity': null,
        'no-eol-whitespace': true,
        'declaration-no-important': true,
        'rule-empty-line-before': [
            'always',
            {
                except: [
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                ],
            },
        ],
    },
};