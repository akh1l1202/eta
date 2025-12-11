import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Lightbulb, Rocket } from 'lucide-react'

export default function CtaSection() {
  const ctaItems = [
    { icon: Lightbulb, title: "Share Ideas", desc: "Mentor our engineers with your industry expertise.", gradient: "from-yellow-500 to-yellow-600", bgGradient: "from-yellow-50 to-yellow-100/50" },
    { icon: Rocket, title: "Sponsor Us", desc: "Power our next prototype with financial support.", gradient: "from-blue-500 to-blue-600", bgGradient: "from-blue-50 to-blue-100/50" },
    { icon: Heart, title: "Donate", desc: "Contribute resources to help us build better.", gradient: "from-red-500 to-red-600", bgGradient: "from-red-50 to-red-100/50" }
  ];

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Top Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-40 left-1/2 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold animate-fade-in">
          <Rocket className="w-4 h-4" />
          <span>Partnership Opportunities</span>
        </div>

        <h2 className="text-5xl sm:text-7xl font-black text-foreground mb-8 tracking-tighter animate-slide-up delay-100">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 animate-gradient">Save The Future</span> Together.
        </h2>

        <p className="text-lg sm:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up delay-200">
          Innovation needs fuel. Whether it's expertise, resources, or sponsorship, your support drives us further towards a sustainable tomorrow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ctaItems.map((item, i) => (
            <div
              key={i}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 group-hover:border-primary/50 transition-all duration-500 h-full hover:shadow-2xl hover:-translate-y-2">
                {/* Background gradient layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient} w-fit mb-4 ring-1 ring-white/50 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <item.icon className={`w-8 h-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary transition-all">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/fuel-our-mission">
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-700 text-primary-foreground font-bold rounded-full shadow-[0_0_40px_-10px_rgba(88,159,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.8)] transition-all hover:scale-105 group relative overflow-hidden animate-slide-up delay-500"
          >
            <span className="relative z-10 flex items-center">
              Fuel Our Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
