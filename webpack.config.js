const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        home : path.resolve(__dirname,"src","Index.js")
    },    
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'js/bundle.[name].js'
    },
    
    resolve : {
        extensions : ['.js','.jsx']
    },


    devServer :{
        open:true,
        port:3100,
        // compress : true,
        contentBase: path.join(__dirname, 'dist')
        
    },

    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                use : 'babel-loader' ,
                exclude : '/node_modules/'
            },
            {
                test : /\.html$/,
                use :[
                    {
                        loader : 'html-loader'
                    }
                ]
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname,"public","index.html")
        })
    ]
}