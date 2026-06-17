import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronDown, Users, Award, Dumbbell, Flame } from "lucide-react"

const stats = [
  { value: "450+", label: "Google Reviews", icon: Star },
  { value: "4.3★", label: "Average Rating", icon: Award },
  { value: "1000+", label: "Active Members", icon: Users },
  { value: "15+", label: "Expert Trainers", icon: Dumbbell },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-30" />

      {/* Orange radial glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.24 38.5), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 font-semibold uppercase tracking-wider text-xs px-3 py-1">
              <Flame className="w-3 h-3 mr-1" />
              #1 Gym in Uttara
            </Badge>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
              <Star className="w-3.5 h-3.5 fill-accent/40 text-accent" />
              <span className="text-xs text-muted-foreground ml-1">450+ reviews</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-6">
            <span className="text-foreground block">Transform</span>
            <span className="text-gradient-orange block">Your Body.</span>
            <span className="text-foreground block">Build Your</span>
            <span className="text-foreground block">
              <span className="text-gradient-orange">Strength.</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Join one of Uttara's most trusted fitness communities with professional trainers, premium equipment, and personalized support for men and women.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-brand hover:opacity-90 text-white font-bold text-base px-8 py-6 h-auto glow-orange border-0 transition-all hover:scale-105"
              asChild
            >
              <a href="#membership">Start Your Fitness Journey</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted/50 font-semibold text-base px-8 py-6 h-auto transition-all"
              asChild
            >
              <a href="#contact">Book a Free Gym Tour</a>
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3">
            {["450+ Reviews", "Professional Trainers", "Women-Friendly", "Sauna Facility"].map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="card-glass rounded-xl p-5 text-center card-glass-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-heading font-extrabold text-2xl text-gradient-orange mb-1">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  )
}
