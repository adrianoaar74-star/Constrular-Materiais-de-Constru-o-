# Constrular Materiais

Site-modelo de uma loja de materiais de construção, criado com Next.js, TypeScript e Tailwind CSS.

## Executar o projeto

```bash
npm install
npm run dev
```

Depois, abra `http://localhost:3000`.

## Onde personalizar

- `data/site.ts`: nome, slogan, telefone, WhatsApp, endereço e menu.
- `data/products.ts`: produtos, categorias e preços.
- `app/globals.css`: cores principais.
- `components/`: partes reutilizáveis do site.
- `app/page.tsx`: composição da página inicial.

## Próximas etapas

1. Criar o catálogo completo, busca e filtros.
2. Refinar os pedidos e as mensagens do WhatsApp.
3. Revisar animações, acessibilidade e desempenho.
4. Publicar pelo GitHub e Vercel.

## Etapas concluídas

- Estrutura técnica com Next.js, TypeScript e Tailwind CSS.
- Homepage responsiva com banner, categorias, ofertas, produtos, diferenciais,
  apresentação da loja, depoimentos, contato, rodapé e botão do WhatsApp.
- Catálogo com 16 produtos, busca por texto, filtros por categoria, ordenação e
  orçamento individual pelo WhatsApp.
- Página de orçamento que organiza os dados do pedido e prepara uma mensagem
  completa para envio pelo WhatsApp, além de telefone, e-mail e horários.
- Acabamento profissional com metadados para busca, arquivo de robôs,
  manifesto do site, imagem otimizada, animações discretas, acessibilidade para
  teclado e preferência por movimento reduzido.

## Trocar telefone e WhatsApp

Edite somente `data/site.ts`:

- `phone`: formato exibido no site, por exemplo `(19) 99999-9999`.
- `whatsapp`: país + DDD + número, somente algarismos, por exemplo
  `5519999999999`.

Os nomes, preços, contatos e endereços desta demonstração são ilustrativos.
