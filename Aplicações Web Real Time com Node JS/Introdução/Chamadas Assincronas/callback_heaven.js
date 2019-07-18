const fs = require('fs');

const lerDiretorio = function() {
  fs.readdir(__dirname, function(erro, diretorio) {
    if(erro) return erro;
    diretorio.forEach(function(arquivo) {
      lerArquivo(arquivo);
    });
  });
};

const lerArquivo = function(arquivo) {
  let path = './' + arquivo;
  fs.stat(path, function(erro, stat) {
    if(erro) return erro;
    if(stat.isFile()) {
      console.log('%s %d bytes', arquivo, stat.size);
    }
  });
};

lerDiretorio();
