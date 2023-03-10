module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    // Modifiez la configuration de votre webpack ici
    return config;
  },
  // Configuration pour déployer sur GitHub Pages
  "storybook-static": {
    "publicPath": "/Design-Systems/"
  }
};