# Sistema de Delivery para Restaurante

Um sistema que permite aos restaurantes divulgar seu cardápio online, receber pedidos e gerenciar entregas sem depender de aplicativos terceiros, aumentando o alcance e reduzindo custos operacionais.

## Principais funcionalidades
- **Cardápio com fotos** dos pratos.
- **Categorias filtráveis** para facilitar a busca.
- **Painel administrativo** para gerenciar pedidos e produtos.
- **Cadastro de usuários** com endereço e carrinho.
- **Pagamentos** integrados.

## Stack e arquitetura
- **frontend/** – Aplicação em React.js responsável pela vitrine do cardápio e fluxo de pedidos.
- **backend/** – API em Node.js/Express com MongoDB para persistência, Stripe para pagamentos e Toastify/Bitetoken para notificações e autenticação.
- **admin/** – Painel em React.js para controlar produtos, categorias e status dos pedidos.

## Instalação e execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigoarcanjo23/FoodDel.git && cd FoodDel
   ```
2. Instale as dependências em `frontend`, `backend` e `admin`:
   ```bash
   npm install
   ```
3. Inicie cada módulo:
   ```bash
   # backend
   cd backend && npm run server
   # frontend
   cd ../frontend && npm run dev
   # admin
   cd ../admin && npm run dev
   ```

## Contato/Autor
- LinkedIn: [Rodrigo Arcanjo](https://www.linkedin.com/in/rodrigo-arcanjo)
- GitHub: [rodrigoarcanjo23](https://github.com/rodrigoarcanjo23)

### Summary (English)
Food delivery platform for restaurants with a React.js interface, Node.js/Express API backed by MongoDB, and Stripe-powered payments. It helps venues publish menus, manage orders and serve customers directly.
