module.exports = {
  extends: 'stylelint-config-airbnb',
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'rule-empty-line-before': 'always',
    'function-comma-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'never',
    'string-quotes': 'double',
    'max-nesting-depth': 4,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'transform',
      'z-index',
      'flex-shrink',
      'flex-grow',
      'order',
      'flex-base',
      'display',
      'flex-direction',
      'justify-content',
      'align-items',
      'flex-wrap',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'width',
      'height',
      'vertical-align',
      'border-radius',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'background',
      'background-position',
      'background-size',
      'background-color',
      'background-image',
      'background-repeat',
      'outline',
      'box-shadow',
      'font-size',
      'line-height',
      'font-weight',
      'font-style',
      'white-space',
      'text-transform',
      'text-decoration',
      'cursor',
      'opacity',
      'transition',
      'animation',
    ],
  },
};