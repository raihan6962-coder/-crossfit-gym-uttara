import { Star, Shield, Users, Dumbbell, Award, Clock } from "lucide-react"

const trustItems = [
  { icon: Star, label: "4.3 Google Rating", sub: "Verified Reviews" },
  { icon: Award, label: "450+ Reviews", sub: "Happy Members" },
  { icon: Users, label: "Professional Trainers", sub: "Certified & Experienced" },
  { icon: Dumbbell, label: "Premium Equipment", sub: "Modern & Updated" },
  { icon: Shield, label: "Women-Friendly", sub: "Safe Environment" },
  { icon: Clock, label: "Open 6 Days/Week", sub: "6AM – 10PM" },
]

export function TrustBar() {
  return (
    <section id="trust" className="bg-card border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile: 2 cols / Desktop: 6 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center p-3 rounded-lg hover:bg-muted/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Icon className="w-4.5 h-4.5 text-primary" style={{ width: "18px", height: "18px" }} />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground leading-tight">{label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
