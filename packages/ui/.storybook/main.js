/** @type { import('@storybook/react-vite').StorybookConfig } */
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  docs: {
    autodocs: true, // see below for alternatives
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
  framework: '@storybook/react-vite',
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen',
  },
}
