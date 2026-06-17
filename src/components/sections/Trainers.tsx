import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar } from "lucide-react"

const trainers = [
  {
    name: "Rakibul Islam",
    title: "Head Strength & Conditioning Coach",
    specialties: ["Powerlifting", "Strength Training", "Body Composition"],
    experience: "8 Years",
    cert: "NSCA-CSCS Certified",
    bio: "Rakibul has transformed hundreds of members through science-based strength programming. Former competitive powerlifter now dedicated to coaching.",
    image: "/trainer-1.webp",
    members: "200+",
  },
  {
    name: "Nusrat Jahan",
    title: "Women's Fitness Specialist",
    specialties: ["Women's Training", "Fat Loss", "Pre/Post Natal"],
    experience: "6 Years",
    cert: "ACE Certified Personal Trainer",
    bio: "Nusrat creates empowering training environments for women of all fitness levels, specializing in sustainable body transformation.",
    image: "/trainer-2.webp",
    members: "150+",
  },
  {
    name: "Sabbir Ahmed",
    title: "Senior Personal Trainer",
    specialties: ["Muscle Building", "Functional Training", "HIIT"],
    experience: "10 Years",
    cert: "ISSA Certified Trainer",
    bio: "Sabbir brings a decade of elite coaching experience, helping athletes and beginners alike break through plateaus with strategic programming.",
    image: "/trainer-3.webp",
    members: "300+",
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="section-padding bg-card/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Expert Trainers
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Train With the{" "}
            <span className="text-gradient-orange">Best</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our certified trainers bring passion, expertise, and personalized attention to help you exceed your fitness goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map(({ name, title, specialties, experience, cert, bio, image, members }) => (
            <div
              key={name}
              className="card-glass rounded-2xl overflow-hidden card-glass-hover group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-white">{name}</h3>
                    <p className="text-xs text-muted-foreground">{title}</p>
                  </div>
                  <Badge className="bg-primary/90 text-white border-0 text-xs font-semibold">
                    {experience}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-xs text-muted-foreground">{cert}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full bg-primary/15 border border-primary/25 text-xs text-primary font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span>{members} clients trained</span>
                  </div>
                  <Button size="sm" className="bg-gradient-brand hover:opacity-90 text-white border-0 text-xs h-8 glow-orange-sm" asChild>
                    <a href="#contact">
                      <Calendar className="w-3 h-3 mr-1" />
                      Book Session
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            Want dedicated 1-on-1 coaching? Our trainers are ready to help.
          </p>
          <Button
            size="lg"
            className="bg-gradient-brand hover:opacity-90 text-white font-bold border-0 glow-orange-sm"
            asChild
          >
            <a href="#contact">Book Personal Training Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
