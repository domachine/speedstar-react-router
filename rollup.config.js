import babel from 'rollup-plugin-babel'

export default {
  format: 'cjs',
  external: ['react', 'react-router-dom', 'speedstar/boot'],
  plugins: [
    babel()
  ]
}
