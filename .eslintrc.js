module.exports = {
    env: {
        browser: true,
        es6: true
    },
   "extends": "airbnb",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        singleQuote: [0],
        'react/destructuring-assignment': [0],
        'react/jsx-filename-extension': [0],
        'jsx-quotes': [0],
        'react/no-danger': [0],
        'comma-dangle': [0],
        'react/jsx-no-target-blank': [0],
        'semi': [1],
        'react/no-deprecated': [0],
        'indent': [0],
        'no-tabs': [0]
    }
};
