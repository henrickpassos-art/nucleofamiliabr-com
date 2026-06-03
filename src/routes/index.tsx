import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  Download,
  Flame,
  Gift,
  Lock,
  MessageCircle,
  Palette,
  Play,
  Printer,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import bookMockup from "@/assets/book-mockup.png";
import c1 from "@/assets/coloring-1.png";
import c2 from "@/assets/coloring-2.png";
import c3 from "@/assets/coloring-3.png";
import c4 from "@/assets/coloring-4.png";
import c5 from "@/assets/coloring-5.png";
import c6 from "@/assets/coloring-6.png";
import stadiumBg from "@/assets/stadium-bg.jpg";

const CHECKOUT_URL = "#oferta";

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

/* ------------------------------ COUNTDOWN ------------------------------ */
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

/* ------------------------------ PRIMITIVES ------------------------------ */
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

/* ------------------------------ PAGE ------------------------------ */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SCARCITY BAR 1 */}
      <div className="sticky top-0 z-50 bg-gradient-green py-2 text-center text-xs font-semibold text-white sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3">
          <Flame className="h-4 w-4 flex-none animate-pulse" />
          <span>
            <span className="font-bold">PROMOÇÃO POR TEMPO LIMITADO:</span> Compre o Pintando a Copa do Mundo 2026 e
            ganhe <span className="underline">3 bônus exclusivos</span> gratuitamente.
          </span>
        </div>
      </div>

      {/* SCARCITY BAR 2 — Countdown */}
      <div className="bg-brand-blue-dark py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-3 sm:flex-row sm:gap-5">
          <p className="flex items-center gap-2 text-sm font-medium text-white/90 sm:text-base">
            <span aria-hidden>⏳</span> Oferta especial termina em:
          </p>
          <CountdownBlock />
        </div>
      </div>

      {/* HERO */}
      <Hero />

      {/* O QUE VOCÊ RECEBERÁ */}
      <Included />

      {/* VIDEO */}
      <VideoSection />

      {/* GALERIA */}
      <GallerySection />

      {/* BENEFÍCIOS */}
      <BenefitsSection />

      {/* OFERTA */}
      <OfferSection />

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA FINAL */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ------------------------------ SECTIONS ------------------------------ */

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
            <span className="block text-2xl sm:text-3xl md:text-4xl text-white/90">+ 3 BÔNUS</span>
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
              "Receba rapidamente pelo WhatsApp",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <CTAButton size="xl">Quero meu livro agora</CTAButton>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-brand-green-bright" /> Compra 100% segura · Entrega imediata
            </p>
          </div>
        </div>

        {/* Book mockup */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="relative animate-float">
            <img
              src={bookMockup}
              alt="Mockup do livro Pintando a Copa do Mundo 2026"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-sm drop-shadow-2xl"
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
      title: "Pôster da Seleção Brasileira",
      desc: "Imagem em alta qualidade pronta para imprimir e colocar no quarto.",
    },
    {
      n: 2,
      title: "Agenda completa dos jogos",
      desc: "Acompanhe toda a Copa do Mundo 2026 com data, horário e fase.",
    },
    {
      n: 3,
      title: "Livro especial para colorir",
      desc: "Os maiores jogadores da história do Brasil e do futebol mundial.",
    },
  ];

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Conteúdo da compra</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Tudo o que está incluído na sua compra</h2>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Main */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-card-brand sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-2xl" />
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
              Produto principal
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl">
              📘 Livro Pintando a Copa do Mundo 2026
            </h3>
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

          {/* Bonuses */}
          <div className="flex flex-col gap-4">
            {bonuses.map((b) => (
              <article
                key={b.n}
                className="group relative flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card-brand transition-all hover:-translate-y-0.5"
              >
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-gold text-brand-blue-dark">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-green">
                    🎁 Bônus {b.n}
                  </p>
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

function VideoSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Preview</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Veja o livro por dentro</h2>
        </header>

        <div className="relative mx-auto mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-gradient-hero shadow-card-brand">
          <img
            src={bookMockup}
            alt="Pré-visualização do livro"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-contain opacity-90"
          />
          <div className="absolute inset-0 bg-brand-blue-dark/40" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-gold text-brand-blue-dark shadow-glow transition-transform hover:scale-110 sm:h-24 sm:w-24"
            aria-label="Reproduzir vídeo"
          >
            <Play className="ml-1 h-8 w-8 fill-current sm:h-10 sm:w-10" />
          </button>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const items = [
    { src: c1, label: "Neymar" },
    { src: c4, label: "Messi" },
    { src: c1, label: "Cristiano Ronaldo" },
    { src: c4, label: "Mbappé" },
    { src: c3, label: "Bandeira do Brasil" },
    { src: c2, label: "Taça da Copa" },
    { src: c5, label: "Estádios" },
    { src: c6, label: "Chuteiras" },
  ];
  const benefits = [
    "Capa colorida profissional",
    "Mais de 100 páginas para colorir",
    "Arquivo digital para baixar",
    "Impressão ilimitada",
    "3 bônus exclusivos",
  ];
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Conteúdo interno</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">O que você encontrará nas páginas</h2>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it, idx) => (
            <figure
              key={idx}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card-brand transition-transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={it.src}
                  alt={`Página para colorir: ${it.label}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-border bg-card px-3 py-2 text-center text-sm font-semibold text-brand-blue">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <BenefitRow key={b}>{b}</BenefitRow>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <CTAButton size="xl">Quero meu livro agora</CTAButton>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const cards = [
    { icon: Palette, title: "Estimula a criatividade", desc: "Cores, traços e expressão livre em cada página." },
    { icon: Trophy, title: "Os maiores jogadores das seleções", desc: "Ídolos do futebol mundial em ilustrações exclusivas." },
    { icon: Printer, title: "Imprima quantas vezes quiser", desc: "Uso ilimitado para uso pessoal e familiar." },
    { icon: Smartphone, title: "Atividades longe das telas", desc: "Tempo de qualidade sem celular ou TV." },
    { icon: Users, title: "Momentos em família", desc: "Pinte junto com pais, avós, tios e irmãos." },
    { icon: Sparkles, title: "Clima da Copa do Mundo", desc: "Aproxima as crianças do evento mais amado do esporte." },
  ];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Por que vale a pena</p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Muito mais do que um livro de colorir</h2>
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
            {[
              "Livro Pintando a Copa do Mundo 2026",
              "Bônus 1 — Pôster da Seleção",
              "Bônus 2 — Agenda dos jogos",
              "Bônus 3 — Maiores jogadores",
              "Acesso imediato",
              "Recebimento pelo WhatsApp",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 flex-none text-brand-green-bright" strokeWidth={3} />
                {b}
              </li>
            ))}
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

/* --------- Testimonials --------- */
type Testimonial = {
  name: string;
  role: string;
  time: string;
  initials: string;
  hue: number;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aline Lopes",
    role: "mãe do Pedro (7 anos)",
    time: "09:12",
    initials: "AL",
    hue: 12,
    text:
      "Gente, meu filho não largou! Veio rapidinho no whats e ele já passou a tarde toda colorindo o Neymar e a taça 😍⚽",
  },
  {
    name: "Maria Regina",
    role: "avó da Sofia (8 anos)",
    time: "14:48",
    initials: "MR",
    hue: 200,
    text:
      "Comprei pra passar a tarde com a netinha. Os desenhos são lindos e tem MUITA coisa. Já imprimi várias páginas hahaha",
  },
  {
    name: "Ricardo Silva",
    role: "pai do Gabriel (6 anos)",
    time: "20:03",
    initials: "RS",
    hue: 145,
    text:
      "Vale cada centavo. Entrega na hora e o bônus do pôster da seleção foi o que mais ele gostou 🇧🇷",
  },
  {
    name: "André Scanagatto",
    role: "tio do Lucas (9 anos)",
    time: "11:27",
    initials: "AS",
    hue: 50,
    text:
      "Comprei pro sobrinho de presente. Top demais, qualidade muito boa dos desenhos e a agenda dos jogos foi um plus.",
  },
  {
    name: "Juliana Silva",
    role: "mãe da Ana (5 anos)",
    time: "16:55",
    initials: "JS",
    hue: 320,
    text: "Ela ama futebol e ficou animada de mais. Recomendo demaaais! Recebi rapidinho 🙌",
  },
  {
    name: "Sérgio Fonseca L.",
    role: "avô do Miguel (10 anos)",
    time: "08:34",
    initials: "SF",
    hue: 260,
    text:
      "Já estamos colorindo juntos os estádios. Variedade absurda e os 3 bônus chegaram tudo certo no WhatsApp.",
  },
  {
    name: "Paula Lima",
    role: "mãe da Helena (7 anos)",
    time: "19:21",
    initials: "PL",
    hue: 80,
    text:
      "Adorei pq tirou ela um pouco do tablet. As páginas das bandeiras ela tá adorando 💚💛",
  },
  {
    name: "Márcia Scalabrin",
    role: "tia da Laura (8 anos)",
    time: "22:10",
    initials: "MS",
    hue: 0,
    text:
      "Chegou em 2 minutos no zap! A Laura já tá pedindo pra imprimir mais. Vale muito por esse preço.",
  },
];

function WhatsappBubble({ t }: { t: Testimonial }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-4 shadow-card-brand">
      <header className="flex items-center gap-3 border-b border-border pb-3">
        <div
          className="grid h-10 w-10 flex-none place-items-center rounded-full text-sm font-bold text-white blur-[1.5px]"
          style={{ background: `oklch(0.6 0.15 ${t.hue})` }}
          aria-hidden
        >
          {t.initials}
        </div>
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
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            <MessageCircle className="h-4 w-4" /> Prova social
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl">Quem comprou aprovou</h2>
        </header>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <WhatsappBubble key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Como vou receber o livro?",
      a: "Após a confirmação do pagamento, você receberá o arquivo digital diretamente no WhatsApp.",
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
    <section className="bg-background py-16 sm:py-24">
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
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-base font-semibold text-foreground">
                {it.q}
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-blue text-white transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
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
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={bg}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/90 via-brand-blue-dark/70 to-brand-blue-dark/95" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue-dark">
          <Trophy className="h-3.5 w-3.5" /> Última chamada
        </span>
        <h2 className="mt-5 text-4xl leading-[1] sm:text-6xl md:text-7xl">
          ENTRE NO CLIMA DA <span className="text-brand-gold">COPA DO MUNDO</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Garanta agora seu livro com mais de 100 ilustrações e receba 3 bônus exclusivos.
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
    { icon: Lock, label: "Compra Segura" },
    { icon: Zap, label: "Entrega Imediata" },
    { icon: MessageCircle, label: "Via WhatsApp" },
    { icon: Gift, label: "Bônus Inclusos" },
  ];
  return (
    <footer className="bg-brand-blue-dark py-12 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {seals.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <Icon className="h-5 w-5 flex-none text-brand-gold" />
              <span className="text-sm font-semibold">{label}</span>
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
