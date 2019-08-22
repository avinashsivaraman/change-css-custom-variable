export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/change-css-variable.js',
      format: 'cjs'
    },
    {
      file: 'dist/change-css-variable-umd.js',
      format: 'umd',
      name: 'eat'
    }
  ]
};
