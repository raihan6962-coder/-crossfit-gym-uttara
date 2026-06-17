import { Dumbbell, MapPin, Phone, Mail, Share2, MessageCircle, Video } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Membership Plans", href: "#membership" },
    { label: "Personal Trainers", href: "#trainers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Weight Training", href: "#services" },
    { label: "Personal Training", href: "#services" },
    { label: "Women's Fitness", href: "#services" },
    { label: "Fat Loss Program", href: "#services" },
    { label: "Muscle Building", href: "#services" },
    { label: "Cardio Training", href: "#services" },
    { label: "Sauna & Recovery", href: "#services" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center glow-orange-sm">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-foreground">CROSSFIT GYM</div>
                <div className="font-heading font-semibold text-xs text-primary tracking-widest uppercase">Uttara</div>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              One of Uttara's most trusted fitness centers with 450+ Google reviews. Professional trainers, premium equipment, and a welcoming environment for everyone.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground"
                aria-label="Facebook"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Sector 12, Uttara, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+8801700000000" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@crossfituttara.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@crossfituttara.com
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs font-semibold text-foreground mb-1">Opening Hours</p>
              <p className="text-xs text-muted-foreground">Sat–Thu: 6:00 AM – 10:00 PM</p>
              <p className="text-xs text-muted-foreground">Fri: 7:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Crossfit Gym Uttara. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Premium Fitness Center · Sector 12, Uttara, Dhaka
          </p>
        </div>
      </div>
    </footer>
  )
}
