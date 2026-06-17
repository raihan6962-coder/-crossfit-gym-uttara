import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", goal: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Get in{" "}
            <span className="text-gradient-orange">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about membership, personal training, or want to book a free gym tour? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["Sector 12, Uttara", "Dhaka, Bangladesh"],
                action: { label: "Get Directions", href: "https://maps.google.com" },
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+880 1700-000000", "+880 1800-000000"],
                action: { label: "Call Now", href: "tel:+8801700000000" },
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info@crossfituttara.com"],
                action: { label: "Send Email", href: "mailto:info@crossfituttara.com" },
              },
              {
                icon: Clock,
                title: "Opening Hours",
                lines: ["Sat–Thu: 6:00 AM – 10:00 PM", "Friday: 7:00 AM – 9:00 PM"],
                action: null,
              },
            ].map(({ icon: Icon, title, lines, action }) => (
              <div key={title} className="card-glass rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                  {action && (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-semibold hover:underline mt-1 inline-block"
                    >
                      {action.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl bg-green-500/10 border border-green-500/25 hover:bg-green-500/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm text-green-400">Chat on WhatsApp</div>
                <div className="text-xs text-muted-foreground">Get instant replies from our team</div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 card-glass rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 glow-orange-sm">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours. You can also WhatsApp us for faster response.
                </p>
                <Button
                  className="mt-6 bg-gradient-brand text-white border-0"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", goal: "", message: "" }) }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-semibold text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="bg-muted border-border focus-visible:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-semibold text-foreground">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+880 1XXX-XXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="bg-muted border-border focus-visible:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-muted border-border focus-visible:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="goal" className="text-xs font-semibold text-foreground">Fitness Goal</Label>
                    <select
                      id="goal"
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="h-9 w-full rounded-md border border-border bg-muted px-3 py-1 text-sm text-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      <option value="">Select your goal...</option>
                      <option>Weight Loss</option>
                      <option>Muscle Building</option>
                      <option>General Fitness</option>
                      <option>Personal Training</option>
                      <option>Women's Fitness</option>
                      <option>Body Transformation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-semibold text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about yourself and what you're looking to achieve..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-muted border-border focus-visible:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-brand hover:opacity-90 text-white font-bold border-0 h-11 text-base glow-orange-sm"
                  >
                    Send Message & Get Free Consultation
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    No spam, ever. We'll only contact you about your fitness inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-border h-64 relative">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Crossfit Gym Uttara</p>
              <p className="text-sm text-muted-foreground">Sector 12, Uttara, Dhaka</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold hover:underline mt-1 inline-block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
