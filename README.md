# Cadastro e Listagem de Produtos

Este projeto é uma aplicação web simples para cadastro e listagem de produtos, desenvolvida utilizando HTML, CSS e JavaScript.

## Estrutura do Projeto

O projeto está organizado em três arquivos principais:

- `index.html`: Contém a estrutura HTML da aplicação.
- `styles.css`: Contém os estilos CSS para a formatação visual da aplicação.
- `script.js`: Contém a lógica JavaScript para o funcionamento da aplicação.

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

### Estrutura HTML (`index.html`)

O arquivo `index.html` define a estrutura básica da página, incluindo um formulário para cadastrar produtos e uma tabela para listar os produtos cadastrados. O formulário inclui campos para o nome, descrição, valor e disponibilidade do produto.

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
  ├── styles.css
  └── script.js
```

Com essa organização, o código está separado de forma clara entre estrutura, estilos e lógica, facilitando a manutenção e expansão futura da aplicação.
