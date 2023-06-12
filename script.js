// Fazendo a solicitação para obter a lista de produtos
fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Falha ao obter os produtos da API');
    }
  })
  .then(products => {
    const produtosContainer = document.getElementById('produtos-container');
    const adicionalList = document.getElementById('adicional-list');

    // Exibindo os produtos na primeira seção
    products.forEach(product => {
      const produtoCard = createProdutoCard(product);
      produtosContainer.appendChild(produtoCard);
    });

    // Exibindo outras informações na segunda seção
    adicionalList.innerHTML = `
      <li class="adicional-list-item">Nome do responsável: Caio Henrique Martins Carvalho</li>
      <li class="adicional-list-item">Outras informações: 1463596, Engenharia de Software</li>
    `;
  })
  .catch(error => {
    console.error(error);
  });

// Função para criar um card de produto
function createProdutoCard(product) {
  const card = document.createElement('div');
  card.className = 'produto-card';

  const imagem = document.createElement('img');
  imagem.src = product.image;
  card.appendChild(imagem);

  const titulo = document.createElement('h3');
  titulo.textContent = product.title;
  card.appendChild(titulo);

  const preco = document.createElement('p');
  preco.textContent = `Preço: $${product.price}`;
  card.appendChild(preco);

  // Adicionando link para a página de detalhes do produto
  card.addEventListener('click', () => {
    window.location.href = `detalhes.html?id=${product.id}`;
  });

  return card;
}
