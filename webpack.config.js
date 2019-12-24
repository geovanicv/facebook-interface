const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), //arquivo de entrada
    
    //aonde o codigo transpilado pelo webpack ira ser adicionado
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    //regras para que toda vez que foe encontrado um arquivo js o babel transpilar
    module: {
        rules: [
            {
                test: /\.js$/, //expressao regular - encontre um arquivo .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },

            {
                test: /.*\.(svg|gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }

        ]
    }
}