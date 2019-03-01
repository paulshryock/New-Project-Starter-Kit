module.exports = {
  plugins: [
    require('precss'), // Use Sass-like markup in your CSS
    require('postcss-preset-env'), // Convert modern CSS into something browsers understand
    require('autoprefixer'), // Add vendor prefixes
    require('cssnano')({ // Modern CSS compression
        preset: 'default',
    }),
  ]
}