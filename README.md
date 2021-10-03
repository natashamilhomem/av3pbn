API para consultas de cidades brasileiras

Este projeto visa possibilitar a busca de cidades, regiões, estados e ufs. 
Por meio de parâmetros passados pela própria URL é possível filtrar os resultados por região, estados, etc. 

Configuração 

Para rodar a API em ambiente local deve-se baixar as bibliotecas Express e Axios.
Recomenda-se uso do NPM.
A requisição está escrita para acessar a porta 3000, podendo ser alterada no arquivo api/index.js.

Descrição das camadas

- index.js: configura o servidor para escutar a porta 3000.

- controllers/cityController.js: recebe a requisição, filtra erros e encaminha para o model.

- models/city.js: requisita dados da API do IBGE e filtra os dados conforme paraâmetros passados pela URL de requisição.

Como Utilizar

  Faça buscas por meio da rota /api/city do tipo GET para obter todas as cidades do Brasil com seu respectivo id, nome, estado, uf, e região.
  Para fazer alguma busca mais específica passe parâmetros como no exemplo:
  
  /api/city?uf=SP 
    => para buscar todas as cidades que possuem uf=SP.
    
