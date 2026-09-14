import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Consulte materiais de construção, tintas, ferramentas, itens hidráulicos, elétricos e acabamentos.",
};

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteHeader />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Catálogo completo</p>
          <div className="mt-3 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div><h1 className="text-4xl font-black tracking-tight sm:text-5xl">Produtos para cada etapa da sua obra</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Use a busca, escolha uma categoria e encontre rapidamente o que precisa.</p></div>
            <a href="/orcamento" className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 font-extrabold hover:bg-orange-600"><MessageCircle size={19} aria-hidden="true" /> Enviar lista de materiais</a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><ProductCatalog initialCategory={params.categoria} /></div>
      <div className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:justify-between"><p>© 2026 Constrular Materiais. Site demonstrativo.</p><p>Produtos, preços e condições meramente ilustrativos.</p></div></div>
      <a href={siteConfig.whatsappUrl} aria-label="Falar com a Constrular pelo WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white transition hover:scale-105 hover:bg-emerald-600"><MessageCircle size={27} fill="currentColor" aria-hidden="true" /></a>
    </main>
  );
}
