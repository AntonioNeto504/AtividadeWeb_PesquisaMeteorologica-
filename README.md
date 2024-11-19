# Busca de Clima

Este é um projeto de React para buscar e exibir informações sobre o clima de uma cidade utilizando a API OpenWeatherMap. Ele permite que o usuário digite o nome de uma cidade e visualize dados como temperatura, umidade, condição climática e velocidade do vento.

## Tecnologias Usadas

- React
- Axios (para fazer requisições HTTP)
- OpenWeatherMap API (para obter os dados meteorológicos)
- FontAwesome (para ícones)

## Funcionalidades

- **Busca de clima por cidade:** O usuário pode digitar o nome de uma cidade e visualizar o clima atual.
- **Informações exibidas:**
  - Temperatura
  - Condição climática (exemplo: ensolarado, nublado)
  - Umidade do ar
  - Velocidade do vento
- **Tratamento de erros:** Caso o nome da cidade esteja incorreto ou a requisição não consiga ser feita, uma mensagem de erro será exibida.
- **Design responsivo:** O layout se adapta para funcionar bem em dispositivos móveis e desktops.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/weather-search.git
   cd weather-search
   nmp start
