const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'image_designer.min.js',
        publicPath: 'auto',
		libraryTarget: 'window',
        chunkFilename: (pathData) => {
            return (pathData.chunk.name?pathData.chunk.name.toLowerCase().replace('-js', '')+'.addon.js': (Math.random() + 1).toString(36).substring(7)+'.addon.js');
        },
    },
    devServer: {
        port: 3010,
        liveReload: true,
    	static: path.join(__dirname, 'dist')
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
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
            {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
					  loader: 'file-loader',
					},
				],
			},
            {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader", 
					"postcss-loader",
				],
			},
        ]
    },
    plugins: [
		// new webpack.ProvidePlugin({
		// 	process: 'process/browser',
		// }),
		new MiniCssExtractPlugin({
			filename: 'image_designer.min.css',
			ignoreOrder: false, 
		}),
		// new BundleAnalyzerPlugin(),
	]
}