import { ChevronDown, Clock3, MapPin, Menu, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="hidden bg-slate-900 text-sm text-slate-200 md:block">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between px-8">
          <span className="flex items-center gap-2"><MapPin size={14} aria-hidden="true" /> {siteConfig.address}</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock3 size={14} aria-hidden="true" /> {siteConfig.hours.weekdays}</span>
            <span className="flex items-center gap-2"><Phone size={14} aria-hidden="true" /> {siteConfig.phone}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="/#inicio" className="flex items-center gap-3" aria-label="Página inicial">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-xl bg-slate-900 text-lg font-black text-white">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-orange-500" />C
          </span>
          <span className="leading-none">
            <strong className="block text-lg tracking-tight text-slate-800">CONSTRULAR</strong>
            <span className="text-xs font-bold tracking-[0.2em] text-orange-600">MATERIAIS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex" aria-label="Menu principal">
          {siteConfig.navigation.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-orange-600">{item.label}</a>
          ))}
        </nav>

        <a href="/orcamento" className="hidden min-h-11 items-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-bold text-white transition hover:bg-orange-600 sm:flex">
          <MessageCircle size={18} aria-hidden="true" /> Pedir orçamento
        </a>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-slate-200" aria-label="Abrir menu">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl" aria-label="Menu para celular">
            {siteConfig.navigation.map((item) => (
              <a key={item.label} href={item.href} className="flex min-h-12 items-center justify-between rounded-xl px-4 font-semibold text-slate-700 hover:bg-slate-50">
                {item.label}<ChevronDown className="-rotate-90 text-slate-400" size={17} aria-hidden="true" />
              </a>
            ))}
            <a href="/orcamento" className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 font-bold text-white">
              <MessageCircle size={18} aria-hidden="true" /> Pedir orçamento
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
