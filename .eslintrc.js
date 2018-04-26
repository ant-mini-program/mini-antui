module.exports = {
  plugins: [],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: { // 其他语言特性
      experimentalObjectRestSpread: true, // ...rest参数和扩展扩算符
      jsx: true,
      modules: true
    },
    sourceType: 'module', // 默认script，可选module
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  globals: { // 全局变量，false代表无法重写
    document: false,
    navigator: false,
    window: false,
    Component: false,
    App: false,
    Page: false,
  },

  // http://eslint.org/docs/rules/xxx, xxx代表rule名称, 0=off, 1=warning, 2=error
  rules: { // 具体规则
    'accessor-pairs': 2, // getter/setter成对出现
    'arrow-spacing': [2, { 'before': true, 'after': true }], // 箭头函数前后有空格
    'array-bracket-spacing': [2, 'never'], // 数组内前后无空格
    'block-spacing': [2, 'always'], // 单行{}前后有空格
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // {}换行，单行不用
    'camelcase': [2, { 'properties': 'never' }], // 属性名可以不是驼峰
    'comma-dangle': [2, 'only-multiline'], // 数组/对象最后一个必须有,
    'comma-spacing': [2, { 'before': false, 'after': true }], // ,前有空格, 后无空格
    'comma-style': [2, 'last'], // ,在最后，不能换行
    'constructor-super': 2, // super()在必须构造函数内
    'curly': [2, 'multi-line'], // if/while等函数可以多行不带{}
    'dot-location': [2, 'property'], // .的位置可以在换行
    'eol-last': 2, // 文件末尾需要空白行
    'eqeqeq': [2, 'allow-null'], // 必须===, null除外
    'generator-star-spacing': [2, { 'before': true, 'after': true }], // generator函数前后有空格
    'handle-callback-err': [2, '^(err|error)$' ], // 有err/error必须处理异常
    'indent': [2, 2, { 'SwitchCase': 1 }], // 缩进2格，switch中1格
    'jsx-quotes': [2, 'prefer-single'], // jsx属性用单引号
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 对象属性前有空格, 后无空格
    'keyword-spacing': [2, { 'before': true, 'after': true }], // 关键词前后有空格, 如if-else
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }], // new后必须大写开头构造函数, 大写开头不一定要new
    'new-parens': 2, // new的构造函数必须带参数
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }], // 对象{}前后有空格, 对象内的对象例外
    'no-array-constructor': 2, // Array(10)->yes, Array(1, 2)->no
    'no-caller': 2, // 禁止caller/callee
    'no-class-assign': 2, // 禁止赋值class
    'no-cond-assign': 2, // 条件不能有赋值
    'no-const-assign': 2, // 禁止赋值常量(const)
    'no-control-regex': 2, // reg中不能有控制符号
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // node环境prod禁用
    'no-delete-var': 2, // 不能delete变量，可以用在对象
    'no-dupe-args': 2, // 参数不能重复
    'no-dupe-class-members': 2, // class中方法不能有重复
    'no-dupe-keys': 2, // 对象key不能重复
    'no-duplicate-case': 2, // switch不能有重复case
    'no-empty-character-class': 2, // reg中不能有空字符串
    'no-empty-pattern': 2, // 解构不能有空解构模式
    'no-eval': 2, // 不能用eval
    'no-ex-assign': 2, // 不能复制catch中的error
    'no-extend-native': 2, // 不能扩展Object原型
    'no-extra-bind': 2, // bind的函数体中要有明确的this
    'no-extra-boolean-cast': 2, // 禁止多余的Boolean转换
    'no-extra-parens': [2, 'functions'], // 函数中禁止多余的括号
    'no-fallthrough': 2, // switch需要break
    'no-floating-decimal': 2, // float中0不能省略
    'no-func-assign': 2, // 禁止赋值函数
    'no-implied-eval': 2, // 禁止隐性eval
    'no-inner-declarations': [2, 'functions'], // 禁止在条件中声明function
    'no-invalid-regexp': 2, // 禁止无用的reg
    'no-irregular-whitespace': 2, // 禁止不规则空格
    'no-iterator': 2, // 禁止使用__iterator__属性
    'no-label-var': 2, // 禁止label var
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }], // 禁止label表达式
    'no-lone-blocks': 2, // 禁止无用的{}
    'no-mixed-spaces-and-tabs': 2, // space和tab不混用
    'no-multi-spaces': 2, // 禁止多空格
    'no-multi-str': 2, // 禁止多行的string
    'no-multiple-empty-lines': [2, { 'max': 1 }], // 禁止多空行，最大1行
    'no-native-reassign': 2, // 禁止赋值原生对象(window/Object...)
    'no-negated-in-lhs': 2, // !(key in object)->yes, !key in object->no
    'no-new-object': 2, // new Object()->no
    'no-new-require': 2, // new require(xxx)->no
    'no-new-symbol': 2, // new Symbol(xxx)->no
    'no-new-wrappers': 2, // String/Number等不能用new
    'no-obj-calls': 2, // 禁止calling全局对象属性，如Math/JSON
    'no-octal': 2, // 禁止八进制文字
    'no-octal-escape': 2, // 禁止八进制转义
    'no-path-concat': 2, // __dirname和__filename禁止string拼接
    'no-proto': 2, // 禁止使用__proto__
    'no-redeclare': 2, // 禁止重新复制var
    'no-regex-spaces': 2, // 禁止reg出现多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止return中赋值
    'no-self-assign': 2, // 禁止自身赋值
    'no-self-compare': 2, // 禁止自身比较, 如果NaN->Number.isNaN
    'no-sequences': 2, // 禁止,操作符
    'no-shadow-restricted-names': 2, // 禁止跟踪严格模式下部分关键词
    'no-spaced-func': 2, // function的()不要空格
    'no-sparse-arrays': 2, // array不能用空元素
    'no-this-before-super': 2, // super()前不能用this
    'no-throw-literal': 2, // 禁止直接throw内容，必须是Error()
    'no-trailing-spaces': 2, // 禁止多余的空格
    'no-undef': 2, // 禁止使用未赋值变量
    'no-undef-init': 2, // 变量不能初始化为undefined
    'no-unexpected-multiline': 2, // 禁止有疑义的多行表达式
    'no-unmodified-loop-condition': 2, // 循环中的变量要在循环中修改
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }], // 禁止不必要的三元操作符
    'no-unreachable': 2, // return/throw等之后不应有表达式
    'no-unsafe-finally': 2, // 禁止不安全的finally
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }], // 禁止不使用的变量，参数可以
    'no-useless-call': 2, // 禁止无用的call
    'no-useless-computed-key': 2, // 禁止无用的计算属性
    'no-useless-constructor': 2, // 禁止无用的constructor
    'no-whitespace-before-property': 2, // 属性前不能有空格
    'no-with': 2, // 禁用with
    'one-var': [2, { 'initialized': 'never' }], // 只能一个var, 初始化不检查
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }], // 操作符换行, 默认在行末, ?和:在下一行前
    'padded-blocks': [2, 'never'], // 作用域中没有padded的空行
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // 使用单引号, 转义或者模版可以例外
    'semi': [2, 'always'], // 禁用结尾;
    'semi-spacing': [2, { 'before': false, 'after': true }], // ;前有空格, 后无空格
    'space-before-blocks': [2, 'always'], // 作用域前有空格
    'space-in-parens': [2, 'never'], // 括号内无空格
    'space-infix-ops': 2, // 插入的操作符需要空格, 如+/-
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 操作符单词类要空格(new/delete), 非单词不要空格(++/--/!)
    'spaced-comment': [2, 'always', { 'markers': ['!', ',', '/', '-'] }], // 注释要空格，markers为例外
    'template-curly-spacing': [2, 'never'], // 模版字符串中变量无空格
    'use-isnan': 2, // 使用isNaN
    'valid-typeof': 2, // typeof的字符串必须正确
    'wrap-iife': [2, 'any'], // 立即调用的function必须有括号
    'yield-star-spacing': [2, 'both'], // yield的*前后有空格
    'yoda': [2, 'never'], // 条件中变量在前

    'prefer-const': 0, // 能用const场景用const
    'no-useless-escape': 0, // 不检查escape
    'space-before-function-paren': 0, // 函数括号无空格
  }
}
