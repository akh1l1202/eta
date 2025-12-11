'use client'

import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Zap, Award, Flag, Target, Globe, Flame, Leaf, Wind } from 'lucide-react'

interface Achievement {
  title: string
  year: string
  event: string
  description: string
  icon: any
}

const achievements: Achievement[] = [
  {
    title: 'Bonus Challenge',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Road To 2050 - Bonus Challenge',
    icon: Trophy
  },
  {
    title: 'Virtual Technical Inspection',
    year: '2021',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Virtual Technical Inspection',
    icon: Award
  },
  {
    title: 'Pitch The Future',
    year: '2020',
    event: 'Virtual Event',
    description: 'First in Asia, Regional Winners of Electric Vehicle Battery Charging Challenge',
    icon: Zap
  },
  {
    title: 'CO2 Emissions',
    year: '2020',
    event: 'Virtual Event',
    description: 'Top 5 in Tracking and Reducing CO2 emissions from Vehicles in Pitch The Future',
    icon: Target
  },
  {
    title: 'Mahil',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'First in India, with a fuel efficiency of 270 kmpl of gasoline',
    icon: Trophy
  },
  {
    title: 'Safety Award',
    year: '2019',
    event: 'Shell Eco-Marathon',
    description: 'Off-Track Safety Awards Winner for the safety precautions and behaviour of Team Members',
    icon: Award
  },
  {
    title: 'Carbon Fibre Monocoque',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First ever student team from India to manufacture a carbon fibre monocoque body',
    icon: Zap
  },
  {
    title: 'Vacuum Infusion',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Mastered the process of Vacuum Infusion Technique for manufacturing FRP Bodies',
    icon: Zap
  },
  {
    title: 'Dog Clutch Mechanism',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'Successful Implementation of Dog Clutch Mechanism for Improved Coasting Abilities',
    icon: Zap
  },
  {
    title: 'Technical Inspection',
    year: '2017',
    event: 'Shell Eco-Marathon',
    description: 'First team from India to complete all technical inspection in a single attempt',
    icon: Flag
  },
  {
    title: 'Arya',
    year: '2015',
    event: 'Shell Eco-Marathon',
    description: 'First in India and 5th in Asia, with a fuel efficiency of 153 kmpl of gasoline',
    icon: Trophy
  }
]

export default function ShellEcoMarathonPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Floating gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold animate-fade-in">
            <Trophy className="w-4 h-4" />
            <span>The Ultimate Challenge</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 text-balance tracking-tight animate-slide-up delay-100">
            THE CHALLENGE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">SHELL ECO-MARATHON</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-8 tracking-wide animate-slide-up delay-200 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">THIRST FOR INNOVATIONS</p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto animate-slide-up delay-300"></div>
        </div>
      </section>

      {/* Content Section with Two Columns */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <div className="flex flex-col space-y-10">

              {/* Intro Block */}
              <div className="relative pl-6 border-l-4 border-gradient-to-b from-primary to-cyan-500 animate-slide-up delay-100">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  Global Innovation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The <span className="text-foreground font-semibold bg-primary/15 px-2 py-1 rounded-md">Shell Eco-marathon</span> is a premier global competition challenging student teams to design, build, and drive the most energy-efficient vehicles. Held across Europe, the Americas, and Asia.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up delay-200">
                <Card className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)] hover:scale-105 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 w-fit mb-3 ring-1 ring-orange-200/50 group-hover:scale-110 transition-transform">
                      <Flame className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg mb-2">Internal Combustion</h4>
                    <p className="text-sm text-muted-foreground">Petrol, diesel, ethanol, & natural gas.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)] hover:scale-105 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100/50 w-fit mb-3 ring-1 ring-yellow-200/50 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg mb-2">Electric Mobility</h4>
                    <p className="text-sm text-muted-foreground">Hydrogen fuel cells & Li-ion batteries.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sustainability Block */}
              <div className="bg-gradient-to-br from-green-50/80 to-green-100/40 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-lg animate-slide-up delay-300">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-green-100/80">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  Sustainable Future
                </h3>
                <p className="text-muted-foreground">
                  Pushing the boundaries of engineering to create the most fuel-efficient vehicles possible, inspiring next-generation sustainable transportation solutions.
                </p>
              </div>
            </div>

            {/* Right Column - Vehicle Type Card */}
            <div className="lg:sticky lg:top-32 animate-slide-up delay-200">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Card className="w-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 group-hover:border-primary/50 shadow-2xl overflow-hidden relative transition-all duration-500">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/25 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl -ml-16 -mb-16 group-hover:bg-cyan-500/25 transition-colors" />

                  <CardHeader className="relative z-10 pb-2">
                    <div className="flex justify-between items-center mb-3">
                      <Badge className="bg-gradient-to-r from-primary to-cyan-500 text-white tracking-widest text-xs font-bold px-3 py-1 border-0">
                        VEHICLE CLASS
                      </Badge>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Wind className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600 tracking-tight uppercase italic">
                      PROTOTYPE
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Futuristic, streamlined vehicles where the primary design consideration is reducing drag and maximizing efficiency.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-foreground/80 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 group-hover/item:scale-150 transition-transform" />
                        <span>Streamlined Aerodynamics</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-foreground/80 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 group-hover/item:scale-150 transition-transform" />
                        <span>Lightweight Construction</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-foreground/80 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-500 group-hover/item:scale-150 transition-transform" />
                        <span>Maximum Fuel Efficiency</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/30 flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Category Specs</span>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" /> Maximum Innovation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Floating gradient orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 text-balance animate-slide-up">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600 animate-gradient-shift">ACHIEVEMENTS</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 animate-slide-up delay-100">
              A legacy of winning, innovating, and breaking records on the global stage.
            </p>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto animate-slide-up delay-200"></div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)] group overflow-hidden relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardHeader className="pb-2 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-gradient-to-r from-primary to-cyan-500 text-white font-mono text-xs border-0 px-3 py-1">
                      {achievement.year}
                    </Badge>
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-600 transition-all leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {achievement.event}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
