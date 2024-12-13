//      CARREGANDO PLUGINS.     //
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');
const path = require('path');
//     /CARREGANDO PLUGINS.     //

//      FUNÇÃO PARA AGRUPAR OS ARQUIVOS POR PASTA E GERAR UM OBJETO.     //
function groupEntriesByFolder(pattern) {
    const entries = {};
    const files = glob.sync(pattern);

    files.forEach((file) => {
        const folderName = path.dirname(file).split(path.sep).pop();

        if (!entries[folderName]) {
            entries[folderName] = [];
        }

        entries[folderName].push(path.resolve(__dirname, file));
    });

    return entries;
}
//     /FUNÇÃO PARA AGRUPAR OS ARQUIVOS POR PASTA E GERAR UM OBJETO.     //

const groupedEntries = groupEntriesByFolder('./Src/js/**/*.js');

module.exports = {
    mode: 'production',
    entry: groupedEntries,
    output: {
        filename: '[name]/[name].bundle.js?v=[contenthash]',
        path: path.resolve(__dirname, './wwwroot/dist/js/'),
    },
    devServer: {
        webSocketServer: false,
        static: {
            directory: path.join(__dirname, './wwwroot/dist'),
        },
        hot: false,
        port: 5000,
        open: false,
        devMiddleware: {
            writeToDisk: (filePath) => filePath.endsWith('.js') || filePath.endsWith('.cshtml'),
        },
        proxy: [
            {
                context: () => true,
                target: 'http://localhost:9000',
                changeOrigin: true,
                secure: false,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...Object.keys(groupedEntries).map((folderName) => {
            let outputPath;

            if (folderName === 'js') {
                outputPath = path.resolve(__dirname, './Views/Shared/Components/Webpack/index.cshtml');
            } else {
                outputPath = path.resolve(
                    __dirname,
                    `./Views/Shared/Components/Webpack/${folderName}/index.cshtml`
                );
            }
            return new HtmlWebpackPlugin({
                inject: false,
                templateContent: ({ htmlWebpackPlugin }) => {
                    const scripts = (htmlWebpackPlugin.files.js || [])
                        .filter((jsPath) =>
                            jsPath.includes(`/${folderName}/${folderName}.bundle.js`)
                        )
                        .map((jsPath) => {
                            return `<script src="${jsPath.replace('/wwwroot', '')}"></script>`;
                        })
                        .join('\n');

                    return scripts || `<!-- Nenhum script encontrado -->`;
                },
                filename: () => {
                    //console.log(outputPath)
                    return outputPath;
                },
            });
        }),
    ]
};
