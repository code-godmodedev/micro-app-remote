import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  output: {
    sourceMap: {
      js: 'source-map',
    },
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'auto',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output.uniqueName = 'jsRemote';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'jsRemote',
          exposes: {
            './RemoteComponent': './src/RemoteComponent.jsx',
            './AnotherComponent': './src/AnotherComponent.jsx',
            './NonExistantComponent': './src/NonExistantComponent.jsx',
          },
          shared: [
            {
              react: {
                eager: true,
              },
            },
            {
              'react-dom': {
                eager: true,
              },
            },
          ],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
