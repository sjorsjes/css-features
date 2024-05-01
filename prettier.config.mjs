/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-css-order'],
  cssDeclarationSorterOrder: 'smacss',
  cssDeclarationSorterKeepOverrides: true,
};
