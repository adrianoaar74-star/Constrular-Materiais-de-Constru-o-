import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ShoppingBag, Truck } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description: "Organize sua lista de materiais e envie um pedido de orçamento pelo WhatsApp.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SiteHeader />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Orçamento rápido</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Sua lista de materiais chega organizada à nossa equipe.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Informe o que precisa e abra uma conversa no WhatsApp com a mensagem pronta.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <QuoteForm />
        <aside className="space-y-6">
          <div className="rounded-3xl bg-slate-900 p-7 text-white sm:p-8"><ShoppingBag className="text-orange-400" size={34} aria-hidden="true" /><h2 className="mt-6 text-2xl font-black">Como funciona</h2><ol className="mt-6 space-y-5">{["Preencha seus dados e a lista de materiais.", "O site organiza tudo em uma mensagem.", "Você revisa e confirma o envio no WhatsApp."].map((item, index) => <li key={item} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-orange-500 font-black">{index + 1}</span><span className="pt-1 leading-6 text-slate-200">{item}</span></li>)}</ol><div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-300"><Truck className="shrink-0 text-orange-400" size={20} aria-hidden="true" /> Consulte disponibilidade e valor de entrega.</div></div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"><h2 className="text-xl font-black text-slate-900">Outros canais</h2><div className="mt-6 space-y-5">
            <a href={siteConfig.whatsappUrl} className="flex items-start gap-4 text-slate-700 hover:text-orange-600"><MessageCircle className="mt-0.5 shrink-0 text-emerald-600" size={21} /><span><strong className="block">WhatsApp</strong><span className="mt-1 block text-sm text-slate-500">Atendimento rápido</span></span></a>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="flex items-start gap-4 text-slate-700 hover:text-orange-600"><Phone className="mt-0.5 shrink-0 text-orange-600" size={21} /><span><strong className="block">{siteConfig.phone}</strong><span className="mt-1 block text-sm text-slate-500">Telefone da loja</span></span></a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 text-slate-700 hover:text-orange-600"><Mail className="mt-0.5 shrink-0 text-orange-600" size={21} /><span><strong className="block">{siteConfig.email}</strong><span className="mt-1 block text-sm text-slate-500">E-mail comercial</span></span></a>
            <div className="flex items-start gap-4 text-slate-700"><MapPin className="mt-0.5 shrink-0 text-orange-600" size={21} /><span><strong className="block">{siteConfig.address}</strong><span className="mt-1 block text-sm text-slate-500">Endereço demonstrativo</span></span></div>
            <div className="flex items-start gap-4 text-slate-700"><Clock3 className="mt-0.5 shrink-0 text-orange-600" size={21} /><span><strong className="block">Horário</strong><span className="mt-1 block text-sm leading-6 text-slate-500">{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}</span></span></div>
          </div></div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900"><strong className="block">Demonstração</strong>O número e os dados de contato ainda são ilustrativos. Troque-os antes de fazer um teste público.</div>
        </aside>
      </section>

      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:justify-between"><p>© 2026 Constrular Materiais. Site demonstrativo.</p><a href="/produtos" className="font-bold text-orange-600">Voltar ao catálogo</a></div></footer>
    </main>
  );
}
