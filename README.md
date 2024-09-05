# Sistema de Delivery para Restaurante

## Descrição
Este é um projeto fullstack desenvolvido como solução para um sistema de delivery para restaurantes. Utilizando **React.js** no frontend, **MongoDB** no banco de dados, e integrando com APIs como **Stripe**, **Toast**, e **Bitetoken**, a aplicação oferece todos os recursos necessários para gerenciar um site de delivery completo.

## Funcionalidades
Com esta aplicação, você pode:
- **Criar um cardápio** com fotos dos pratos e preços.
- **Elaborar categorias** e filtrar dinamicamente por tipos de pratos.
- **Painel de administrador**: adicionar, remover ou alterar produtos e categorias. Também permite visualizar o status dos pedidos e notificar o cliente sobre o andamento do pedido (em preparo ou pronto para entrega).
- **Cadastro de usuários**: permitindo registro com e-mail, endereço, e gerenciamento do carrinho de compras.
- **Sistema de pagamentos**, incluindo cálculo de taxa de entrega.

## Tecnologias Utilizadas
- **[React.js](https://github.com/facebook/react)**: para a construção da interface do usuário.
- **[MongoDB](https://www.mongodb.com/products/platform/atlas-database)**: banco de dados NoSQL para armazenar informações de produtos, pedidos e usuários.
- **[Stripe API](https://stripe.com/br/lp/payments/payment-processing?utm_campaign=AMER_BR_en_Google_Search_Brand_Payments_EXA_PHR-21471070313&utm_medium=cpc&utm_source=google&ad_content=705911242694&utm_term=stripe+payment+processing+api&utm_matchtype=e&utm_adposition=&utm_device=c&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfM7eIn5FejM7h3xsk9SUnBsjEsEzVgFU1CAPvu5hr37oeRgi1wC46RoCEvkQAvD_BwE)**: para processamento de pagamentos.
- **[Toastfy API](https://www.npmjs.com/package/react-toastify)**: integração para notificações e toasts.
- **[Bitetoken API](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api)**: para tokenização de dados de transações.

## Estrutura do Projeto
O projeto está dividido em três pacotes principais:
1. **Frontend**: Interface do usuário, gerenciando a visualização do cardápio e pedidos.
2. **Backend**: Gerenciamento de dados, comunicação com o banco de dados e APIs.
3. **Admin**: Painel administrativo para gerenciar produtos, categorias e status de pedidos.

## Instalação

### Requisitos:
- **Node.js** e **npm** instalados em sua máquina.

### Passo-a-passo:

1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
