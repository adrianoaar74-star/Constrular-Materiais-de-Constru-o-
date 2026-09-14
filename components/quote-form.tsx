"use client";

import { FormEvent, useState } from "react";
import { Check, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.get("name")}`,
      `Cidade/bairro: ${form.get("location")}`,
      `Tipo de projeto: ${form.get("project")}`,
      `Prazo: ${form.get("deadline")}`,
      `Forma de pagamento: ${form.get("payment")}`,
      "",
      "Lista ou descrição dos materiais:",
      String(form.get("materials")),
    ].join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8">
      <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-orange-600"><MessageCircle size={24} aria-hidden="true" /></span>
        <div><h2 className="text-2xl font-black text-slate-900">Monte sua solicitação</h2><p className="mt-1 leading-6 text-slate-600">Preencha os dados e enviaremos tudo organizado para o WhatsApp.</p></div>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="font-bold text-slate-700">Seu nome *<input className={inputClass} name="name" required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
        <label className="font-bold text-slate-700">Cidade ou bairro *<input className={inputClass} name="location" required autoComplete="address-level2" placeholder="Local da entrega ou retirada" /></label>
        <label className="font-bold text-slate-700">Tipo de projeto *<select className={inputClass} name="project" required defaultValue=""><option value="" disabled>Selecione</option><option>Construção</option><option>Reforma</option><option>Manutenção</option><option>Acabamento</option><option>Outro</option></select></label>
        <label className="font-bold text-slate-700">Quando precisa? *<select className={inputClass} name="deadline" required defaultValue=""><option value="" disabled>Selecione</option><option>O quanto antes</option><option>Nesta semana</option><option>Neste mês</option><option>Apenas pesquisando preços</option></select></label>
        <label className="font-bold text-slate-700 sm:col-span-2">Forma de pagamento preferida<select className={inputClass} name="payment" defaultValue="Ainda não decidi"><option>Pix</option><option>Cartão</option><option>Dinheiro</option><option>Ainda não decidi</option></select></label>
        <label className="font-bold text-slate-700 sm:col-span-2">Materiais ou descrição do pedido *<textarea className={`${inputClass} min-h-40 resize-y py-3`} name="materials" required placeholder="Ex.: 10 sacos de cimento, 5 sacos de argamassa e 20 m² de piso..." /></label>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><ShieldCheck className="mt-0.5 shrink-0 text-emerald-600" size={19} aria-hidden="true" /><p>Os dados não são armazenados pelo site. O formulário apenas organiza a mensagem antes de abrir o WhatsApp.</p></div>

      <button type="submit" className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 font-extrabold text-white transition hover:bg-orange-600"><Send size={19} aria-hidden="true" /> Revisar e enviar pelo WhatsApp</button>

      {submitted ? <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-bold text-emerald-700" role="status"><Check size={17} aria-hidden="true" /> Sua mensagem foi preparada. Conclua o envio no WhatsApp.</p> : null}
    </form>
  );
}
