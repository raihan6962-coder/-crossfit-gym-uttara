import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What are the membership fees at Crossfit Gym Uttara?",
    a: "Our membership plans start from ৳1,800/month for Basic, ৳2,500/month for Standard, ৳3,500/month for Premium, and ৳8,000/month for VIP Personal Training. We also offer quarterly and yearly plans with significant discounts. Contact us for the latest pricing.",
  },
  {
    q: "Do you have professional personal trainers available?",
    a: "Yes! We have certified personal trainers including NSCA-CSCS, ACE, and ISSA certified coaches. You can book 1-on-1 sessions separately or opt for our Premium/VIP membership which includes dedicated training sessions.",
  },
  {
    q: "Is the gym suitable for complete beginners?",
    a: "Absolutely. We welcome members of all fitness levels. Our trainers will conduct an initial assessment, discuss your goals, and design a beginner-friendly program to help you build confidence and results safely.",
  },
  {
    q: "Do you have female trainers and women-only programs?",
    a: "Yes! We have experienced female trainers specialized in women's fitness. We offer women-specific programs covering fat loss, toning, strength building, and more in a safe, comfortable, and judgment-free environment.",
  },
  {
    q: "What are your gym opening hours?",
    a: "We are open Saturday through Thursday from 6:00 AM to 10:00 PM. On Fridays, we are open from 7:00 AM to 9:00 PM. We adjust hours during Ramadan — please contact us for updates.",
  },
  {
    q: "Do you offer free trial sessions or gym tours?",
    a: "Yes! We offer free gym tours so you can see our facilities before committing. Contact us via WhatsApp or phone to schedule your complimentary visit at a convenient time.",
  },
  {
    q: "What facilities are included in membership?",
    a: "All members get access to our full weight room, cardio equipment, locker rooms, and common areas. Standard and above plans include sauna access. Premium and VIP plans include personal training sessions and nutrition guidance.",
  },
  {
    q: "Is there parking available at the gym?",
    a: "Yes, there is parking available near our Sector 12, Uttara location. Please contact us for specific parking guidance as availability may vary by time of day.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. We understand life happens. You can freeze your membership for medical reasons or cancel with appropriate notice. Please speak with our membership team for specific terms and conditions.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-card/40">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We have answers. Can't find what you need? Contact us directly.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-primary/50 bg-primary/5" : "border-border bg-card"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm ${open === i ? "text-foreground" : "text-muted-foreground"}`}>
                  {q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-3">Still have questions?</p>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-all glow-orange-sm text-sm"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
