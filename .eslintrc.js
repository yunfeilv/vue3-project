module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prefer-const': ['off'], // 要求使用 const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'key-spacing': ['off'], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'eol-last': ['off'], // 要求或禁止文件末尾存在空行
    semi: ['off'], // 要求或禁止使用分号代替 ASI
    'no-unused-vars': ['warn'], // 禁止出现未使用过的变量
    'no-var': ['warn'], // 禁止使用var
    quotes: ['off'], // 强制使用一致的反勾号、双引号或单引号
    indent: ['error', 2, { SwitchCase: 1 }], // 设置缩进为4,临时
    // indent: ['off'], // 强制使用一致的缩进
    'arrow-spacing': ['off'], // 强制箭头函数的箭头前后使用一致的空格
    'object-curly-spacing': ['off'], // 强制在大括号中使用一致的空格
    'comma-dangle': ['off'], // 要求或禁止末尾逗号
    'comma-spacing': ['off'], // 强制在逗号前后使用一致的空格
    'no-multiple-empty-lines': ['off'], // 禁止出现多行空行
    // 禁止出现未使用过的表达式
    'no-unused-expressions': [
      'error',
      {
        // 设置为 true 将允许你在表达式中使用逻辑短路求值。（默认为 false）
        allowShortCircuit: true,
      },
    ],
    'global-require': 0, // 强制在模块顶部调用 require()
    'import/no-dynamic-require': 0,
    'linebreak-style': 0, // 	强制使用一致的换行风格
    'max-len': 0, // 强制一行的最大长度
    'no-restricted-syntax': 0, // 禁用特定的语法
    eqeqeq: 0, // 要求使用 === 和 !==
    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
    'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
    'object-curly-newline': 0, // 强制大括号内换行符的一致性
    'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
    'no-lonely-if': 0, // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-restricted-globals': 0, // 禁用特定的全局变量
    'no-unreachable': 0, // 防止使用swtich语句 语法检查报错,禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'implicit-arrow-linebreak': 0, // 强制隐式返回的箭头函数体的位置
    'function-paren-newline': 0, // 强制在函数括号内使用一致的换行
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // 大括号风格要求  import  { } from xxx 不换行,
    'import/prefer-default-export': 0,
    'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
    'no-param-reassign': 0, // 禁止对函数参数再赋值
    'no-prototype-builtins': 0, // 禁止直接调用 Object.prototypes 的内置属性
    'class-methods-use-this': 0, // 强制类方法使用 如果一个类方法不使用 this，可以安全的做为静态函数出现。
    'prefer-destructuring': 0, // 不强制使用解构操作符
    'func-names': 0, // 函数可以没有名字
    'array-callback-return': 0, // 箭头函数可以不返回
    'no-console': 0, // 禁用 console
    // 'prettier/prettier': ['error', { tabWidth: 2 }], // 设置prettier/prettier缩进为2
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        parser: 'flow',
        tabWidth: 2,
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
