import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Flame, Dumbbell, Activity, UserCheck, Heart, Zap, Bike, TrendingUp, ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Weight Loss Program",
    badge: "Most Popular",
    desc: "Science-backed fat loss protocols combining cardio, HIIT, and nutrition coaching for sustainable results.",
    benefits: ["Personalized meal guidance", "Weekly progress tracking", "Fat-burning workouts", "Body composition analysis"],
    color: "text-primary",
    bgColor: "bg-primary/15 border-primary/20",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building Program",
    badge: "Bestseller",
    desc: "Progressive overload training with expert programming to maximize hypertrophy and build lean muscle mass.",
    benefits: ["Strength progression plans", "Macro tracking support", "Recovery protocols", "Monthly assessments"],
    color: "text-accent",
    bgColor: "bg-accent/15 border-accent/20",
  },
  {
    icon: TrendingUp,
    title: "Strength Training",
    badge: null,
    desc: "Structured powerlifting and strength programs for beginners to advanced athletes targeting PRs and raw strength.",
    benefits: ["Compound movement mastery", "Form coaching", "1RM progression", "Injury prevention"],
    color: "text-primary",
    bgColor: "bg-primary/15 border-primary/20",
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    badge: "Premium",
    desc: "1-on-1 dedicated coaching with a certified trainer who designs, guides, and adapts every session for you.",
    benefits: ["Dedicated trainer", "Custom workout plan", "Nutrition advice", "Priority scheduling"],
    color: "text-accent",
    bgColor: "bg-accent/15 border-accent/20",
  },
  {
    icon: Heart,
    title: "Women's Fitness",
    badge: "Women Only",
    desc: "A safe, empowering program tailored for women — from toning and fat loss to strength and confidence building.",
    benefits: ["Female-specific programming", "Flexible scheduling", "Safe environment", "Group motivation"],
    color: "text-primary",
    bgColor: "bg-primary/15 border-primary/20",
  },
  {
    icon: Zap,
    title: "Functional Training",
    badge: null,
    desc: "Movement-based training that improves everyday performance, stability, mobility, and athleticism.",
    benefits: ["Core strengthening", "Mobility work", "Athletic performance", "Injury prevention"],
    color: "text-accent",
    bgColor: "bg-accent/15 border-accent/20",
  },
  {
    icon: Bike,
    title: "Cardio Conditioning",
    badge: null,
    desc: "Targeted cardio programs using treadmills, bikes, rowing machines to build endurance and heart health.",
    benefits: ["Endurance building", "Heart health", "Calorie burning", "Stamina improvement"],
    color: "text-primary",
    bgColor: "bg-primary/15 border-primary/20",
  },
  {
    icon: Activity,
    title: "Body Transformation",
    badge: "Results Guaranteed",
    desc: "Our signature 90-day transformation program that reshapes your physique through progressive training and nutrition.",
    benefits: ["90-day structured plan", "Before/after tracking", "Full-body recomposition", "Lifestyle coaching"],
    color: "text-accent",
    bgColor: "bg-accent/15 border-accent/20",
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-card/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Programs Built for{" "}
            <span className="text-gradient-orange">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From weight loss to muscle building, we offer expert-designed programs to help every member achieve their fitness goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, badge, desc, benefits, color, bgColor }) => (
            <div
              key={title}
              className="card-glass rounded-xl p-6 card-glass-hover flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${bgColor} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                {badge && (
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-semibold px-2 py-0.5 shrink-0 ml-2">
                    {badge}
                  </Badge>
                )}
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{desc}</p>
              <ul className="space-y-1.5 mb-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-border hover:border-primary hover:text-primary text-xs group-hover:border-primary/60 transition-all"
                asChild
              >
                <a href="#contact">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
