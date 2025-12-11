import { GraduationCap, Building2 } from "lucide-react"

export default function InstitutionSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-blue-50/20 to-background relative overflow-hidden border-t border-primary/10">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Area */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center animate-slide-up delay-100">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src="/kjsce.png"
                  alt="K.J. Somaiya College of Engineering"
                  className="max-w-sm md:max-w-md object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div className="text-center md:text-left space-y-8 flex-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-cyan-500/15 border border-primary/30 text-primary font-semibold animate-slide-up delay-100 group hover:border-primary/50 hover:shadow-lg transition-all">
              <Building2 className="w-5 h-5" />
              <span>Our Home Base</span>
            </div>

            <div className="space-y-4 animate-slide-up delay-200">
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase">
                K.J. Somaiya
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent tracking-tight uppercase">
                College of Engineering
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-cyan-500 rounded-full" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto md:mx-0 animate-slide-up delay-300">
              Fostering innovation and engineering excellence. Providing the world-class infrastructure, mentorship, and platform for <strong className="text-foreground font-semibold bg-primary/15 px-2 py-1 rounded-md">Team ETA</strong> to push the boundaries of efficiency and sustainability.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 animate-slide-up delay-400">
              <div className="flex-1 md:flex-none">
                <div className="text-3xl font-bold text-primary">25+</div>
                <p className="text-xs text-muted-foreground font-medium">Years of Excellence</p>
              </div>
              <div className="flex-1 md:flex-none">
                <div className="text-3xl font-bold text-primary">15k+</div>
                <p className="text-xs text-muted-foreground font-medium">Alumni Network</p>
              </div>
              <div className="flex-1 md:flex-none">
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-xs text-muted-foreground font-medium">Research Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
