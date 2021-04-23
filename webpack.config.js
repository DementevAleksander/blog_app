const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'], //входная точка нашего приложения (путь до файла)
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
  }
}