const path = require('path')
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  docs: {
    autodocs: 'tag',
  },
  framework: '@storybook/react-vite'
}
