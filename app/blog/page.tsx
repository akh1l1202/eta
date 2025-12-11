'use client'

import { useState, useMemo } from 'react'
import Footer from '@/components/footer'
import { ArrowRight, Zap } from 'lucide-react'

const categories = ['All', 'Powertrain', 'Drivetrain', 'Bodyworks', 'Vehicle Dynamics', 'Electronics', 'Autonomous', 'Marketing']

const blogPosts = [
  {
    id: 1,
    title: 'CO2 reductions from gasoline engines',
    category: 'Powertrain',
    date: '27 April, 2022',
    snippet: 'To reduce CO2 emissions, it is necessary to increase the fuel economy. This implies extracting the kinetic energy from the combustion energy with minimum losses. Using a leaner air-fuel ratio is recommended...',
    readTime: 5,
    featured: true,
  },
  {
    id: 2,
    title: 'Super mileage prototype for the Shell Eco-Marathon',
    category: 'Drivetrain',
    date: '05 August, 2023',
    snippet: 'At the forefront of engineering brilliance and innovation lies the Drivetrain Department of Team Eta, the driving force behind their super mileage prototype for the Shell Eco-Marathon...',
    readTime: 6,
  },
  {
    id: 3,
    title: 'Our vehicles look like cycles but they can take you from Mumbai to Pune in a litre of petrol',
    category: 'Bodyworks',
    date: '03 August, 2023',
    snippet: 'Designing a vehicle body is an art. Art that involves mind of a designer and knowledge of an engineer. When I, a member of bodyworks team of eta, use the surfacing tool 100th time...',
    readTime: 7,
  },
  {
    id: 4,
    title: 'Cutting-edge super mileage prototype cars',
    category: 'Vehicle Dynamics',
    date: '28 July, 2023',
    snippet: 'Vehicle dynamics is the science of understanding and optimizing vehicles\' performance, handling, and stability. It encompasses a wide range of principles, including vehicle motion...',
    readTime: 8,
  },
  {
    id: 5,
    title: 'Forefront of transforming EV technology',
    category: 'Electronics',
    date: '22 July, 2023',
    snippet: 'In the fast-evolving world of automotive engineering, one department at Team Eta is at the forefront of transforming EV technology: the Electronics Department...',
    readTime: 6,
  },
  {
    id: 6,
    title: 'self-driving cars',
    category: 'Autonomous',
    date: '25 July, 2023',
    snippet: 'In the ever-evolving landscape of the automotive industry, one concept has captured the collective imagination and is poised to reshape our roads forever – self driving cars...',
    readTime: 9,
  },
  {
    id: 7,
    title: 'We are the team\'s Voice',
    category: 'Marketing',
    date: '20 July, 2023',
    snippet: 'When it comes for a team like Eta to dream of going overseas and take part in shell eco marathon ANNUALLY it puts us in a conundrum "bhai paisa kahan se aaega?"...',
    readTime: 5,
  },
]

const categoryColors: Record<string, string> = {
  'Powertrain': 'from-orange-500 to-orange-600',
  'Drivetrain': 'from-blue-500 to-blue-600',
  'Bodyworks': 'from-purple-500 to-purple-600',
  'Vehicle Dynamics': 'from-pink-500 to-pink-600',
  'Electronics': 'from-green-500 to-green-600',
  'Autonomous': 'from-indigo-500 to-indigo-600',
  'Marketing': 'from-red-500 to-red-600',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter(post => post.category === activeCategory)
  }, [activeCategory])

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <main className="min-h-screen bg-white pt-4">
        {/* Header Section */}
        <div className="relative overflow-hidden border-b border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 relative">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-teal-600" />
              <span className="text-teal-600 text-sm font-semibold">TECH LOG</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 text-balance">
              THE TECH LOG
            </h1>
            <p className="text-xl text-gray-600">From the Garage and the Lab</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Featured Post */}
          {featuredPost && activeCategory === 'All' && (
            <div className="mb-16 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-teal-600/50 transition-all duration-300 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="grid md:grid-cols-2 gap-8 p-8 relative z-10">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[featuredPost.category]}`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-xs">FEATURED</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                      {featuredPost.snippet}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="hidden md:block relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-teal-400/20 to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-10"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter Bar */}
          <div className="mb-12 sticky top-20 z-40 bg-white/95 backdrop-blur py-4 -mx-4 px-4 border-b border-gray-200/50">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-teal-500/20 text-teal-600 border border-teal-600'
                      : 'bg-gray-100 text-gray-600 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className="group cursor-pointer animate-in fade-in-50 slide-in-from-bottom-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-teal-600/50 hover:bg-gray-50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/10">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[post.category]} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Zap className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold text-white bg-gradient-to-r ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {post.snippet}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500">{post.readTime} min read</span>
                      <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
