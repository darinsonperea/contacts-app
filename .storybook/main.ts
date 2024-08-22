import type { StorybookConfig } from "@storybook/react-vite";
import type { AddonOptionsWebpack } from "@storybook/addon-coverage";

const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ["**/stories/**"],
    exclude: ["**/exampleDirectory/**"],
  },
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-coverage", //👈 Registers the addon
    {
      name: "@storybook/addon-coverage",
      options: coverageConfig,
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
