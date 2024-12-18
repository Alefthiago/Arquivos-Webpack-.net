
> [!NOTE]
> A configuração atual está focada no processamento de arquivos `.js`.
> O carregamento dos arquivos no momento está separando-os por Controller e não por View, ou seja, os arquivos estão sendo carregados em todas as Views de um mesmo Controller.


# Configuração do Webpack com .NET MVC

Este projeto demonstra como integrar o Webpack ao .NET MVC para gerenciar arquivos JavaScript.

---

## Estrutura de Arquivos

- `./Components/Webpack.js`
- `./package.json`
- `./webpack.config.js`

---

## Configuração de Pastas

Para começar a utilizar o Webpack com seu projeto .NET MVC, siga os passos abaixo:

1. **Crie a estrutura básica de pastas:**
   - Na raiz do projeto, crie uma pasta chamada `Src`.
   - Dentro da pasta `Src`, crie uma subpasta chamada `js`. Esta pasta será usada para organizar os arquivos JavaScript.

2. **Organize os arquivos por controller:**
   - Cada subpasta dentro de `js` deve corresponder a um controller do projeto.

---

### Exemplo de Estrutura de Pastas

```plaintext
./Controllers/HomeController.cs
./Src/js/Home/Relogio.js
----------------------------------
./Controllers/UsuarioController.cs
./Src/js/Usuario/Cadastro.js
./Src/js/Usuario/Login.js
```

---

## Instalação e Configuração

### Passo 1: Instalar Dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

### Passo 2: Iniciar o Servidor do Webpack

Use o comando abaixo para iniciar o servidor de desenvolvimento do Webpack:

```bash
npm start
```

---

Com essa configuração, você poderá gerenciar facilmente seus arquivos JavaScript no projeto .NET MVC.
