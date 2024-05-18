module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: [
    require('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
