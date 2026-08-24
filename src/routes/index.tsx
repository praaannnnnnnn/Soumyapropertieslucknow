import { createFileRoute } from "@tanstack/react-router";

import commercialCorner from "@/assets/commercial-corner.jpg";
import plotUtrathiya from "@/assets/plot-utrathiya.jpg";
import rowHouse from "@/assets/row-house.jpg";
import compactHouse from "@/assets/compact-house.jpg";
import logoAsset from "@/assets/soumya-logo.png.asset.json";

const PHONE = "8858035504";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saumya Properties | Plots & Homes in Lucknow from ₹600/sq.ft" },
      {
        name: "description",
        content:
          "Saumya Properties sells land and homes in Lucknow at the best rates. Plots near IT City, Utrathiya, Shivdhara and row houses near Medanta. First 100 customers get the lowest price. Call 8858035504.",
      },
      { property: "og:title", content: "Saumya Properties | Lucknow Land & Homes" },
      {
        property: "og:description",
        content:
          "Commercial corners, plots and houses across Lucknow starting at ₹600/sq.ft. First 100 customers get our lowest launch rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marqueeText =
  "Special Launch Offer: First 100 Customers only • Lowest rates in Lucknow • Starting ₹600/sq.ft • Call 8858035504";

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24 font-sans text-foreground">
      <div className="overflow-hidden border-b border-black/5 bg-accent py-2 text-accent-foreground">
        <div className="marquee-track text-[10px] font-bold tracking-[0.2em] whitespace-nowrap uppercase">
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-end justify-between px-6 py-8">
        <img
          src={logoAsset.url}
          alt="Soumya Properties — lands and readymade homes, Lucknow, India"
          width={1024}
          height={559}
          className="h-16 w-auto md:h-20"
        />

        <a
          href={`tel:${PHONE}`}
          className="hidden border-b border-foreground/20 pb-1 font-mono text-sm transition-colors hover:border-primary md:block"
        >
          +91 {PHONE}
        </a>
      </nav>

      <header className="mx-auto mt-12 mb-24 max-w-7xl px-6">
        <div className="animate-slide-up max-w-4xl">
          <h1 className="font-display mb-8 text-6xl leading-[0.9] font-bold text-balance md:text-8xl">
            Secure your <span className="text-primary">legacy</span> in the City of Nawabs.
          </h1>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <p className="max-w-md text-lg leading-relaxed text-pretty">
              Premium commercial corners and residential plots at Lucknow's most competitive
              rates. From IT City to Medanta, we own the ground you build your future on.
            </p>
            <div className="rounded-sm bg-primary p-6 text-primary-foreground">
              <span className="mb-2 block font-mono text-xs tracking-tighter uppercase">
                Base Rate Starting
              </span>
              <span className="font-display text-4xl font-bold">
                ₹600<span className="text-lg italic opacity-80">/sq.ft</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-px border border-foreground/10 bg-foreground/10 px-6 md:grid-cols-2 lg:grid-cols-4">
        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <img
            src={commercialCorner}
            alt="Corner commercial plot near IT City on Nagram Road, Lucknow"
            width={800}
            height={600}
            loading="lazy"
            className="mb-6 aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-primary/10 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-primary">
              Commercial Corner
            </span>
            <span className="font-mono text-xs italic">40 x 60 ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">IT City Nagram Road</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Sewai Market, prime visibility for retail or office complex.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <img
            src={plotUtrathiya}
            alt="Open 5000 sq ft plot with three-side road access near Utrathiya railway station"
            width={800}
            height={600}
            loading="lazy"
            className="mb-6 aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-accent/15 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-accent">
              3-Side Road Plot
            </span>
            <span className="font-mono text-xs italic">5000 sq ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">Near Utrathiya Station</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Sewai. Excellent connectivity for a large residence or investment.
          </p>
          <p className="font-mono text-lg font-bold">
            ₹600<span className="text-xs">/sq.ft onwards</span>
          </p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <img
            src={rowHouse}
            alt="Row house exterior near Medanta Hospital, Hariharpur, Lucknow"
            width={800}
            height={600}
            loading="lazy"
            className="mb-6 aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-foreground/10 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase">
              Row House
            </span>
            <span className="font-mono text-xs italic">Hariharpur</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">Medanta Hospital Zone</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Row houses in Hariharpur, walking distance from the medical corridor.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <img
            src={compactHouse}
            alt="Compact 500 sq ft house available in Lucknow"
            width={800}
            height={600}
            loading="lazy"
            className="mb-6 aspect-[4/3] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-secondary px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-secondary-foreground">
              Starter Home
            </span>
            <span className="font-mono text-xs italic">500 sq ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">Compact Residency</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Ready house for small families in a growing Lucknow corridor.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-secondary px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-secondary-foreground">
              Residential
            </span>
            <span className="font-mono text-xs italic">600 sq ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">House Available</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Efficient 600 sq ft layout, close to the upcoming IT corridor.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-secondary px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-secondary-foreground">
              Family Home
            </span>
            <span className="font-mono text-xs italic">900 sq ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">House Available</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Spacious 900 sq ft house for a full family, ready to occupy.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group bg-background p-6 transition-colors hover:bg-secondary">
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-secondary px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-secondary-foreground">
              Premium Home
            </span>
            <span className="font-mono text-xs italic">1000 sq ft</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">House Available</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Our largest configuration with generous floor plans.
          </p>
          <p className="font-mono text-lg font-bold">Best rate on call</p>
        </article>

        <article className="group border-t bg-background p-6 transition-colors hover:bg-secondary md:border-t-0">
          <div className="mb-2 flex items-start justify-between">
            <span className="bg-primary/10 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase text-primary">
              Strategic Land
            </span>
            <span className="font-mono text-xs italic">Various Sizes</span>
          </div>
          <h2 className="mb-2 text-xl font-bold">Outer Ring Road</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Shivdhara locality near IT City. High appreciation potential.
          </p>
          <p className="font-mono text-lg font-bold">
            ₹600<span className="text-xs">/sq.ft</span>
          </p>
        </article>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-black/10 bg-background p-4 shadow-2xl md:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 bg-foreground py-4 text-center text-xs font-bold tracking-widest uppercase text-background"
        >
          Call Now
        </a>
        <a
          href={`https://wa.me/91${PHONE}`}
          className="flex-1 bg-accent py-4 text-center text-xs font-bold tracking-widest uppercase text-accent-foreground"
        >
          WhatsApp
        </a>
      </div>

      <footer className="mx-auto mt-24 flex max-w-7xl flex-col items-start justify-between gap-12 border-t border-black/5 px-6 py-24 md:flex-row">
        <div className="max-w-md">
          <h2 className="font-display mb-6 text-4xl font-bold italic">Start the conversation.</h2>
          <p className="mb-8 text-muted-foreground">
            Visit our office or call us directly to book a site visit. Our team is available 7
            days a week.
          </p>
          <div className="space-y-2 font-mono">
            <p className="text-sm">Lucknow, Uttar Pradesh</p>
            <a href={`tel:${PHONE}`} className="text-lg font-bold">
              +91 {PHONE}
            </a>
          </div>
        </div>

        <div className="w-full bg-foreground p-8 text-background md:w-96">
          <p className="mb-8 font-mono text-[10px] tracking-widest uppercase opacity-50">
            Enquiry Form
          </p>
          <form
            className="space-y-6"
            action={`https://wa.me/91${PHONE}`}
            method="get"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-b border-white/20 py-2">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full bg-transparent text-xs outline-none placeholder:text-background/40"
              />
            </div>
            <div className="border-b border-white/20 py-2">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                className="w-full bg-transparent text-xs outline-none placeholder:text-background/40"
              />
            </div>
            <div className="border-b border-white/20 py-2">
              <select
                name="text"
                defaultValue="INTERESTED IN: PLOTS"
                className="w-full bg-transparent text-xs text-background/60 outline-none"
              >
                <option className="text-foreground">INTERESTED IN: PLOTS</option>
                <option className="text-foreground">INTERESTED IN: HOUSES</option>
                <option className="text-foreground">INTERESTED IN: COMMERCIAL</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-primary py-4 text-xs font-bold tracking-widest uppercase text-primary-foreground"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
