let produtos = [];

function cadastrarProduto() {
  let nome = document.getElementById("nome").value.trim();
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const disponivel = document.getElementById("disponivel").value;

  if (!nome || !descricao || isNaN(valor)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  nome = formatarNome(nome);

  const produtoExistente = produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());

  if (produtoExistente) {
    if (valor < produtoExistente.valor) {
      produtoExistente.valorAnterior = produtoExistente.valor;
      produtoExistente.valor = valor;
    } else {
      produtoExistente.valor = valor;
      produtoExistente.valorAnterior = null;
    }
  } else {
    produtos.push({ nome, descricao, valor, disponivel, valorAnterior: null });
  }

  atualizarTabela();
  mostrarListagem();
  limparFormulario();
}

function formatarNome(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function atualizarTabela() {
  const tbody = document.querySelector("#product-table tbody");
  tbody.innerHTML = "";

  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = produto.nome;
    tr.appendChild(tdNome);

    const tdDescricao = document.createElement("td");
    tdDescricao.textContent = produto.descricao;
    tr.appendChild(tdDescricao);

    const tdValor = document.createElement("td");

    if (produto.disponivel === "não") {
      tdValor.textContent = "Indisponível";
      tdValor.style.color = "red";
    } else {
      if (produto.valorAnterior !== null) {
        tdValor.innerHTML = `<span style="text-decoration: line-through; color: red;">R$ ${produto.valorAnterior.toFixed(2)}</span> R$ ${produto.valor.toFixed(2)}`;
      } else {
        tdValor.textContent = `R$ ${produto.valor.toFixed(2)}`;
      }
    }
    tr.appendChild(tdValor);

    const tdAcoes = document.createElement("td");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => excluirProduto(index);
    tdAcoes.appendChild(btnExcluir);
    tr.appendChild(tdAcoes);

    tbody.appendChild(tr);
  });
}

function excluirProduto(index) {
  produtos.splice(index, 1); 
  atualizarTabela(); 
}

function mostrarFormulario() {
  document.getElementById("form-container").style.display = "block";
  document.getElementById("list-container").style.display = "none";
}

function mostrarListagem() {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("list-container").style.display = "block";
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("disponivel").value = "sim";
}
