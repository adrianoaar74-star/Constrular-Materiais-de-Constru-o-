export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  pixPrice?: number;
  featured?: boolean;
  badge?: string;
  visual: "construction" | "paint" | "tool" | "plumbing" | "electric" | "flooring";
};

export const products: Product[] = [
  { id: 1, name: "Cimento CP II 50 kg", category: "Construção", oldPrice: 42.9, price: 39.9, pixPrice: 37.9, featured: true, badge: "Oferta", visual: "construction" },
  { id: 2, name: "Argamassa AC-II 20 kg", category: "Construção", price: 24.9, pixPrice: 23.65, featured: true, visual: "construction" },
  { id: 3, name: "Tinta Acrílica Premium 18 L", category: "Tintas", oldPrice: 319.9, price: 289.9, pixPrice: 275.4, featured: true, badge: "-9%", visual: "paint" },
  { id: 4, name: "Furadeira de Impacto 650 W", category: "Ferramentas", oldPrice: 349.9, price: 299.9, pixPrice: 284.9, featured: true, badge: "Mais vendido", visual: "tool" },
  { id: 5, name: "Torneira Gourmet Monocomando", category: "Hidráulica", price: 189.9, pixPrice: 180.4, visual: "plumbing" },
  { id: 6, name: "Cabo Flexível 2,5 mm — 100 m", category: "Elétrica", price: 179.9, pixPrice: 170.9, visual: "electric" },
  { id: 7, name: "Porcelanato Acetinado 84 × 84 cm", category: "Pisos e revestimentos", oldPrice: 89.9, price: 74.9, featured: true, badge: "m²", visual: "flooring" },
  { id: 8, name: "Kit de Ferramentas 110 peças", category: "Ferramentas", oldPrice: 499.9, price: 429.9, pixPrice: 408.4, featured: true, badge: "Oferta", visual: "tool" },
  { id: 9, name: "Bloco de Concreto 14 × 19 × 39 cm", category: "Construção", price: 7.9, pixPrice: 7.5, visual: "construction" },
  { id: 10, name: "Massa Corrida PVA 25 kg", category: "Tintas", price: 78.9, pixPrice: 74.95, visual: "paint" },
  { id: 11, name: "Jogo de Chaves Combinadas", category: "Ferramentas", price: 119.9, pixPrice: 113.9, visual: "tool" },
  { id: 12, name: "Caixa-d'água 1.000 litros", category: "Hidráulica", oldPrice: 579.9, price: 529.9, pixPrice: 503.4, badge: "Oferta", visual: "plumbing" },
  { id: 13, name: "Disjuntor Bipolar 50 A", category: "Elétrica", price: 54.9, pixPrice: 52.15, visual: "electric" },
  { id: 14, name: "Revestimento Cerâmico 32 × 60 cm", category: "Pisos e revestimentos", price: 49.9, badge: "m²", visual: "flooring" },
  { id: 15, name: "Porta de Madeira Lisa 80 cm", category: "Portas e janelas", price: 249.9, pixPrice: 237.4, visual: "construction" },
  { id: 16, name: "Telha de Fibrocimento 2,44 × 1,10 m", category: "Telhas e coberturas", price: 94.9, pixPrice: 90.15, visual: "construction" },
];
