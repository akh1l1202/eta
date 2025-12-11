import { Card, CardContent } from "@/components/ui/card"
import { Users, Car, Trophy, Flag, Globe } from "lucide-react"

const achievements = [
  { number: '23', label: 'TEAM MEMBERS', icon: Users, gradient: 'from-blue-500 to-blue-600', bgGradient: 'from-blue-50 to-blue-100/50' },
  { number: '6', label: 'CARS DESIGNED', icon: Car, gradient: 'from-cyan-500 to-cyan-600', bgGradient: 'from-cyan-50 to-cyan-100/50' },
  { number: '6', label: 'AWARDS WON', icon: Trophy, gradient: 'from-yellow-500 to-yellow-600', bgGradient: 'from-yellow-50 to-yellow-100/50' },
  { number: '1', label: 'NATIONAL EVENT WON', icon: Flag, gradient: 'from-orange-500 to-orange-600', bgGradient: 'from-orange-50 to-orange-100/50' },
  { number: '1', label: 'INTERNATIONAL EVENT WON', icon: Globe, gradient: 'from-green-500 to-green-600', bgGradient: 'from-green-50 to-green-100/50' },
]

export default function AchievementsSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/3 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 animate-slide-up">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light animate-slide-up delay-100">
            Excellence in motion, innovation in action
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)] hover:scale-110 group overflow-hidden relative h-full animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full relative z-10">
                {/* Large background icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12 pointer-events-none">
                  <achievement.icon className="w-40 h-40" />
                </div>

                {/* Icon container */}
                <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${achievement.bgGradient} ring-1 ring-white/50 group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-20`}>
                  <achievement.icon className={`w-7 h-7 bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent`} />
                </div>

                {/* Number */}
                <div className={`text-5xl sm:text-6xl font-black text-foreground mb-2 tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${achievement.gradient} transition-all duration-300 relative z-20`}>
                  {achievement.number}
                </div>

                {/* Label */}
                <p className="text-[11px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase group-hover:text-foreground transition-colors relative z-20">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
