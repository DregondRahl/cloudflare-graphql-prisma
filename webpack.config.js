const path = require('path');

module.exports = {
  mode: 'development',
  // Wrangler doesn't like eval which devtools use in development.
  devtool: 'none',
  entry: './src/server.ts',
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      // Alias for resolving the Prisma Client properly
      '@prisma/client$': require.resolve('@prisma/client'),
      'graphql-ws$': require.resolve('graphql-ws'),
      // Make apollo depends happy
      fs: path.resolve(__dirname, './src/null.ts'),
      net: path.resolve(__dirname, './src/null.ts'),
      tls: path.resolve(__dirname, './src/null.ts')
    }
  },
  target: 'webworker',
  optimization: {
    usedExports: true,
  },
};
