import {
  UserCheck, Zap, ClipboardList, ShieldCheck, Heart, Waves, Target, Users2
} from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Professional Trainers",
    desc: "Certified experts with years of experience guiding members toward real, lasting results.",
  },
  {
    icon: Zap,
    title: "State-of-the-Art Equipment",
    desc: "Premium commercial-grade machines, free weights, and cardio equipment regularly updated.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Fitness Plans",
    desc: "Custom workout and nutrition programs designed around your unique body, goals, and schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable Environment",
    desc: "Hygienic, well-maintained facilities with trained staff ensuring your safety at all times.",
  },
  {
    icon: Heart,
    title: "Women-Friendly Training",
    desc: "A welcoming, supportive space for female members with dedicated programs and trainers.",
  },
  {
    icon: Waves,
    title: "Sauna & Recovery",
    desc: "Professional sauna facilities to help muscles recover faster and reduce post-workout soreness.",
  },
  {
    icon: Target,
    title: "Results-Oriented Programs",
    desc: "Every workout is purposefully designed to track progress and deliver measurable transformations.",
  },
  {
    icon: Users2,
    title: "Supportive Community",
    desc: "Join a positive, motivating community of 1000+ members who push each other to greatness.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            The Crossfit Gym Uttara{" "}
            <span className="text-gradient-orange">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just offer a gym — we offer a complete transformation ecosystem backed by expertise, community, and premium facilities.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-glass rounded-xl p-6 card-glass-hover group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:border-primary/40 transition-all">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 rounded-2xl overflow-hidden relative">
          <div className="bg-gradient-brand p-px rounded-2xl">
            <div className="bg-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-foreground mb-2">
                  Over <span className="text-gradient-orange">1,000 members</span> trust us with their fitness journey
                </h3>
                <p className="text-muted-foreground">
                  Join Uttara's fastest-growing fitness community. Beginner or advanced, we have a program for you.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="#membership"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-brand text-white font-bold rounded-lg hover:opacity-90 transition-all glow-orange-sm whitespace-nowrap text-sm"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
