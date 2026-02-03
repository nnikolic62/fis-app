import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * ESLint configuration for React Router apps (like apps/core).
 * Includes comprehensive rules for code quality, imports, accessibility, and best practices.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "**/.react-router/**",
      "**/build/**",
      "**/dist/**",
      "**/node_modules/**",
      "**/.cache/**",
    ],
  },
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      // React best practices
      "react/prop-types": "off", // Using TypeScript instead
      "react/display-name": "off",
      "react/no-unescaped-entities": "warn",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "off", // Not needed with new JSX transform
      "react/jsx-uses-vars": "error",
      // Enforce function declarations for components (not arrow functions)
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],
    },
  },
  {
    rules: {
      // Code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
      "prefer-template": "warn",
      
      // Best practices
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "no-implicit-coercion": "error",
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",
      "no-return-await": "error",
      "require-await": "warn",
      
      // Consistent return statements
      "consistent-return": ["warn", { treatUndefinedAsUnspecified: true }],
      
      // Unused variables and imports (TypeScript ESLint handles this better)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off", // Use TypeScript version instead
      
      // Import/export rules
      "no-duplicate-imports": "error",
      "no-useless-rename": "error",
      
      // TypeScript specific rules (non-type-aware)
      "@typescript-eslint/explicit-function-return-type": "off", // Too strict for most cases
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      // Type-aware rules disabled - require parserOptions.project to be configured
      // Enable these by adding parserOptions.project in your app's eslint.config.js
      // "@typescript-eslint/prefer-optional-chain": "error", // Requires type info
      // "@typescript-eslint/prefer-nullish-coalescing": "warn", // Requires type info
      // "@typescript-eslint/no-unnecessary-condition": "warn", // Requires type info
      // "@typescript-eslint/no-floating-promises": "error", // Requires type info
      // "@typescript-eslint/await-thenable": "error", // Requires type info
      // "@typescript-eslint/no-misused-promises": "error", // Requires type info
      
      // Array and object rules
      "no-array-constructor": "error",
      "no-new-object": "error",
      "object-shorthand": "warn",
      
      // Function rules
      "no-param-reassign": ["error", { props: true }],
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
      
      // Error handling
      "no-else-return": ["warn", { allowElseIf: false }],
      "no-lonely-if": "warn",
      
      // Code style
      "curly": ["error", "all"],
      "default-case": "warn",
      "default-case-last": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-empty-function": ["warn", { allow: ["arrowFunctions"] }],
      
      // Security and performance
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
    },
  },
];

