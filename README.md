# Cadastro e Listagem de Produtos

Este projeto é uma aplicação web simples para cadastro e listagem de produtos, desenvolvida utilizando HTML, CSS e JavaScript.

## Estrutura do Projeto

O projeto está organizado em cinco arquivos principais:

- `index.html`: Contém a estrutura HTML da aplicação principal.
- `cadastroelis.html`: Contém uma versão simplificada do código HTML, CSS e JavaScript para fins de teste.
- `styles.css`: Contém os estilos CSS para a formatação visual da aplicação.
- `script.js`: Contém a lógica JavaScript para o funcionamento da aplicação.
- `README.md`: Contém a documentação do projeto.

## Funcionalidades

### Cadastro de Produtos

- Formulário com os seguintes campos:
  - **Nome do produto:** Campo de texto.
  - **Descrição do produto:** Campo de texto.
  - **Valor do produto:** Campo numérico.
  - **Disponível para venda:** Campo de seleção com duas opções (sim/não).

### Listagem de Produtos

- Tabela para exibir os produtos cadastrados, com as seguintes colunas:
  - **Nome**
  - **Valor**
- Os produtos são ordenados pelo valor, do menor para o maior.
- Ao cadastrar um novo produto, a aplicação exibe automaticamente a listagem de produtos.
- Botão para cadastrar um novo produto a partir da tela de listagem.

## Como Funciona

### Estrutura HTML Principal (`index.html`)

O arquivo `index.html` define a estrutura básica da página principal, incluindo um formulário para cadastrar produtos e uma tabela para listar os produtos cadastrados. O formulário inclui campos para o nome, descrição, valor e disponibilidade do produto.

### Arquivo de Teste (`cadastroelis.html`)

O arquivo `cadastroelis.html` contém a mesma estrutura da aplicação principal, mas inclui o HTML, CSS e JavaScript diretamente no mesmo arquivo para facilitar testes rápidos e independentes do ambiente de desenvolvimento.

### Estilos CSS (`styles.css`)

O arquivo `styles.css` define os estilos visuais da aplicação. Ele estiliza o formulário e a tabela, garantindo uma apresentação visual agradável e uma experiência de usuário consistente.

### Lógica JavaScript (`script.js`)

O arquivo `script.js` contém a lógica para o funcionamento da aplicação. As principais funções incluem:

- **cadastrarProduto():** Coleta os dados do formulário, cria um objeto de produto e o adiciona a uma lista de produtos. Após adicionar um novo produto, a lista é ordenada pelo valor e a tabela é atualizada.
- **atualizarListagem():** Atualiza a tabela com os produtos cadastrados, ordenados pelo valor.
- **mostrarFormulario():** Exibe o formulário para cadastrar um novo produto.
- **mostrarListagem():** Exibe a tabela de listagem dos produtos cadastrados.

## Como Utilizar

1. **Abra o arquivo `index.html` em um navegador web.**
2. **Preencha os campos do formulário com as informações do produto que deseja cadastrar.**
3. **Clique no botão "Cadastrar" para adicionar o produto à lista.**
4. **A lista de produtos será exibida automaticamente, ordenada pelo valor do menor para o maior.**
5. **Para cadastrar um novo produto, clique no botão "Cadastrar Novo Produto" na tela de listagem.**

## Estrutura de Arquivos

```
/projeto
  ├── index.html
  ├── cadastroelis.html
  ├── styles.css
  ├── script.js
  └── README.md
```

## Descrição dos Arquivos

- **index.html:** Este arquivo contém a estrutura HTML da aplicação principal, incluindo o formulário para cadastrar produtos e a tabela para listar os produtos cadastrados.
- **cadastroelis.html:** Este arquivo contém uma versão simplificada da aplicação, com o HTML, CSS e JavaScript no mesmo arquivo, para facilitar testes rápidos.
- **styles.css:** Este arquivo contém os estilos CSS que formatam a aplicação, tornando-a visualmente agradável e fácil de usar.
- **script.js:** Este arquivo contém a lógica JavaScript que faz a aplicação funcionar, incluindo a lógica para cadastrar produtos, ordenar a lista de produtos e atualizar a tabela de listagem.
- **README.md:** Este arquivo contém a documentação do projeto, explicando sua estrutura, funcionalidades e como utilizá-lo.

Para mais informações e para acessar o projeto completo, visite o repositório no GitHub: [Cadastro e Listagem de Produtos](https://github.com/Adjcds/Cadastro-e-Listagem-de-Produtos).