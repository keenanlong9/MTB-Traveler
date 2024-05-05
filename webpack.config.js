const path = require('path');
module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, "/src/Language.js")],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/dist')
    }
};