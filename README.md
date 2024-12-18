# Configuração do Webpack com .NET MVC

Este projeto demonstra como integrar o Webpack ao .NET MVC para gerenciar arquivos JavaScript de forma eficiente.

## Estrutura de Arquivos

- `./Components/Webpack.js`
- `./package.json`
- `./webpack.config.js`

## Configuração de Pastas

A configuração atual está focada no processamento de arquivos `.js`. Para começar a utilizar, siga os passos abaixo:

1. Crie uma pasta chamada `Src` na raiz do projeto.
2. Dentro de `Src`, crie uma subpasta chamada `js` para organizar os arquivos JavaScript.
3. Cada pasta dentro de `js` representará os arquivos associados a um controller do projeto.

### Exemplo de Estrutura

```plaintext
./Controllers/HomeController.cs
./Src/js/Home/Relogio.js
----------------------------------
./Controllers/UsuarioController.cs
./Src/js/Usuario/Cadastro.js
./Src/js/Usuario/Login.js

### Exemplo de Estrutura

```plaintext
./Controllers/HomeController.cs
./Src/js/Home/Relogio.js
----------------------------------
./Controllers/UsuarioController.cs
./Src/js/Usuario/Cadastro.js
./Src/js/Usuario/Login.js
