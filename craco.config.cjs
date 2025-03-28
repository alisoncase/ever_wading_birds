const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.enforce === 'pre' && rule.use && rule.use.some((u) => u.loader.includes('source-map-loader'))) {
          rule.exclude = /node_modules/; // Exclude node_modules from source-map-loader
        }
        return rule;
      });
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        include: /node_modules\/@arcgis\/core/,
        type: 'javascript/auto',
      });
      return webpackConfig;
    },
  },
};
