import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Dumbbell, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center glow-orange-sm group-hover:glow-orange transition-all">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-heading font-800 text-sm text-foreground tracking-tight">
              CROSSFIT GYM
            </div>
            <div className="font-heading font-600 text-xs text-primary tracking-widest uppercase">
              Uttara
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+8801700000000" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Call Us</span>
          </a>
          <Button
            size="sm"
            className="bg-gradient-brand hover:opacity-90 text-white font-semibold glow-orange-sm border-0 transition-all"
            asChild
          >
            <a href="#membership">Join Now</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex gap-3">
              <Button
                size="sm"
                className="flex-1 bg-gradient-brand hover:opacity-90 text-white font-semibold border-0"
                asChild
              >
                <a href="#membership" onClick={() => setMenuOpen(false)}>
                  Join Now
                </a>
              </Button>
              <Button size="sm" variant="outline" className="flex-1" asChild>
                <a href="tel:+8801700000000">Call Us</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
