const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.min.js',
    },
    devServer: {
        port: 3010,
        // watchContentBase: true,
    },
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
                exclude: '/node_modules',
				use: {
					loader: 'babel-loader'
				}
			},
            {
				test: /\.scss$/i,
				use: [
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
        ]
    }
}