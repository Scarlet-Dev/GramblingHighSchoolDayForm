const path = require('path');

module.exports = {
    entry: [
        path.join(process.cwd(), 'index.tsx'),

    ],
    module: {
        rules:[{ test: /\.tsx?$/, loader: 'ts-loader' }],
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    }
}