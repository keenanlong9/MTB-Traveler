const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, "/src/Language.js")],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/dist')
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.IDENTITY_POOL_ID': JSON.stringify(process.env.IDENTITY_POOL_ID),
        }),
      ],
};