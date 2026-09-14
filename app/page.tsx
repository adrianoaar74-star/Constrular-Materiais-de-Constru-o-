import Image from "next/image";
import {
  ArrowRight, Award, Blocks, Bolt, Check, ChevronRight, Clock3, Construction,
  AtSign, CreditCard, Drill, Droplets, Grid3X3, Layers3, Mail,
  MapPin, MessageCircle, PaintRoller, Phone, Quote, ShieldCheck, Star, Store,
  Tag, ThumbsUp, Truck, Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { categories, siteConfig } from "@/data/site";
import { products, type Product } from "@/data/products";

const categoryIcons = [Blocks, PaintRoller, Drill, Droplets, Bolt, Grid3X3, Store, Construction];
const productIcons = { construction: Blocks, paint: PaintRoller, tool: Drill, plumbing: Droplets, electric: Zap, flooring: Layers3 };

const testimonials = [
  { quote: "Ótimo atendimento e entrega muito rápida. Sempre encontro tudo para minhas obras.", name: "Carlos M.", role: "Cliente há 6 anos" },
  { quote: "Mandei a lista pelo WhatsApp e recebi o orçamento no mesmo dia. Facilitou muito minha reforma.", name: "Mariana S.", role: "Cliente Constrular" },
  { quote: "Preço justo e equipe que realmente entende do assunto. Recomendo para quem trabalha com obra.", name: "Roberto A.", role: "Profissional da construção" },
];

function money(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = productIcons[product.visual];
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${product.name}.`);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="absolute inset-5 rounded-full border border-white/80" />
        <Icon className="relative text-slate-500 transition duration-300 group-hover:scale-110 group-hover:text-orange-500" size={74} strokeWidth={1.25} aria-hidden="true" />
        {product.badge ? <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{product.badge}</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold text-orange-600">{product.category}</p>
        <h3 className="mt-2 min-h-12 text-lg font-extrabold leading-6 text-slate-900">{product.name}</h3>
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
          Pedir pelo WhatsApp <MessageCircle size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  return (
    <main id="inicio" className="min-h-screen overflow-hidden">
      <SiteHeader />

      <section className="relative isolate bg-slate-950 text-white">
        <Image src="/constrular-hero.webp" alt="Materiais e ferramentas organizados em uma loja moderna" fill priority sizes="100vw" quality={82} className="object-cover object-[67%_center] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/10" />
        <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-5 py-16 sm:min-h-[650px] sm:px-8 sm:py-20 lg:min-h-[700px]">
          <div className="animate-rise max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/15 px-4 py-2 text-sm font-bold text-orange-200 backdrop-blur"><Award size={16} aria-hidden="true" /> Há mais de 15 anos ao lado da sua obra</span>
            <h1 className="mt-7 text-4xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Tudo para construir, <span className="text-orange-400">reformar</span> e transformar.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">Materiais de qualidade, preços competitivos e atendimento especializado do alicerce ao acabamento.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/produtos" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 font-extrabold text-white transition hover:bg-orange-600">Ver produtos <ArrowRight size={19} aria-hidden="true" /></a>
              <a href="/orcamento" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"><MessageCircle size={19} aria-hidden="true" /> Pedir orçamento</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-300">
              {["Entrega na obra", "Compra segura", "Atendimento especializado"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="text-orange-400" size={17} aria-hidden="true" />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="categorias" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="Compre por categoria" title="Encontre o que sua obra precisa" /><a href="/produtos" className="hidden items-center gap-2 font-bold text-orange-600 sm:flex">Ver todos <ArrowRight size={18} aria-hidden="true" /></a></div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return <a key={category} href={`/produtos?categoria=${encodeURIComponent(category)}`} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-300 hover:bg-orange-50 sm:p-6"><span className="grid size-12 place-items-center rounded-xl bg-white text-orange-600 shadow-sm transition group-hover:bg-orange-500 group-hover:text-white"><Icon size={25} aria-hidden="true" /></span><strong className="mt-5 block leading-5 text-slate-900">{category}</strong><span className="mt-2 flex items-center gap-1 text-sm font-semibold text-slate-500 group-hover:text-orange-700">Ver produtos <ChevronRight size={15} aria-hidden="true" /></span></a>;
            })}
          </div>
        </div>
      </section>

      <section id="ofertas" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Ofertas da semana</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Preço baixo para a obra avançar</h2></div><span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-black"><Tag size={17} aria-hidden="true" /> Até 20% OFF</span></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <p className="mt-6 text-center text-sm text-slate-400">Produtos, condições e preços ilustrativos para demonstração deste site-modelo.</p>
        </div>
      </section>

      <section className="bg-orange-500 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="font-bold text-orange-100">Tem uma lista de materiais?</p><h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Envie pelo WhatsApp e receba seu orçamento sem sair de casa.</h2></div><a href="/orcamento" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 font-extrabold text-white transition hover:bg-slate-800"><MessageCircle size={20} aria-hidden="true" /> Enviar minha lista</a></div></section>

      <section id="produtos" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="Destaques" title="Escolhas para cada etapa da obra" text="Produtos essenciais selecionados para construir, reformar e finalizar seu projeto." /><a href="/produtos" className="hidden items-center gap-2 font-bold text-orange-600 lg:flex">Consultar catálogo <ArrowRight size={18} aria-hidden="true" /></a></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div></div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="Por que escolher a Constrular" title="Confiança do orçamento à entrega" /><div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, title: "Entrega rápida", text: "Receba seus materiais diretamente na obra." },
            { icon: CreditCard, title: "Pagamento facilitado", text: "Escolha a melhor condição para seu projeto." },
            { icon: MessageCircle, title: "Atendimento pelo WhatsApp", text: "Tire dúvidas e peça seu orçamento com facilidade." },
            { icon: ShieldCheck, title: "Qualidade garantida", text: "Produtos selecionados para todas as etapas." },
          ].map(({ icon: Icon, title, text }) => <article key={title} className="bg-slate-50 p-7"><span className="grid size-12 place-items-center rounded-xl bg-orange-100 text-orange-600"><Icon size={25} aria-hidden="true" /></span><h3 className="mt-5 text-xl font-black text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
        </div></div>
      </section>

      <section id="sobre" className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-12"><div className="absolute -right-20 -top-20 size-64 rounded-full bg-orange-500" /><div className="relative"><Store className="text-orange-300" size={42} aria-hidden="true" /><p className="mt-12 text-6xl font-black">15+</p><p className="mt-2 text-xl font-bold text-slate-200">anos ajudando projetos a sair do papel</p><div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-8"><div><strong className="text-3xl font-black text-orange-400">8</strong><span className="mt-1 block text-sm text-slate-300">categorias</span></div><div><strong className="text-3xl font-black text-orange-400">1 só</strong><span className="mt-1 block text-sm text-slate-300">lugar para sua obra</span></div></div></div></div>
          <div><SectionHeading eyebrow="Sobre a loja" title="Construímos relações com a mesma atenção que você constrói seus projetos" text="Há mais de 15 anos, a Constrular ajuda famílias e profissionais a transformar planos em realidade, oferecendo materiais de construção, ferramentas e acabamentos com qualidade e atendimento próximo." /><ul className="mt-7 space-y-4">{["Equipe preparada para orientar sua compra", "Variedade do básico ao acabamento", "Atendimento para clientes e profissionais"].map((item) => <li key={item} className="flex items-center gap-3 font-bold text-slate-700"><span className="grid size-7 place-items-center rounded-full bg-orange-500 text-white"><Check size={15} aria-hidden="true" /></span>{item}</li>)}</ul><a href="#contato" className="mt-8 inline-flex items-center gap-2 font-extrabold text-orange-600">Conheça a Constrular <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="Quem compra recomenda" title="Atendimento que faz diferença" /><div className="mt-10 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="rounded-2xl border border-slate-200 p-7"><Quote className="text-orange-500" size={30} aria-hidden="true" /><div className="mt-5 flex gap-1 text-amber-500">{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}</div><blockquote className="mt-5 text-lg leading-8 text-slate-700">“{item.quote}”</blockquote><figcaption className="mt-6 border-t border-slate-100 pt-5"><strong className="block text-slate-900">{item.name}</strong><span className="text-sm text-slate-500">{item.role}</span></figcaption></figure>)}</div></div>
      </section>

      <section id="contato" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Visite nossa loja</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Tudo o que você precisa, perto de você.</h2><p className="mt-4 text-lg leading-8 text-slate-300">Fale com nossa equipe, solicite uma cotação ou venha conhecer nossa linha de produtos.</p><div className="mt-8 space-y-5">{[
            { icon: MapPin, title: "Endereço", text: siteConfig.address },
            { icon: Phone, title: "Telefone", text: siteConfig.phone },
            { icon: Clock3, title: "Horários", text: `${siteConfig.hours.weekdays} • ${siteConfig.hours.saturday}` },
          ].map(({icon: Icon, title, text}) => <div key={title} className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-orange-400"><Icon size={21} aria-hidden="true" /></span><div><strong className="block">{title}</strong><span className="mt-1 block leading-6 text-slate-300">{text}</span></div></div>)}</div><a href={siteConfig.whatsappUrl} className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 font-extrabold hover:bg-orange-600"><MessageCircle size={19} aria-hidden="true" /> Falar no WhatsApp</a></div>
          <div className="relative grid min-h-[380px] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} /><div className="relative max-w-sm p-8 text-center"><span className="mx-auto grid size-16 place-items-center rounded-2xl bg-orange-500 shadow-xl shadow-orange-950/30"><MapPin size={30} aria-hidden="true" /></span><h3 className="mt-6 text-2xl font-black">Constrular Materiais</h3><p className="mt-2 leading-7 text-slate-300">{siteConfig.address}</p><a href="#inicio" className="mt-6 inline-flex items-center gap-2 font-bold text-orange-400">Ver localização <ChevronRight size={17} aria-hidden="true" /></a></div></div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-orange-500 text-lg font-black text-white">C</span><span><strong className="block text-lg leading-none text-white">CONSTRULAR</strong><span className="text-xs font-bold tracking-[0.2em] text-orange-400">MATERIAIS</span></span></div><p className="mt-5 max-w-xs leading-7">Qualidade, variedade e atendimento para construir seus melhores projetos.</p><div className="mt-5 flex gap-3"><a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-xl bg-white/10 hover:bg-orange-500"><AtSign size={19} /></a><a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-xl bg-white/10 hover:bg-orange-500"><ThumbsUp size={19} /></a></div></div>
          <div><h3 className="font-black text-white">Navegação</h3><ul className="mt-5 space-y-3">{siteConfig.navigation.slice(0,4).map((item) => <li key={item.label}><a className="hover:text-orange-400" href={item.href}>{item.label}</a></li>)}</ul></div>
          <div><h3 className="font-black text-white">Categorias</h3><ul className="mt-5 space-y-3">{categories.slice(0,4).map((item) => <li key={item}><a className="hover:text-orange-400" href="#produtos">{item}</a></li>)}</ul></div>
          <div><h3 className="font-black text-white">Contato</h3><ul className="mt-5 space-y-4"><li className="flex gap-3"><Phone className="mt-1 shrink-0 text-orange-400" size={17} />{siteConfig.phone}</li><li className="flex gap-3"><Mail className="mt-1 shrink-0 text-orange-400" size={17} />{siteConfig.email}</li><li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-orange-400" size={17} />{siteConfig.address}</li></ul></div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between"><p>© 2026 Constrular Materiais. Site demonstrativo.</p><p>Preços e informações meramente ilustrativos.</p></div></div>
      </footer>

      <a href={siteConfig.whatsappUrl} aria-label="Falar com a Constrular pelo WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white transition hover:scale-105 hover:bg-emerald-600"><MessageCircle size={27} fill="currentColor" aria-hidden="true" /></a>
    </main>
  );
}
