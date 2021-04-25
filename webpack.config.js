const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'], //входная точка нашего приложения (путь до файла), '@babel/polyfill' - webpack записывает полифилы в результирующий файл 'bundle.js'
  output: { //куда собираем наш проект
    path: __dirname + '/dist', // __dirname - глобальная переменная, отвечающая за текущий путь
    filename: 'bundle.js' //файл, в котором будут собираться скрипты
  },
  devServer: { //конфигурируем сервер для разработки
    contentBase: __dirname + '/dist' //указываем путь до папки, где мы запускаем сервер.
  },
  plugins: [
    new HTMLPlugin({ //чтобы манипулировать index.html, его изменять, автоматически добавляя название скрипта (тег </script>). Подключить нужно bundle.js.
      filename: 'index.html', //название выходного файла.
      template: './src/index.html' //берём за основу тот файл index.html, что уже есть.
    })
  ],
  resolve: {
    extensions: ['.js'] //чтобы каждый раз не приписывать расширение файла.
  },
  module: { //https://babeljs.io/setup#installation (Webpack)
    rules: [
      {test: /\.m?js$/, exclude: /node_modules/, use: {loader: "babel-loader", options: {presets: ['@babel/preset-env']}}}
    ]
  }
}