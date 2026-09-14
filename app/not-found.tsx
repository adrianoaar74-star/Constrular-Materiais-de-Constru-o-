import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-5 text-white">
      <div className="max-w-lg text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-orange-500"><Search size={30} aria-hidden="true" /></span>
        <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-orange-400">Erro 404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Esta página não foi encontrada.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">O endereço pode ter mudado ou não existir. Volte para a loja e continue sua busca.</p>
        <a href="/" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 font-extrabold hover:bg-orange-600"><ArrowLeft size={19} aria-hidden="true" /> Voltar ao início</a>
      </div>
    </main>
  );
}
