
> [!NOTE]
> A configuração atual está focada no processamento de arquivos `.js`.

# Configuração do Webpack com .NET MVC

Este projeto demonstra como integrar o Webpack ao .NET MVC para gerenciar arquivos JavaScript, o objetivo é realizar a transpilação desses arquivos.

---

## Estrutura de Arquivos de Configuração

- `./Components/Webpack.js`
- `./package.json`
- `./webpack.config.js`

---

## Configuração de Pastas

Para começar a utilizar o Webpack com seu projeto .NET MVC, siga os passos abaixo:

1. **Crie a estrutura básica de pastas:**
   - Na raiz do projeto, crie uma pasta chamada `Src`.
   - Dentro da pasta `Src`, crie uma subpasta chamada `js`. Esta pasta será usada para organizar os arquivos JavaScript de cada View.

2. **Organize os arquivos por controller:**
   - Cada subpasta dentro de `js` deve corresponder a um controller do projeto.

---
### Exemplo de Estrutura de Pastas
1. **HomeController**
   - ./Controllers/HomeController.cs
   - ./Views/Home/Index.cshtml
   - ./Views/Home/Privacy.cshtml 
2. **Arquivos JavaScript**
   - ./Src/js/*.js (arquivos carregados em todas as páginas)
   - ./Src/js/Home(Nome da View)/*.js (arquivos carregados em todas as Views do controller Home)
   - ./Src/js/Home(Nome da View)/Index(Nome da Action)/*.js (arquivos carregados apenas na view da action Index)
   - ./Src/js/Home(Nome da View)/Privacy(Nome da Action)/*.js` (arquivos carregados apenas na view da action)
---
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
