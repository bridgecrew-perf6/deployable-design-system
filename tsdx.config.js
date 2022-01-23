const url = require('@rollup/plugin-url');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      // Force the `url` plugin to emit files.
      url({ include: ['**/*.woff'] }),
      images({ incude: ['**/*.png', '**/*.jpg', '**/*.webp', '**/*.svg'] }),
      ...config.plugins,
    ];

    return config;
  },
};
