export const siteConfig = {
  name: "Constrular Materiais",
  slogan: "Tudo para construir, reformar e transformar.",
  // Para usar um número real, altere apenas os dois campos abaixo.
  phone: "(19) 0000-0000",
  whatsapp: "5519000000000",
  whatsappUrl:
    "https://wa.me/5519000000000?text=Olá!%20Gostaria%20de%20pedir%20um%20orçamento.",
  address: "Av. Principal, 123 — Centro",
  email: "contato@constrular.com.br",
  hours: {
    weekdays: "Segunda a sexta, 7h às 18h",
    saturday: "Sábado, 7h às 13h",
  },
  navigation: [
    { label: "Início", href: "/#inicio" },
    { label: "Produtos", href: "/produtos" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Ofertas", href: "/#ofertas" },
    { label: "Sobre nós", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
  ],
} as const;

export const categories = [
  "Construção",
  "Tintas",
  "Ferramentas",
  "Hidráulica",
  "Elétrica",
  "Pisos e revestimentos",
  "Portas e janelas",
  "Telhas e coberturas",
] as const;
