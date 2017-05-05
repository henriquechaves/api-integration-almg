## Pesquisa Direcionada de Contratos

Esta é uma aplicação de pesquisa construida com **React** e **Redux** que consome dados da API 	_http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/pesquisa_.  

O boilerplate escolhido foi o **create-react-app** \(veja documentação aqui: _https://github.com/facebookincubator/create-react-app_), pois ele facilita bastante o "get started" do desenvolvimento, sem necessidade de fazer toda a configuração do Webpack a partir do zero, alem dos motivos citados na propria documentação:  

- React, JSX, ES6, and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- A dev server that lints for common errors.
- Import CSS and image files directly from JavaScript.
- Autoprefixed CSS, so you don’t need -webkit or other prefixes.
- A build script to bundle JS, CSS, and images for production, with sourcemaps.  

O que tem dentro do create-react-app:  

- webpack with webpack-dev-server, html-webpack-plugin and style-loader
- Babel with ES6 and extensions used by Facebook (JSX, object spread, class properties)
- Autoprefixer
- ESLint
- Jest
- and others.  

Além do que foi dito acima também foram usados alguns módulos específicos como Axios\(para fazer requisições\), Underscore.js\(alguns helpers funcionais e produtivos\), Moment.js(manipulação de data) e para estilização as bibliotecas Bootstrap e React Bootstrap.  

- React
- Redux
- Bootstrap e React Bootstrap
- Axios
- Underscore.js
- Moment.js  

**Observações**  

* O retorno da API as vezes devolve um JSON formatado incorretamente, então foi usado uma Regexp para corrigir esses erros.  

**Instalação**  

```
  git clone https://github.com/henriquechaves/api-integration-almg.git  
  npm i  
  npm start  
```  

Ou para rodar em produção  

```
  git clone https://github.com/henriquechaves/api-integration-almg.git
  npm i  
  npm run build  
````  

E caso queira ter total controle sobre as configurações da aplicação (alterar configurações do webpack, etc...) basta rodar:  

```
  npm run eject  
```  

Mas lembre-se que uma vez que o projeto foi "ejetado" não tem mais volta, dúvidas? Consulte a documentação oficial do create-react-app.  

_That's all folks... Pull request me._