export default [
  {
      rules: {
          semi: "error",
          "prefer-const": "error",
          "unused-imports/no-unused-imports": "error",
      },
      overrides: [
        {
          files: ['*.stories.tsx', 'src/pages/**/*'],
          rules: {
            'import/no-default-export': 'off',
          },
        },
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          },
          typescript: {
            alwaysTryTypes: true,
            config: 'tsconfig.json',
          },
        },
        react: {
          version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
      },
  }
];