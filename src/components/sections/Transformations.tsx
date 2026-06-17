import { TrendingDown, Dumbbell, Activity } from "lucide-react"

const transformations = [
  {
    name: "Rafiq H.",
    age: 28,
    duration: "4 Months",
    goal: "Fat Loss",
    icon: TrendingDown,
    before: { weight: "98 kg", fat: "32%", note: "Low energy, poor posture" },
    after: { weight: "76 kg", fat: "15%", note: "Confident, full of energy" },
    lostGained: "-22 kg",
    quote: "The trainers changed my life. I had tried other gyms but never got real results. Here the approach is completely different.",
    color: "text-primary",
  },
  {
    name: "Tasnim A.",
    age: 24,
    duration: "3 Months",
    goal: "Muscle Building",
    icon: Dumbbell,
    before: { weight: "52 kg", fat: "24%", note: "Skinny, weak, no muscle" },
    after: { weight: "60 kg", fat: "18%", note: "Strong, toned, confident" },
    lostGained: "+8 kg muscle",
    quote: "As a woman, I was nervous to start lifting. But the trainers and the women-friendly environment made me feel completely safe and empowered.",
    color: "text-accent",
  },
  {
    name: "Karim M.",
    age: 35,
    duration: "6 Months",
    goal: "Body Recomposition",
    icon: Activity,
    before: { weight: "85 kg", fat: "28%", note: "Desk job, chronic back pain" },
    after: { weight: "79 kg", fat: "14%", note: "Pain-free, athletic, strong" },
    lostGained: "-6 kg fat, +8 kg muscle",
    quote: "At 35, I didn't think a full transformation was possible. Sabbir's programming and constant support proved me completely wrong.",
    color: "text-primary",
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Transformation Stories
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Real People.{" "}
            <span className="text-gradient-orange">Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the stories of members who showed up, put in the work, and transformed their bodies and lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map(({ name, age, duration, goal, icon: Icon, before, after, lostGained, quote, color }) => (
            <div key={name} className="card-glass rounded-2xl overflow-hidden card-glass-hover flex flex-col">
              {/* Top banner */}
              <div className="relative bg-gradient-to-r from-primary/20 to-muted p-5 border-b border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center">
                      <Icon className={`w-4.5 h-4.5 ${color}`} style={{ width: "18px", height: "18px" }} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-foreground">{name}, {age}</div>
                      <div className="text-xs text-muted-foreground">{goal} · {duration}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-heading font-extrabold text-lg ${color}`}>{lostGained}</div>
                    <div className="text-xs text-muted-foreground">Result</div>
                  </div>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="p-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Before</div>
                  <div className="font-heading font-extrabold text-xl text-foreground mb-0.5">{before.weight}</div>
                  <div className="text-xs text-muted-foreground mb-1">Body fat: {before.fat}</div>
                  <div className="text-xs text-muted-foreground italic">{before.note}</div>
                </div>
                <div className="p-4 bg-primary/5">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">After</div>
                  <div className={`font-heading font-extrabold text-xl ${color} mb-0.5`}>{after.weight}</div>
                  <div className="text-xs text-muted-foreground mb-1">Body fat: {after.fat}</div>
                  <div className="text-xs text-muted-foreground italic">{after.note}</div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-5 text-lg">
            Your transformation story starts here.
          </p>
          <a
            href="#membership"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-all glow-orange text-base"
          >
            Start Your Transformation Today
          </a>
        </div>
      </div>
    </section>
  )
}
