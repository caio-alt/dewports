// Função para obter o ID do produto da URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  // Fazendo a solicitação para obter os detalhes do produto com base no ID
  const productId = getProductIdFromURL();
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Falha ao obter os detalhes do produto');
      }
    })
    .then(product => {
      const detalhesContainer = document.getElementById('detalhes-container');
  
      // Exibindo os detalhes do produto
      const imagem = document.createElement('img');
      imagem.src = product.image;
      detalhesContainer.appendChild(imagem);
  
      const titulo = document.createElement('h3');
      titulo.textContent = product.title;
      detalhesContainer.appendChild(titulo);
  
      const preco = document.createElement('p');
      preco.textContent = `Preço: $${product.price}`;
      detalhesContainer.appendChild(preco);
  
      const descricao = document.createElement('p');
      descricao.textContent = product.description;
      detalhesContainer.appendChild(descricao);
    })
    .catch(error => {
      console.error(error);
    });
  