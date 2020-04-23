const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('nextjs-fonts');
const dotenv = require('dotenv-webpack');

module.exports = withCSS(
  withSass(
    withFonts({
      webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
              esModule: false,
            },
          },
        });
        config.plugins.push(new dotenv({ silent: true }));
        return config;
      },
    })
  )
);
