'use client'

import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Trophy, Zap } from 'lucide-react'

interface CarData {
  year: number
  name: string
  description: string
  achievements?: string[]
}

const cars: CarData[] = [
  {
    year: 2019,
    name: 'MAHIL',
    description: 'The unaccountable efforts put all over the years by every team member finally paid off in 2019 when we introduced our best ever-\'MAHIL\'. This prototype secured the first rank in Shell Eco-Marathon, India 2019 by knocking an unbelievable mileage of 270 kmpl. Also, the first prototype which completed its technical inspection among every other teams and won the safety award.',
    achievements: ['1st Rank SEM India 2019', '270 kmpl Mileage', 'Safety Award Winner']
  },
  {
    year: 2019,
    name: 'YUGANT',
    description: '\'Yugant\' may represent the end of gasoline-powered cars and the dawn of Eco-friendly transportation. It represents the transition to renewable energy which may stimulate development, innovation, and sustainability. It also implies longevity, durability, and the end of an era and the start of a sustainable one.',
    achievements: ['Sustainable Design', 'Innovation Focus']
  },
  {
    year: 2017,
    name: 'TRITON',
    description: 'Team ETA\'s first ever carbon fibre monocoque structured body was introduced in 2017 and this prototype was named \'TRITON\'. This perfectly engineered automobile vehicle became the first Indian prototype to participate in Shell Eco Marathon Asia 2017, Singapore.',
    achievements: ['Carbon Fibre Monocoque', 'SEM Asia 2017 Participant']
  },
  {
    year: 2015,
    name: 'ARYA',
    description: 'The first prototype of Team ETA having a carbon fiber shell which was used to improve its aerodynamics, strength and rigidity. This prototype has participated in the Shell Eco Marathon Asia 2015 which was held in Philippines. It was ranked 5th in Asia by reaching an astonishing mileage of 153 kmpl.',
    achievements: ['Ranked 5th in Asia', '153 kmpl Mileage', 'Carbon Fiber Shell']
  },
  {
    year: 2014,
    name: 'J-14',
    description: 'The successor of the \'13 prototype J-14 with not just an improved design but with a glass fiber body shell along with the saffron-white-green aesthetic design representing the Indian tricolor was the highlight of the prototype.',
    achievements: ['Glass Fiber Body', 'Tricolor Aesthetic']
  },
  {
    year: 2013,
    name: 'JUGAD',
    description: 'JUGAAD, was the first prototype built by Team ETA. Participated in Shell Eco Marathon Asia 2013, Malaysia this sheet metal prototype was designed with sheer determination and innovation and hence named, Jugaad.',
    achievements: ['First Prototype', 'SEM Asia 2013 Participant']
  }
]

export default function OurGaragePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-0 relative overflow-hidden flex flex-col">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow w-full">
        {/* Page Header */}
        <div className="text-center mb-24">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold animate-fade-in">
            <Trophy className="w-4 h-4" />
            <span>Our Legacy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight animate-slide-up delay-100">
            INSIDE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">GARAGE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            A timeline of innovation, engineering excellence, and our journey towards sustainable mobility.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mt-8 animate-slide-up delay-300"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-24">
          {/* Vertical Line - Center on Desktop, Left on Mobile */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 lg:-translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-32">
            {cars.map((car, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center w-full group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>

                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-5 h-5 bg-background border-3 border-gradient-to-r from-primary to-cyan-500 rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(88,159,246,0.6)] top-0 lg:top-1/2 lg:-translate-y-1/2 group-hover:scale-150 transition-transform duration-300">
                  <div className="absolute inset-1 bg-primary rounded-full animate-pulse opacity-50"></div>
                </div>

                {/* Image Section */}
                <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 mb-8 lg:mb-0 ${
                    index % 2 === 0
                    ? 'lg:order-1 lg:pr-16' // Even: Image Left
                    : 'lg:order-2 lg:pl-16' // Odd: Image Right
                }`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden group/image">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-cyan-500/40 to-primary/40 rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover/image:border-primary/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                          {/* Image Content */}
                          <img
                              src={`/${car.name === 'JUGAD' ? 'jugaad' : car.name.toLowerCase().replace('-', '')}.${['triton', 'arya', 'yugant', 'j-14', 'jugad'].includes(car.name.toLowerCase()) ? 'png' : 'jpg'}`}
                              alt={car.name}
                              className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 group-hover/image:scale-110 transition-transform">
                              <Badge className="text-lg font-bold bg-gradient-to-r from-primary to-cyan-500 text-white backdrop-blur-sm border-0 px-4 py-2">
                                  {car.year}
                              </Badge>
                          </div>
                      </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                    index % 2 === 0
                    ? 'lg:order-2 lg:pl-16' // Even: Text Right
                    : 'lg:order-1 lg:pr-16' // Odd: Text Left
                }`}>
                    <Card className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 h-full hover:shadow-[0_20px_60px_-10px_rgba(88,159,246,0.3)]">
                        <CardContent className="p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl lg:text-4xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-600 transition-all">
                                    {car.name}
                                </h2>
                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                  <Zap className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm mb-6 text-justify">
                                {car.description}
                            </p>

                            {car.achievements && (
                                <div className="flex flex-wrap gap-2">
                                    {car.achievements.map((achievement, i) => (
                                    <Badge key={i} className="bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-primary text-xs py-1 font-semibold hover:border-primary/50 transition-colors">
                                        {achievement}
                                    </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
