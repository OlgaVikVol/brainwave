module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, // Added node if you use Node.js
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json', // Required for certain typescript-eslint rules
  },
  settings: {
    react: { version: 'detect' }, // Tells eslint-plugin-react to automatically detect the version of React
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  plugins: ['react', 'react-refresh', '@typescript-eslint'], // Added @typescript-eslint
  rules: {
    // Your custom rules
    'react/jsx-no-target-blank': 'off',
    // Remove 'react-refresh/only-export-components' if not applicable in TypeScript context
  },
};

