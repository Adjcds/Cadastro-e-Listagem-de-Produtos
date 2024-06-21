let produtos = [];

function cadastrarProduto() {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const disponivel = document.getElementById('disponivel').value;

  if(nome && descricao && !isNaN(valor) && (disponivel === 'sim' || disponivel === 'não')) {
    const produto = { nome, descricao, valor, disponivel };
    produtos.push(produto);
    produtos.sort((a, b) => a.valor - b.valor);
    atualizarListagem();
    mostrarListagem();
  } else {
    alert('Preencha todos os campos corretamente.');
  }
}

function atualizarListagem() {
  const tbody = document.querySelector('#product-table tbody');
  tbody.innerHTML = '';
  produtos.forEach(produto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>R$ ${produto.valor.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function mostrarFormulario() {
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('list-container').style.display = 'none';
}

function mostrarListagem() {
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('list-container').style.display = 'block';
}
