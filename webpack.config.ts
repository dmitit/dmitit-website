import path from "path";
import type { Configuration as WebpackConfiguration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

type Configuration = WebpackConfiguration & DevServerConfiguration;

const config: Configuration = {
   entry: "./src/index.jsx",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, "public", "index.html"),
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
         },
         {
            test: /\.(png|jpg|gif)$/i,
            type: "asset/resource",
         },
      ],
   },
   resolve: {
      extensions: ["*", ".js", ".jsx"],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      historyApiFallback: true,
   },
};

export default config;
