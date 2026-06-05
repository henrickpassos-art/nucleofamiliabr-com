import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Flame,
  Gift,
  Lock,
  Palette,
  Printer,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import heroCover from "@/assets/CAPAA.png.asset.json";
import posterAsset from "@/assets/POSTER.png.asset.json";
import scheduleAsset from "@/assets/QUARTAS_SEMI_FINAL.png.asset.json";
import idolsAsset from "@/assets/1_CAPA.png.asset.json";
import messiAsset from "@/assets/1_MESSI.png.asset.json";
import mbappeAsset from "@/assets/MBAPEE.png.asset.json";
import neymarAsset from "@/assets/NEYMAR.png.asset.json";
import cr7Asset from "@/assets/cr7.png.asset.json";
import viniAsset from "@/assets/vini_jr.png.asset.json";
import tacaAsset from "@/assets/TACA.png.asset.json";
import brAsset from "@/assets/BR.jpg.asset.json";
import c5 from "@/assets/coloring-5.png";
import stadiumBg from "@/assets/stadium-bg.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/8wbiopb_912361";

const PREVIEW_ITEMS = [
  { src: heroCover.url, label: "CAPAA", alt: "Capa do Livro de Colorir Pintando a Copa do Mundo 2026" },
  { src: c3, label: "BRASIL", alt: "Página do Livro de Colorir com tema Brasil" },
  { src: neymarAsset.url, label: "NEYMAR", alt: "Página do Livro de Colorir do Neymar Jr" },
  { src: viniAsset.url, label: "VINI JR", alt: "Página do Livro de Colorir do Vinicius Jr" },
  { src: cr7Asset.url, label: "CR7", alt: "Página do Livro de Colorir do Cristiano Ronaldo" },
  { src: messiAsset.url, label: "1 MESSI", alt: "Página do Livro de Colorir do Messi" },
  { src: mbappeAsset.url, label: "MBAPEE", alt: "Página do Livro de Colorir do Mbappé" },
  { src: c5, label: "2 ESTÁDIO AZTECA", alt: "Página do Livro de Colorir com estádio famoso" },
  { src: c2, label: "12 TAÇA", alt: "Página do Livro de Colorir com a taça da Copa" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pintando a Copa do Mundo 2026 — Livro de Colorir Digital + 3 Bônus" },
      {
        name: "description",
        content:
          "Mais de 100 ilustrações para imprimir e colorir. Diversão garantida para crianças apaixonadas por futebol. Receba na hora pelo WhatsApp.",
      },
      { property: "og:title", content: "Pintando a Copa do Mundo 2026 + 3 Bônus" },
      {
        property: "og:description",
        content: "Livro digital com +100 desenhos da Copa para colorir. Acesso imediato por R$ 10,90.",
      },
      { property: "og:type", content: "website" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;
  return {
    h: String(hh).padStart(2, "0"),
    m: String(mm).padStart(2, "0"),
    s: String(ss).padStart(2, "0"),
  };
}

function CountdownBlock({ label }: { label?: string }) {
  const { h, m, s } = useCountdown(14 * 60);
  const Box = ({ v, lbl }: { v: string; lbl: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[58px] rounded-lg bg-brand-gold px-3 py-2 text-center font-display text-3xl text-brand-blue-dark shadow-card-brand sm:min-w-[68px] sm:text-4xl">
        {v}
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-white/80">{lbl}</span>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 text-white">
      {label && <span className="hidden text-sm font-medium sm:inline">{label}</span>}
      <Box v={h} lbl="hrs" />
      <span className="font-display text-3xl text-brand-gold">:</span>
      <Box v={m} lbl="min" />
      <span className="font-display text-3xl text-brand-gold">:</span>
      <Box v={s} lbl="seg" />
    </div>
  );
}

function WhatsAppLogo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none">
      <path
        fill="currentColor"
        d="M19.11 17.37c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.15-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.66-2.05-.17-.3-.02-.45.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.72.23 1.38.19 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
      <path
        fill="currentColor"
        d="M16 3C8.83 3 3 8.72 3 15.77c0 2.25.6 4.44 1.74 6.37L3 29l7.07-1.84a13.11 13.11 0 0 0 5.93 1.41c7.17 0 13-5.73 13-12.8C29 8.72 23.17 3 16 3Zm0 23.46c-1.87 0-3.7-.5-5.3-1.46l-.38-.22-4.2 1.09 1.12-4.04-.24-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.88 4.77-10.66 10.62-10.66 5.86 0 10.62 4.78 10.62 10.66 0 5.88-4.76 10.69-10.62 10.69Z"
      />
    </svg>
  );
}

function CTAButton({
  children,
  className = "",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "xl";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-green font-display uppercase tracking-wide text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.99] animate-pulse-cta",
        size === "xl" ? "px-8 py-5 text-xl sm:text-2xl" : "px-6 py-4 text-lg sm:text-xl",
        className,
      ].join(" ")}
    >
      <Zap className="h-5 w-5" />
      {children}
    </a>
  );
}

function BenefitRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-base">
      <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-green text-white">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 bg-gradient-green py-2 text-center text-xs font-semibold text-white sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3">
          <Flame className="h-4 w-4 flex-none animate-pulse" />
          <span>
            <span className="font-bold">PROMOÇÃO POR TEMPO LIMITADO:</span> Compre o Pintando a Copa do Mundo 2026 e
            ganhe <span className="underline">3 bônus exclusivos</span> gratuitamente.
          </span>
        </div>
      </div>

      <div className="bg-brand-blue-dark py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-3 sm:flex-row sm:gap-5">
          <p className="flex items-center gap-2 text-sm font-medium text-white/90 sm:text-base">
            <span aria-hidden>⏳</span> Oferta especial termina em:
          </p>
          <CountdownBlock />
        </div>
      </div>

      <Hero />
      <Included />
      <PreviewSection />
      <BenefitsSection />
      <OfferSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_10%,oklch(0.68_0.2_145/0.4),transparent_50%),radial-gradient(circle_at_80%_70%,oklch(0.84_0.16_88/0.3),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            <Sparkles className="h-3.5 w-3.5" /> Lançamento Copa 2026
          </span>
          <h1 className="mt-4 font-display text-4xl leading-[1] sm:text-6xl md:text-7xl">
            PINTANDO A <span className="text-brand-gold">COPA DO MUNDO</span> 2026
            <span className="block text-2xl text-white/90 sm:text-3xl md:text-4xl">+ 3 BÔNUS</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Diversão garantida para crianças apaixonadas por futebol. Mais de 100 ilustrações para imprimir,
            colorir e aproveitar momentos longe das telas.
          </p>

          <ul className="mt-6 grid gap-2 text-white/95 sm:grid-cols-2">
            {[
              "Acesso imediato",
              "Arquivo digital em PDF",
              "Mais de 100 ilustrações",
              "Imprima quantas vezes quiser",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
                <span>{b}</span>
              </li>
            ))}
            <li className="flex items-start gap-2 sm:col-span-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              <span className="inline-flex items-center gap-2">
                Receba rapidamente pelo <WhatsAppLogo className="h-4 w-4 text-brand-green-bright" /> WhatsApp
              </span>
            </li>
          </ul>

          <div className="mt-7">
            <CTAButton size="xl">Quero meu livro agora</CTAButton>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-brand-green-bright" /> Compra 100% segura · Entrega imediata
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="relative animate-float">
            <img
              src={heroCover.url}
              alt="Capa do Livro de Colorir Pintando a Copa do Mundo 2026"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 drop-shadow-2xl"
            />
            <div className="absolute -right-2 top-6 rotate-12 rounded-full bg-brand-gold px-4 py-2 text-center font-display text-sm leading-tight text-brand-blue-dark shadow-card-brand sm:-right-4 sm:px-5">
              <Star className="mx-auto mb-0.5 h-4 w-4 fill-brand-blue-dark" />
              MAIS DE
              <br />
              <span className="text-xl">100</span>
              <br />
              ILUSTRAÇÕES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Included() {
  const items = [
    "Jogadores famosos",
    "Bandeiras das seleções",
    "Taça da Copa",
    "Estádios",
    "Bolas de futebol",
    "Chuteiras",
    "Momentos marcantes do futebol",
  ];

  const bonuses = [
    {
      n: 1,
      title: "Pôster desenho de alta qualidade para emoldurar",
      desc: "Um pôster especial com arte em alta qualidade para imprimir, decorar e deixar o ambiente ainda mais no clima da Copa.",
      image: posterAsset.url,
      alt: "Pôster bônus com a seleção brasileira",
    },
    {
      n: 2,
      title: "Agenda para acompanhar e anotar os resultados dos jogos",
      desc: "Tabela prática para acompanhar as partidas, preencher resultados e viver cada fase da competição em família.",
      image: scheduleAsset.url,
      alt: "Agenda bônus com quartas, semifinais e final da Copa 2026",
    },
    {
      n: 3,
      title: "Livro exclusivo com os maiores ídolos da história do futebol",
      desc: "Um Livro de Colorir adicional com craques lendários para imprimir e colorir quantas vezes quiser.",
      image: idolsAsset.url,
      alt: "Livro bônus com os maiores ídolos da história do futebol",
    },
  ];

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Conteúdo da compra</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Tudo o que está incluído na sua compra</h2>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <article className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-card-brand sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-2xl" />
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
              Produto principal
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl">📘 Livro de Colorir Pintando a Copa do Mundo 2026</h3>
            <p className="mt-2 text-white/80">Contendo:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-white/95">
                  <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-4">
            {bonuses.map((b) => (
              <article
                key={b.n}
                className="group relative grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-card-brand transition-all hover:-translate-y-0.5 sm:grid-cols-[112px_1fr]"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <img
                    src={b.image}
                    alt={b.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-green">🎁 Bônus {b.n}</p>
                  <h4 className="mt-1 text-lg font-bold text-foreground">{b.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewSection() {
  const [current, setCurrent] = useState(0);
  const activeItem = PREVIEW_ITEMS[current];

  const goPrev = () => setCurrent((prev) => (prev === 0 ? PREVIEW_ITEMS.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === PREVIEW_ITEMS.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Preview</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Veja algumas páginas do Livro de Colorir</h2>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] border border-border bg-muted/60 p-4 shadow-card-brand sm:p-6">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                width={1024}
                height={1024}
                className="mx-auto aspect-[4/5] w-full object-contain bg-white"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent px-5 py-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">Prévia atual</p>
                <p className="mt-1 text-lg font-semibold">{activeItem.label}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-brand-blue shadow-card-brand transition-transform hover:scale-105"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <span>{String(current + 1).padStart(2, "0")}</span>
                <span>/</span>
                <span>{String(PREVIEW_ITEMS.length).padStart(2, "0")}</span>
              </div>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-brand-blue shadow-card-brand transition-transform hover:scale-105"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
              {PREVIEW_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={[
                    "overflow-hidden rounded-2xl border bg-card text-left shadow-card-brand transition-all",
                    current === index
                      ? "border-brand-green ring-2 ring-brand-green/30"
                      : "border-border hover:-translate-y-0.5 hover:border-brand-gold/60",
                  ].join(" ")}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <span className="block px-2 py-2 text-center text-[11px] font-semibold text-brand-blue sm:text-xs">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <ul className="mt-6 grid gap-3">
              {[
                "Capa colorida profissional",
                "Páginas dos craques mais amados do futebol",
                "Taça, estádios e temas da Copa",
                "Arquivo digital para baixar e imprimir",
                "3 bônus exclusivos já inclusos",
              ].map((b) => (
                <BenefitRow key={b}>{b}</BenefitRow>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton size="xl" className="w-full sm:w-auto">
                Quero meu livro agora
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const cards = [
    { icon: Palette, title: "Estimula a criatividade", desc: "Cores, traços e expressão livre em cada página." },
    { icon: Trophy, title: "Ídolos do futebol mundial", desc: "Craques lendários e temas da Copa em ilustrações exclusivas." },
    { icon: Printer, title: "Imprima quantas vezes quiser", desc: "Uso ilimitado para uso pessoal e familiar." },
    { icon: Smartphone, title: "Atividades longe das telas", desc: "Tempo de qualidade sem celular ou TV." },
    { icon: Users, title: "Momentos em família", desc: "Pinte junto com pais, avós, tios e irmãos." },
    { icon: Sparkles, title: "Clima da Copa do Mundo", desc: "Diversão temática para crianças que amam futebol." },
  ];
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Por que vale a pena</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Muito mais do que um Livro de Colorir</h2>
        </header>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card-brand transition-all hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-green text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-gradient-hero py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.68_0.2_145/0.5),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.84_0.16_88/0.35),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
          <Flame className="h-3.5 w-3.5" /> Oferta de lançamento
        </span>
        <h2 className="mt-4 text-4xl sm:text-6xl">Oferta Especial de Lançamento</h2>

        <div className="mt-8 inline-block rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="text-white/70 line-through">De R$ 49,90</p>
          <p className="mt-1 font-display text-5xl text-brand-gold sm:text-7xl">R$ 10,90</p>
          <p className="mt-1 text-sm text-white/70">Pagamento único · acesso vitalício</p>

          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-white/95">
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              Livro de Colorir Pintando a Copa do Mundo 2026
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              Bônus 1 — Pôster desenho de alta qualidade para emoldurar
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              Bônus 2 — Agenda para acompanhar e anotar os resultados dos jogos
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              Bônus 3 — Livro exclusivo com os maiores ídolos da história do futebol
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              Acesso imediato
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
              <span className="inline-flex items-center gap-2">
                Recebimento pelo <WhatsAppLogo className="h-4 w-4 text-brand-green-bright" /> WhatsApp
              </span>
            </li>
          </ul>

          <div className="mt-7">
            <CTAButton size="xl" className="w-full sm:w-auto">
              Garantir agora por R$ 10,90
            </CTAButton>
          </div>
          <p className="mt-3 text-xs text-white/70">Promoção válida enquanto o contador estiver ativo.</p>
          <div className="mt-5">
            <CountdownBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

type Testimonial = {
  name: string;
  role: string;
  time: string;
  photo: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aline Lopes",
    role: "mãe do Pedro (7 anos)",
    time: "09:12",
    photo: profileMom,
    text:
      "Gente, meu filho não largou! Veio rapidinho no WhatsApp e ele já passou a tarde toda colorindo o Neymar e a taça 😍⚽",
  },
  {
    name: "Maria Regina",
    role: "avó da Sofia (8 anos)",
    time: "14:48",
    photo: profileGrandma,
    text:
      "Comprei pra passar a tarde com a netinha. Os desenhos são lindos e tem MUITA coisa. Já imprimi várias páginas hahaha",
  },
  {
    name: "Ricardo Silva",
    role: "pai do Gabriel (6 anos)",
    time: "20:03",
    photo: profileDad,
    text:
      "Vale cada centavo. Entrega na hora e o bônus do pôster pra emoldurar foi o que mais ele gostou 🇧🇷",
  },
  {
    name: "Juliana Matos",
    role: "tia do Lucas (9 anos)",
    time: "11:27",
    photo: profileAunt,
    text:
      "Comprei pro meu sobrinho de presente. Qualidade muito boa dos desenhos e a agenda dos jogos veio junto certinho.",
  },
  {
    name: "Paula Lima",
    role: "mãe da Helena (7 anos)",
    time: "19:21",
    photo: profileMom,
    text:
      "Adorei porque tirou ela um pouco do tablet. As páginas das bandeiras ela tá adorando 💚💛",
  },
  {
    name: "Sérgio Fonseca",
    role: "avô do Miguel (10 anos)",
    time: "08:34",
    photo: profileGrandma,
    text:
      "Já estamos colorindo juntos os estádios. Variedade absurda e os 3 bônus chegaram tudo certo no WhatsApp.",
  },
  {
    name: "Bruno Carvalho",
    role: "pai da Laura (8 anos)",
    time: "16:55",
    photo: profileDad,
    text:
      "Chegou em minutos e a impressão ficou ótima. O Livro de Colorir surpreendeu bastante pelo preço.",
  },
  {
    name: "Camila Rocha",
    role: "mãe do Davi (5 anos)",
    time: "22:10",
    photo: profileAunt,
    text:
      "Meu filho ficou encantado com os jogadores e a capa. Vale muito a pena, principalmente com os bônus inclusos.",
  },
];

function WhatsappBubble({ t }: { t: Testimonial }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-4 shadow-card-brand">
      <header className="flex items-center gap-3 border-b border-border pb-3">
        <img
          src={t.photo}
          alt={`Foto de perfil de ${t.name}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-11 w-11 flex-none rounded-full object-cover blur-[3px] saturate-75"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-brand-blue">{t.name}</p>
          <p className="truncate text-xs text-muted-foreground">{t.role}</p>
        </div>
        <span className="text-[11px] text-muted-foreground">{t.time}</span>
      </header>
      <div className="relative mt-3 self-start rounded-2xl rounded-tl-sm bg-[oklch(0.95_0.05_145)] px-3 py-2 text-sm text-foreground">
        {t.text}
        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
          {t.time}
          <Check className="h-3 w-3 text-brand-green" strokeWidth={3} />
          <Check className="-ml-2 h-3 w-3 text-brand-green" strokeWidth={3} />
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            <WhatsAppLogo className="h-4 w-4 text-brand-green" /> Prova social
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Depoimentos recebidos no WhatsApp</h2>
        </header>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <WhatsappBubble key={`${t.name}-${t.time}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items: Array<{ q: string; a: React.ReactNode }> = [
    {
      q: "Como vou receber o livro?",
      a: (
        <span className="inline-flex flex-wrap items-center gap-2">
          Após a confirmação do pagamento, você receberá o arquivo digital diretamente no
          <WhatsAppLogo className="h-4 w-4 text-brand-green" /> WhatsApp.
        </span>
      ),
    },
    { q: "É um produto físico?", a: "Não. É um produto digital em PDF." },
    {
      q: "Posso imprimir mais de uma vez?",
      a: "Sim. Você pode imprimir quantas vezes desejar para uso pessoal.",
    },
    {
      q: "Serve para qual idade?",
      a: "Ideal para crianças que gostam de futebol e atividades de colorir.",
    },
    { q: "Os bônus estão inclusos?", a: "Sim. Todos os bônus são enviados junto com o produto principal." },
    { q: "Funciona no celular?", a: "Sim. O arquivo pode ser baixado pelo celular." },
    {
      q: "Preciso comprar materiais especiais?",
      a: "Não. Basta utilizar lápis de cor, giz de cera ou canetinhas.",
    },
  ];
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Perguntas Frequentes</h2>
        </header>
        <div className="mt-10 space-y-3">
          {items.map((it, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-border bg-card p-5 shadow-card-brand open:bg-muted/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                {it.q}
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-blue text-white transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const bg = useMemo(() => ({ backgroundImage: `url(${stadiumBg})` }), []);
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-dark py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={bg} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/90 via-brand-blue-dark/70 to-brand-blue-dark/95" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
          <Trophy className="h-3.5 w-3.5" /> Última chamada
        </span>
        <h2 className="mt-5 text-4xl leading-[1] sm:text-6xl md:text-7xl">
          ENTRE NO CLIMA DA <span className="text-brand-gold">COPA DO MUNDO</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Garanta agora seu Livro de Colorir com mais de 100 ilustrações e receba 3 bônus exclusivos.
        </p>

        <div className="mx-auto mt-8 inline-flex flex-col items-center gap-1 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur">
          <p className="text-sm text-white/70 line-through">DE R$ 49,90</p>
          <p className="font-display text-5xl text-brand-gold sm:text-6xl">POR R$ 10,90</p>
        </div>

        <div className="mt-8">
          <CTAButton size="xl">Quero baixar meu livro e os bônus</CTAButton>
        </div>
        <div className="mt-6">
          <CountdownBlock />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const seals = [
    { kind: "icon", icon: Lock, label: "Compra Segura" },
    { kind: "icon", icon: Zap, label: "Entrega Imediata" },
    { kind: "whatsapp", label: "Recebimento via WhatsApp" },
    { kind: "icon", icon: Gift, label: "Bônus Inclusos" },
  ] as const;

  return (
    <footer className="bg-brand-blue-dark py-12 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {seals.map((seal) => (
            <div key={seal.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              {seal.kind === "whatsapp" ? (
                <WhatsAppLogo className="h-5 w-5 flex-none text-brand-gold" />
              ) : (
                <seal.icon className="h-5 w-5 flex-none text-brand-gold" />
              )}
              <span className="text-sm font-semibold">{seal.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-white/70 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Pintando a Copa do Mundo 2026. Todos os direitos reservados.</p>
          <a
            href="mailto:exclusivaprimeday@gmail.com"
            className="inline-flex items-center gap-2 text-white hover:text-brand-gold"
          >
            <Download className="h-4 w-4" /> exclusivaprimeday@gmail.com
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-white/50">
          Este site não é afiliado à FIFA®. Imagens meramente ilustrativas. Produto digital — não físico.
        </p>
      </div>
    </footer>
  );
}
