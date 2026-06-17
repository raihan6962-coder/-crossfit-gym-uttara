import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Arif Rahman",
    role: "Member since 2022",
    rating: 5,
    text: "I love this place. It's a gym and you can find almost every workout machine. The trainers are professional and always guide you to support your fitness journey. Highly recommended!",
    initials: "AR",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Mehedi H.",
    role: "Member since 2023",
    rating: 5,
    text: "The trainers are really good and always support you to achieve your goals. The gym has everything you need. The environment is motivating and the staff is super friendly.",
    initials: "MH",
    color: "bg-accent/20 text-accent",
  },
  {
    name: "Sabrina Islam",
    role: "Female Member since 2022",
    rating: 5,
    text: "As a female member, the environment is very comfortable. The owner and trainers are friendly and supportive. I feel completely safe and motivated every time I come here.",
    initials: "SI",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Tanvir Ahmed",
    role: "Member since 2021",
    rating: 4,
    text: "Been training here for 3 years. The equipment is always clean and updated. Trainers are knowledgeable and give you personalized attention. Results speak for themselves!",
    initials: "TA",
    color: "bg-accent/20 text-accent",
  },
  {
    name: "Nadia Karim",
    role: "Female Member since 2023",
    rating: 5,
    text: "Best gym in Uttara for women! The trainers understand women's fitness needs. Clean facilities, modern equipment, and the sauna is a great bonus for recovery.",
    initials: "NK",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Rahim Chowdhury",
    role: "Member since 2022",
    rating: 5,
    text: "The personal training program here is exceptional. My trainer Sabbir helped me lose 15kg in 4 months through structured programming and diet guidance. Life-changing experience!",
    initials: "RC",
    color: "bg-accent/20 text-accent",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-card/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            What Our Members{" "}
            <span className="text-gradient-orange">Are Saying</span>
          </h2>

          {/* Google Rating Widget */}
          <div className="inline-flex items-center gap-4 px-6 py-4 card-glass rounded-2xl border border-border mt-2">
            <div className="text-center">
              <div className="font-heading font-extrabold text-5xl text-gradient-orange">4.3</div>
              <div className="flex items-center gap-0.5 justify-center mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <Star className="w-4 h-4 fill-accent/40 text-accent/40" />
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-left">
              <div className="font-heading font-bold text-lg text-foreground">450+ Reviews</div>
              <div className="text-sm text-muted-foreground">on Google Maps</div>
              <div className="text-xs text-primary font-semibold mt-0.5">Verified Gym in Uttara</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(({ name, role, rating, text, initials, color }) => (
            <div
              key={name}
              className="card-glass rounded-xl p-6 card-glass-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center font-bold text-sm shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-primary/40 shrink-0" />
              </div>

              <StarRating rating={rating} />

              <p className="text-sm text-muted-foreground leading-relaxed mt-3 flex-1">
                "{text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
            Read all 450+ reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
