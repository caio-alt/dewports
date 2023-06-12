// Função para fazer a pesquisa de produtos
function searchProducts(keyword) {
    fetch(`https://fakestoreapi.com/products?title=${keyword}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao realizar a pesquisa de produtos');
        }
      })
      .then(products => {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Limpar resultados anteriores
  
        // Exibir os resultados da pesquisa
        products.forEach(product => {
          const resultCard = createResultCard(product);
          resultsContainer.appendChild(resultCard);
        });
  
        if (products.length === 0) {
          resultsContainer.innerHTML = 'Nenhum produto encontrado';
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Função para criar um card de resultado da pesquisa
  function createResultCard(product) {
    const card = document.createElement('div');
    card.className = 'result-card';
  
    const imagem = document.createElement('img');
    imagem.src = product.image;
    card.appendChild(imagem);
  
    const titulo = document.createElement('h3');
    titulo.textContent = product.title;
    card.appendChild(titulo);
  
    const preco = document.createElement('p');
    preco.textContent = `Preço: $${product.price}`;
    card.appendChild(preco);
  
    return card;
  }
  
  // Event listener para o botão de pesquisa
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    const keyword = searchInput.value.trim();
  
    if (keyword !== '') {
      searchProducts(keyword);
    }
  });
  