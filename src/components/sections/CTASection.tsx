import { Flame } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.62 0.24 38.5), transparent)",
        }}
      />
      <div className="absolute inset-0 hero-grid-bg opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold mb-6">
          <Flame className="w-4 h-4" />
          Limited Time — Free Gym Tour This Week
        </div>

        <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
          Ready to{" "}
          <span className="text-gradient-orange">Transform</span>
          <br />
          Your Body?
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join hundreds of members who have already changed their lives at Crossfit Gym Uttara. Your transformation starts with one decision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#membership"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-gradient-brand text-white font-extrabold text-lg rounded-xl hover:opacity-90 transition-all glow-orange border-0"
          >
            Join Today
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-muted text-foreground font-bold text-lg rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-all"
          >
            Schedule a Visit
          </a>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-muted text-foreground font-bold text-lg rounded-xl border border-border hover:border-green-500/50 hover:text-green-400 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
