/** @type {import("stylelint").Config} */
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'custom-property-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'keyframes-name-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'length-zero-no-unit': true,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'declaration-property-unit-disallowed-list': {
      'line-height': ['em', 'rem', 'px', '%'],
    },
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['custom-media'],

      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};
