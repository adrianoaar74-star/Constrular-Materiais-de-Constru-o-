"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpDown, Blocks, Drill, Droplets, Layers3, MessageCircle, PackageSearch,
  PaintRoller, Search, SlidersHorizontal, Star, X, Zap,
} from "lucide-react";
import { categories, siteConfig } from "@/data/site";
import { products, type Product } from "@/data/products";

type SortOption = "featured" | "lowest" | "highest" | "name";

const productIcons = {
  construction: Blocks,
  paint: PaintRoller,
  tool: Drill,
  plumbing: Droplets,
  electric: Zap,
  flooring: Layers3,
};

function money(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function CatalogCard({ product }: { product: Product }) {
  const Icon = productIcons[product.visual];
  const message = encodeURIComponent(`Olá! Gostaria de pedir um orçamento para: ${product.name}.`);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="absolute inset-5 rounded-full border border-white/80" />
        <Icon className="relative text-slate-500 transition duration-300 group-hover:scale-110 group-hover:text-orange-500" size={74} strokeWidth={1.25} aria-hidden="true" />
        {product.badge ? <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{product.badge}</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold text-orange-600">{product.category}</p>
        <h2 className="mt-2 min-h-12 text-lg font-extrabold leading-6 text-slate-900">{product.name}</h2>
        <div className="mt-3 flex items-center gap-1 text-amber-500" aria-label="Avaliação: cinco estrelas">
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" aria-hidden="true" />)}
          <span className="ml-1 text-xs font-semibold text-slate-400">(18)</span>
        </div>
        <div className="mt-5">
          {product.oldPrice ? <p className="text-sm text-slate-400 line-through">{money(product.oldPrice)}</p> : <div className="h-5" />}
          <p className="text-2xl font-black text-slate-900">{money(product.price)}</p>
          <p className="mt-1 text-sm font-bold text-emerald-700">{product.pixPrice ? `${money(product.pixPrice)} no Pix` : "Consulte condições"}</p>
        </div>
        <a href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`} className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 text-sm font-extrabold text-slate-800 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white">
          Pedir orçamento <MessageCircle size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function ProductCatalog({ initialCategory = "Todos" }: { initialCategory?: string }) {
  const validInitial = categories.includes(initialCategory as (typeof categories)[number]) ? initialCategory : "Todos";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(validInitial);
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    const result = products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const matchesQuery = !normalizedQuery || normalize(`${product.name} ${product.category}`).includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
    return [...result].sort((a, b) => {
      if (sort === "lowest") return a.price - b.price;
      if (sort === "highest") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name, "pt-BR");
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.id - b.id;
    });
  }, [category, query, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("Todos");
    setSort("featured");
  };

  return (
    <section aria-label="Catálogo de produtos" className="py-12 sm:py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <span className="sr-only">Buscar produtos</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={21} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Busque por cimento, tinta, ferramenta..." className="min-h-13 w-full rounded-xl border border-slate-300 bg-slate-50 pl-12 pr-11 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100" />
            {query ? <button type="button" onClick={() => setQuery("")} aria-label="Limpar busca" className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-700"><X size={18} aria-hidden="true" /></button> : null}
          </label>
          <label className="flex min-h-13 items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4">
            <ArrowUpDown className="text-slate-400" size={19} aria-hidden="true" />
            <span className="sr-only">Ordenar produtos</span>
            <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="min-h-11 min-w-48 bg-transparent font-bold text-slate-700 outline-none">
              <option value="featured">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
              <option value="name">Ordem alfabética</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
          <SlidersHorizontal className="shrink-0 text-orange-600" size={20} aria-hidden="true" />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Todos", ...categories].map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-10 shrink-0 rounded-full px-4 text-sm font-extrabold transition ${category === item ? "bg-slate-900 text-white" : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-orange-300 hover:text-orange-700"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-slate-700"><span className="text-2xl font-black text-slate-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}</p>
        {(query || category !== "Todos" || sort !== "featured") ? <button type="button" onClick={clearFilters} className="inline-flex w-fit items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700"><X size={16} aria-hidden="true" /> Limpar filtros</button> : null}
      </div>

      {filteredProducts.length ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filteredProducts.map((product) => <CatalogCard key={product.id} product={product} />)}</div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
          <PackageSearch className="mx-auto text-slate-300" size={54} aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-black text-slate-900">Nenhum produto encontrado</h2>
          <p className="mx-auto mt-2 max-w-md leading-7 text-slate-600">Tente outro termo ou remova os filtros para visualizar o catálogo completo.</p>
          <button type="button" onClick={clearFilters} className="mt-6 min-h-11 rounded-xl bg-orange-500 px-5 font-extrabold text-white hover:bg-orange-600">Ver todos os produtos</button>
        </div>
      )}
    </section>
  );
}
