const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
   	 test: /\.(scss)$/,
    	use: [{
      		loader: 'style-loader', // inject CSS to page
    		}, {
      		loader: 'css-loader', // translates CSS into CommonJS modules
    		}, {
      		loader: 'postcss-loader', // Run post css actions
      		options: {
        	plugins: function () { // post css plugins, can be exported to postcss.config.js
          	return [
            		require('precss'),
            		require('autoprefixer')
          		];
        		}
      		}		
    		}, {
      		loader: 'sass-loader' // compiles Sass to CSS
    		}]
  	},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
	{
 	 test:  /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  	 loader: 'file-loader'
	}
    ]
  }
};

