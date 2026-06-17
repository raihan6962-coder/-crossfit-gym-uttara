import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Flame, Crown, Star, Zap } from "lucide-react"

type Period = "monthly" | "quarterly" | "yearly"

const plans = [
  {
    id: "basic",
    name: "Basic",
    icon: Zap,
    tagline: "Get started with the essentials",
    badge: null,
    featured: false,
    prices: { monthly: 1800, quarterly: 4800, yearly: 18000 },
    savings: { quarterly: "Save 11%", yearly: "Save 17%" },
    features: [
      "Full gym access",
      "All cardio equipment",
      "Locker room access",
      "Basic fitness assessment",
      "Access to common areas",
      "Weekday access only",
    ],
    excluded: ["Personal training sessions", "Sauna access", "Nutrition coaching"],
    cta: "Get Started",
  },
  {
    id: "standard",
    name: "Standard",
    icon: Flame,
    tagline: "The most balanced membership",
    badge: "Most Popular",
    featured: false,
    prices: { monthly: 2500, quarterly: 6500, yearly: 24000 },
    savings: { quarterly: "Save 13%", yearly: "Save 20%" },
    features: [
      "Full gym access 7 days/week",
      "All cardio & weight equipment",
      "Locker room & shower",
      "Fitness assessment & goal plan",
      "2 group coaching sessions/month",
      "Sauna access",
      "Basic nutrition guidance",
    ],
    excluded: ["Personal 1-on-1 training"],
    cta: "Join Standard",
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    tagline: "Maximum access, maximum results",
    badge: "Best Value",
    featured: true,
    prices: { monthly: 3500, quarterly: 9500, yearly: 36000 },
    savings: { quarterly: "Save 10%", yearly: "Save 14%" },
    features: [
      "All Standard features",
      "4 personal training sessions/month",
      "Custom workout program",
      "Custom nutrition plan",
      "Priority trainer access",
      "Unlimited sauna access",
      "Body composition tracking",
      "WhatsApp trainer support",
    ],
    excluded: [],
    cta: "Go Premium",
  },
  {
    id: "vip",
    name: "VIP Training",
    icon: Star,
    tagline: "Elite personal transformation",
    badge: "Elite",
    featured: false,
    prices: { monthly: 8000, quarterly: 22000, yearly: 80000 },
    savings: { quarterly: "Save 8%", yearly: "Save 17%" },
    features: [
      "All Premium features",
      "12 personal training sessions/month",
      "Dedicated personal trainer",
      "Daily check-ins & accountability",
      "Advanced body analysis monthly",
      "Meal prep consultations",
      "Priority scheduling 24/7",
      "Guest passes included",
      "Transformation guarantee",
    ],
    excluded: [],
    cta: "Book VIP",
  },
]

const periodLabels: Record<Period, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
}

export function Membership() {
  const [period, setPeriod] = useState<Period>("monthly")

  return (
    <section id="membership" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Membership Plans
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Invest in Your{" "}
            <span className="text-gradient-orange">Best Self</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Flexible plans for every goal and budget. Cancel or upgrade anytime.
          </p>

          {/* Period toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-xl border border-border">
            {(["monthly", "quarterly", "yearly"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  period === p
                    ? "bg-primary text-white shadow-sm glow-orange-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {periodLabels[p]}
                {p !== "monthly" && period === p && (
                  <span className="absolute -top-2.5 -right-1 text-[9px] font-bold bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full">
                    {plans[0].savings[p as "quarterly" | "yearly"]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map(({ id, name, icon: Icon, tagline, badge, featured, prices, features, excluded, cta }) => (
            <div
              key={id}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                featured
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-orange shadow-2xl scale-105 z-10"
                  : "card-glass border border-border hover:border-border/80 card-glass-hover"
              }`}
            >
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge
                    className={`font-bold uppercase tracking-wider text-xs px-4 py-1 ${
                      featured
                        ? "bg-primary text-white border-primary"
                        : "bg-accent text-accent-foreground border-accent/50"
                    }`}
                  >
                    {badge}
                  </Badge>
                </div>
              )}

              <div className="p-6 flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${featured ? "bg-primary/30 border border-primary/50" : "bg-muted border border-border"}`}>
                  <Icon className={`w-6 h-6 ${featured ? "text-primary" : "text-muted-foreground"}`} />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-foreground mb-1">{name}</h3>
                <p className="text-xs text-muted-foreground mb-5">{tagline}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-1.5">
                    <span className="font-heading font-extrabold text-4xl text-gradient-orange">
                      ৳{prices[period].toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    per {period === "monthly" ? "month" : period === "quarterly" ? "3 months" : "year"}
                    {period !== "monthly" && (
                      <span className="ml-1.5 text-brand-success font-semibold" style={{ color: "oklch(0.71 0.20 148)" }}>
                        {plans.find(p => p.id === id)?.savings[period as "quarterly" | "yearly"]}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/50 line-through">
                      <span className="w-4 h-4 flex items-center justify-center mt-0.5 shrink-0 text-muted-foreground/30 text-lg leading-none">×</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6">
                <Button
                  className={`w-full font-bold ${
                    featured
                      ? "bg-gradient-brand hover:opacity-90 text-white border-0 glow-orange-sm"
                      : "bg-muted hover:bg-muted/80 text-foreground border border-border hover:border-primary/50 hover:text-primary"
                  }`}
                  asChild
                >
                  <a href="#contact">{cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          All prices in Bangladeshi Taka (BDT). * Enrollment fee may apply. Contact us for corporate and student discounts.
        </p>
      </div>
    </section>
  )
}
