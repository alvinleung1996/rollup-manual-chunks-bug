export default {
  input: 'app.js',
  output: {
    format: 'es',
    dir: 'dist',
    chunkFileNames: '[name].js',
    manualChunks: (id) => {
      if (id.endsWith('login-form.strings.en.js') || id.endsWith('registration-form.strings.en.js')) {
        return 'form.strings.en'
      } else if (id.endsWith('common.strings.en.js')) {
        return 'common.strings.en.js'
      }
      return null
    },
  },
}
