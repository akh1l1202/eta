import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Wind, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating orb elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight mb-2 animate-slide-up">
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 animate-gradient-shift">#MadOverMiles</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mt-6" />
        </div>

        <Card className="bg-gradient-to-br from-white/80 via-white to-blue-50/40 backdrop-blur-sm border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group hover:border-primary/40">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 group-hover:border-primary/40" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 group-hover:border-primary/40" />

            {/* Animated background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <CardContent className="p-8 md:p-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify animate-slide-up delay-100">
                            <strong className="text-foreground font-bold">Team ETA</strong> is the official super mileage student team of <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">K J Somaiya School of Engineering</span>. We strive to bring awareness toward sustainability and eco-friendly transportation through competitive motorsports.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light text-justify animate-slide-up delay-200">
                            Our mission is to design and build fuel-efficient vehicles that challenge the conventional approach to automotive engineering. We believe that with the perfect combination of <span className="text-foreground font-semibold bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded-md">aerodynamics</span>, <span className="text-foreground font-semibold bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded-md">lightweight materials</span>, and <span className="text-foreground font-semibold bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded-md">innovative drivetrain solutions</span>, we can achieve extraordinary fuel efficiency.
                        </p>
                    </div>

                    {/* Side Icons/Stats */}
                    <div className="hidden md:flex flex-col gap-8 pl-8 border-l-2 border-gradient-to-b from-primary/30 to-transparent">
                        <div className="flex flex-col items-center text-center group/icon animate-slide-up delay-100">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 mb-3 group-hover/icon:from-green-100 group-hover/icon:to-green-200 transition-all ring-1 ring-green-200/50 group-hover/icon:ring-green-300/50 group-hover/icon:scale-110 group-hover/icon:shadow-lg">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Eco-Friendly</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/icon animate-slide-up delay-200">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 mb-3 group-hover/icon:from-blue-100 group-hover/icon:to-blue-200 transition-all ring-1 ring-blue-200/50 group-hover/icon:ring-blue-300/50 group-hover/icon:scale-110 group-hover/icon:shadow-lg">
                                <Wind className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Aerodynamics</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/icon animate-slide-up delay-300">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100/50 mb-3 group-hover/icon:from-yellow-100 group-hover/icon:to-yellow-200 transition-all ring-1 ring-yellow-200/50 group-hover/icon:ring-yellow-300/50 group-hover/icon:scale-110 group-hover/icon:shadow-lg">
                                <Zap className="w-6 h-6 text-yellow-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Efficiency</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  )
}
