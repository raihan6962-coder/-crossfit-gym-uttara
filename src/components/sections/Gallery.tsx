import { useState } from "react"

const galleryItems = [
  { src: "/hero-bg.webp", label: "Gym Floor", category: "equipment" },
  { src: "/gym-gallery-1.webp", label: "Weight Area", category: "equipment" },
  { src: "/gym-gallery-2.webp", label: "Training Session", category: "training" },
  { src: "/gym-gallery-3.webp", label: "Sauna Facility", category: "facilities" },
  { src: "/gym-gallery-4.webp", label: "Women Training", category: "training" },
  { src: "/trainer-1.webp", label: "Personal Training", category: "training" },
  { src: "/trainer-2.webp", label: "Women's Coaching", category: "training" },
  { src: "/trainer-3.webp", label: "Strength Coaching", category: "training" },
]

const categories = ["all", "equipment", "training", "facilities"]

export function Gallery() {
  const [active, setActive] = useState("all")
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active)

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Gallery
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            See Our{" "}
            <span className="text-gradient-orange">World-Class Facility</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                active === cat
                  ? "bg-primary text-white glow-orange-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat === "all" ? "All Photos" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map(({ src, label }) => (
            <button
              key={src + label}
              onClick={() => setLightbox(src)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all flex items-end">
                <span className="w-full text-xs font-semibold text-white px-3 py-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  {label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl border border-border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
